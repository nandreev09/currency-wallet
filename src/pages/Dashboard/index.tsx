import { useLatestRates } from "@/services/exchange";
import { WalletList } from "@/features/wallet/ui";
import { ConverterForm } from "@/features/converter/ui";
import { useAppSelector } from "@/shared/hooks/redux";
import { selectBaseCurrency } from "@/features/settings/model/selectors";

import { BaseCurrency, ExchangeRates } from "./components";

const Dashboard = () => {
    const baseCurrency = useAppSelector(selectBaseCurrency);
    const { data, isLoading, isError } = useLatestRates(baseCurrency);

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
