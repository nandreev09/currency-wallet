export interface SymbolsResponse {
    success: boolean;

    symbols: Record<string, string>;
}

export interface LatestRatesResponse {
    success: boolean;

    base: string;

    date: string;

    rates: Record<string, number>;
}

export interface ConvertResponse {
    success: boolean;

    result: number;

    info: {
        rate: number;
    };
}