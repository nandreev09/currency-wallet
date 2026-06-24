interface ExchangeRateItemProps {
    currency: string;
    rate: number;
}

const ExchangeRateItem = ({ currency, rate }: ExchangeRateItemProps) => {
    return (
        <div className="flex justify-between border-b py-2 dark:border-gray-300">
            <span className="text-gray-600 dark:text-gray-300">{currency}</span>

            <span className="font-medium text-gray-900 dark:text-white">
                {rate.toFixed(4)}
            </span>
        </div>
    );
};

export default ExchangeRateItem;
