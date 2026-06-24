interface BaseCurrencyProps {
    base: string;
}

const BaseCurrency = ({ base }: BaseCurrencyProps) => {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Base currency
            </h2>
            <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                {base}
            </p>
        </section>
    );
};

export default BaseCurrency;
