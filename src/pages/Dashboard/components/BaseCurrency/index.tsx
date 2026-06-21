interface BaseCurrencyProps {
    base: string;
}

const BaseCurrency = ({ base }: BaseCurrencyProps) => {
    return (
        <section className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">
                Base currency
            </h2>

            <p className="mt-2 text-2xl font-bold">
                {base}
            </p>
        </section>
    );
};

export default BaseCurrency;