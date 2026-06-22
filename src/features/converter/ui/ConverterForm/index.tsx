import { useState } from "react";

import { useAppSelector } from "@/shared/hooks/redux";

import { selectWallet } from "@/features/wallet/model/selectors";

import { useLatestRates } from "@/services/exchange";
import { convertCurrency } from "@/shared/lib/currency";

import { useAppDispatch } from "@/shared/hooks/redux";

import { updateWalletBalances } from "@/features/wallet/model/walletSlice";



const ConverterForm = () => {
    const wallet = useAppSelector(selectWallet);
    const dispatch = useAppDispatch();
    const { data } = useLatestRates("USD");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");

    const isConvertDisabled =
    !from ||
    !to ||
    from === to ||
    Number(amount) <= 0;

    const handleConvert = () => {
        if (!data) {
            return;
        }
    
        const amountNumber = Number(amount);

        if (from === to) {
            return;
        }
    
        if (!from || !to || amountNumber <= 0) {
            return;
        }
    
        const fromCurrency = wallet.find(
            (currency) => currency.code === from
        );
    
        const toCurrency = wallet.find(
            (currency) => currency.code === to
        );
    
        if (!fromCurrency || !toCurrency) {
            return;
        }
    
        if (fromCurrency.amount < amountNumber) {
            alert("Insufficient funds");
    
            return;
        }
    
        const convertedAmount = convertCurrency({
            amount: amountNumber,
            from,
            to,
            rates: data.rates,
        });
        
        dispatch(
            updateWalletBalances({
                updates: [
                    {
                        code: from,
                        amount: fromCurrency.amount - amountNumber,
                    },
                    {
                        code: to,
                        amount: toCurrency.amount + convertedAmount,
                    },
                ],
            })
        );
        
        setFrom("");
        setTo("");
        setAmount("");
    };

    return (
        <section className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Currency Converter
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-2 block font-medium">
                        From
                    </label>

                    <select
                        value={from}
                        onChange={(event) => setFrom(event.target.value)}
                        className="w-full rounded-md border p-2"
                    >
                        <option value="">
                            Select currency
                        </option>

                        {wallet.map((currency) => (
                            <option
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        To
                    </label>

                    <select
                        value={to}
                        onChange={(event) => setTo(event.target.value)}
                        className="w-full rounded-md border p-2"
                    >
                        <option value="">
                            Select currency
                        </option>

                        {wallet.map((currency) => (
                            <option
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Amount
                    </label>

                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onChange={(event) =>
                            setAmount(event.target.value)
                        }
                        placeholder="Enter amount"
                        className="w-full rounded-md border p-2"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleConvert}
                    disabled={isConvertDisabled}
                    className="
                        rounded-md
                        bg-blue-600
                        px-4
                        py-2
                        text-white
                        transition-colors
                        hover:bg-blue-700
                        disabled:cursor-not-allowed
                        disabled:bg-gray-400
                    "
                >
                    Convert
                </button>
            </div>
        </section>
    );
};

export default ConverterForm;