import { useAppSelector } from "@/shared/hooks/redux";
import { selectHistory } from "@/features/history/model/selectors";

function History() {
    const transactions = useAppSelector(selectHistory);

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
                    {transactions.map((transaction) => {
                        return (
                            <div
                                key={transaction.id}
                                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800"
                            >
                                <p className="text-gray-500 dark:text-gray-400">
                                    {transaction.from} → {transaction.to}
                                </p>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    <strong>
                                        {transaction.fromAmount.toFixed(2)} {transaction.from}
                                    </strong>
                                </p>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    ↓
                                </p>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    <strong>
                                        {transaction.toAmount.toFixed(2)} {transaction.to}
                                    </strong>
                                </p>

                                <p className="mt-3 text-sm text-gray-500">
                                    Rate: {transaction.rate.toFixed(4)}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {new Date(transaction.createdAt).toLocaleString()}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default History;