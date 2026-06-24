import ExchangeRateItem from "./ExchangeRateItem";

interface ExchangeRatesProps {
    rates: Record<string, number>;
}

const ExchangeRates = ({ rates }: ExchangeRatesProps) => {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Exchange rates
            </h2>

            {Object.entries(rates)
                .slice(0, 10)
                .map(([currency, rate]) => (
                    <ExchangeRateItem
                        key={currency}
                        currency={currency}
                        rate={rate}
                    />
                ))}
        </section>
    );
};

export default ExchangeRates;
