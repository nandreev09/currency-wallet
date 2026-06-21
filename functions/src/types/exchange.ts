export interface ApiLatestRatesResponse {
    success: boolean;
    source: string;
    timestamp: number;
    quotes: Record<string, number>;
}

export interface LatestRatesResponse {
    base: string;
    rates: Record<string, number>;
}