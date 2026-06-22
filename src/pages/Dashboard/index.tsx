import { useLatestRates } from "@/services/exchange";
import { WalletList } from "@/features/wallet/ui";
import { ConverterForm } from "@/features/converter/ui";

import {
    BaseCurrency,
    ExchangeRates
} from "./components";

const Dashboard = () => {
    const { data, isLoading, isError } = useLatestRates("USD");

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !data) {
        return <p>Error loading exchange rates.</p>;
    }

    return (
        <main className="space-y-6 p-6">
            <BaseCurrency base={data.base} />

            <ExchangeRates rates={data.rates} />

            <WalletList />

            <ConverterForm />
        </main>
    );
};

export default Dashboard;