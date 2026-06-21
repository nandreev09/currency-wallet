import { selectBaseCurrency } from "@/features/settings/model/selectors";
import { useAppSelector } from "@/shared/hooks/redux";



function Dashboard() {
    const baseCurrency =
        useAppSelector(selectBaseCurrency);

    const {
        data,
        isLoading,
        isError
    } = useLatestRates(baseCurrency);

    if (isLoading) {
        return (
            <p className="text-xl">
                Loading exchange rates...
            </p>
        );
    }

    if (isError) {
        return (
            <p className="text-xl text-red-600">
                Failed to load exchange rates.
            </p>
        );
    }

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">
                Dashboard
            </h2>

            <div className="rounded-xl bg-white p-6 shadow">
                <p className="mb-4">
                    Base currency:
                    <strong> {baseCurrency}</strong>
                </p>

                <pre className="overflow-auto rounded bg-slate-100 p-4 text-sm">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </section>
    );
}

export default Dashboard;