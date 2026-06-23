export interface ApiLatestRatesResponse {
    amount: number;
    base: string;
    date: string;
    rates: Record<string, number>;
}

export interface LatestRatesResponse {
    base: string;
    rates: Record<string, number>;
}