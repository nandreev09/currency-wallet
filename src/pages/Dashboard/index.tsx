import { useAppSelector } from "@/shared/hooks/redux";
import { selectBalances } from "@/features/wallet/model/selectors";

function Dashboard() {
    const balances =
    useAppSelector(selectBalances);

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">
                Dashboard
            </h2>

            <div className="space-y-4">
                {Object.entries(balances).map(
                    ([currency, amount]) => (
                        <div
                            key={currency}
                            className="
                                rounded-xl
                                bg-white
                                p-5
                                shadow
                            "
                        >
                            <h3 className="text-xl font-semibold">
                                {currency}
                            </h3>

                            <p className="mt-2 text-3xl">
                                {amount}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Dashboard;