import { useAppSelector } from "@/shared/hooks/redux";

function History() {
    const transactions = useAppSelector(
        (state) => state.history.transactions
    );

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">
                Transaction History
            </h2>

            {transactions.length === 0 ? (
                <div className="rounded-xl bg-white p-6 shadow">
                    No transactions yet.
                </div>
            ) : (
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className="rounded-xl bg-white p-5 shadow"
                        >
                            <p>
                                {transaction.from} → {transaction.to}
                            </p>

                            <p>
                                {transaction.fromAmount} →{" "}
                                {transaction.toAmount}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default History;