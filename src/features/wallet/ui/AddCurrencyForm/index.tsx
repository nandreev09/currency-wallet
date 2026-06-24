import { useMemo, useState } from "react";

import { useLatestRates } from "@/services/exchange";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";

import { addCurrency } from "../../model/walletSlice";
import { selectWallet } from "../../model/selectors";

interface AddCurrencyFormProps {
    onSuccess?: () => void;
}

const AddCurrencyForm = ({
    onSuccess,
}: AddCurrencyFormProps) => {
    const dispatch = useAppDispatch();

    const wallet = useAppSelector(selectWallet);

    const { data, isLoading, isError } = useLatestRates("USD");

    const availableCurrencies = useMemo(() => {
        if (!data) {
            return [];
        }

        const walletCodes = wallet.map((currency) => currency.code);

        return Object.keys(data.rates).filter(
            (currency) => !walletCodes.includes(currency)
        );
    }, [data, wallet]);

    const [selectedCurrency, setSelectedCurrency] = useState("");

    const currentCurrency =
        selectedCurrency || availableCurrencies[0] || "";

    const handleSubmit = () => {
        if (!currentCurrency) {
            return;
        }

        dispatch(
            addCurrency({
                code: currentCurrency,
                amount: 0,
            })
        );

        onSuccess?.();
    };

    if (isLoading) {
        return <p>Loading currencies...</p>;
    }

    if (isError || !data) {
        return <p>Unable to load currencies.</p>;
    }

    if (availableCurrencies.length === 0) {
        return (
            <p className="text-sm text-gray-500">
                All available currencies have already been added.
            </p>
        );
    }

    return (
        <div className="flex items-center gap-4 rounded-lg border border-gray-300 bg-white shadow-sm p-6 dark:border-gray-700 dark:bg-slate-800">
            <select
                value={currentCurrency}
                onChange={(event) =>
                    setSelectedCurrency(event.target.value)
                }
                className="rounded-md border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
            >
                {availableCurrencies.map((currency) => (
                    <option
                        key={currency}
                        value={currency}
                    >
                        {currency}
                    </option>
                ))}
            </select>

            <button
                type="button"
                onClick={handleSubmit}
                className="
                    rounded-md
                    bg-green-600
                    px-4
                    py-2
                    text-white
                    transition-colors
                    hover:bg-green-700
                "
            >
                Add
            </button>
        </div>
    );
};

export default AddCurrencyForm;