import { useState } from "react";

import { useAppSelector } from "@/shared/hooks/redux";

import { selectWallet } from "../../model/selectors";

import AddCurrencyButton from "../AddCurrencyButton";
import AddCurrencyForm from "../AddCurrencyForm";
import WalletCard from "../WalletCard";

const WalletList = () => {
    const wallet = useAppSelector(selectWallet);

    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Wallet
                </h2>

                <AddCurrencyButton
                    onClick={() => setIsFormOpen((prev) => !prev)}
                />
            </div>

            {isFormOpen && (
    <div className="mb-6">
        <AddCurrencyForm
            onSuccess={() => setIsFormOpen(false)}
        />
    </div>
)}

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {wallet.map((currency) => (
                    <WalletCard
                        key={currency.code}
                        currency={currency}
                    />
                ))}
            </div>
        </section>
    );
};

export default WalletList;