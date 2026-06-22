interface ConvertCurrencyParams {
    amount: number;
    from: string;
    to: string;
    rates: Record<string, number>;
}

export const convertCurrency = ({
    amount,
    from,
    to,
    rates,
}: ConvertCurrencyParams): number => {
    if (from === to) {
        return amount;
    }

    if (from === "USD") {
        return amount * rates[to];
    }

    if (to === "USD") {
        return amount / rates[from];
    }

    const amountInUsd = amount / rates[from];

    return amountInUsd * rates[to];
};