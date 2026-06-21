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
            <span>{currency}</span>

            <span>{rate}</span>
        </div>
    );
};

export default ExchangeRateItem;