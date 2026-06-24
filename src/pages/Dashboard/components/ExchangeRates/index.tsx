import ExchangeRateItem from "./ExchangeRateItem";

interface ExchangeRatesProps {
    rates: Record<string, number>;
}

const ExchangeRates = ({ rates }: ExchangeRatesProps) => {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Exchange Rates
            </h2>

            <div className="max-h-96 overflow-y-auto pr-2">
                {Object.entries(rates).map(([currency, rate]) => (
                    <ExchangeRateItem
                        key={currency}
                        currency={currency}
                        rate={rate}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExchangeRates;
