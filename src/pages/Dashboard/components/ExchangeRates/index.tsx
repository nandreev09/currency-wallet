import ExchangeRateItem from "./ExchangeRateItem";

interface ExchangeRatesProps {
    rates: Record<string, number>;
}

const ExchangeRates = ({
    rates,
}: ExchangeRatesProps) => {
    return (
        <section className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold mb-4">
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