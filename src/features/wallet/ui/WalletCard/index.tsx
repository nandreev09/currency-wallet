import { useAppDispatch } from "@/shared/hooks/redux";

import { removeCurrency } from "../../model/walletSlice";

import type { WalletCurrency } from "../../types";

interface WalletCardProps {
    currency: WalletCurrency;
}

const WalletCard = ({
    currency,
}: WalletCardProps) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeCurrency(currency.code));
    };

    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Currency
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                        {currency.code}
                    </h3>
                </div>

                <button
                    type="button"
                    onClick={handleRemove}
                    className="
                        rounded
                        px-2
                        py-1
                        text-red-600
                        transition-colors
                        hover:bg-red-50
                    "
                >
                    ✕
                </button>
            </div>

            <p className="text-sm text-gray-500">
                Balance
            </p>

            <p className="mt-1 text-xl font-semibold">
                {currency.amount.toFixed(2)}
            </p>
        </div>
    );
};

export default WalletCard;