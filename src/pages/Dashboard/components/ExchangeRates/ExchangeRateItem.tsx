interface ExchangeRateItemProps {
    currency: string;
    rate: number;
}

const ExchangeRateItem = ({
    currency,
    rate,
}: ExchangeRateItemProps) => {
    return (
        <div className="flex justify-between border-b py-2">
            <span className="text-gray-600 dark:text-gray-300">{currency}</span>

            <span className="text-gray-600 dark:text-gray-300">{rate}</span>
        </div>
    );
};

export default ExchangeRateItem;