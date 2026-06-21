import { useAppSelector } from "@/shared/hooks/redux";
import { selectWallet } from "@/features/wallet/model/selectors";

const WalletSection = () => {
    const wallet = useAppSelector(selectWallet);

    return (
        <section className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold mb-4">
                Wallet
            </h2>

            {wallet.map((currency) => (
                <div
                    key={currency.code}
                    className="flex justify-between border-b py-2"
                >
                    <span>{currency.code}</span>

                    <span>{currency.amount.toFixed(2)}</span>
                </div>
            ))}
        </section>
    );
};

export default WalletSection;