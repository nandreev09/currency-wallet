import { apiClient } from "./client";

import type {
    LatestRatesResponse,
    SymbolsResponse,
    ConvertResponse
} from "./types";

export async function getSymbols() {
    const { data } =
        await apiClient.get<SymbolsResponse>(
            "/symbols"
        );

    return data;
}

export async function getLatestRates(
    base: string
) {
    const { data } =
        await apiClient.get<LatestRatesResponse>(
            "/latest",
            {
                params: {
                    base
                }
            }
        );

    return data;
}

export async function convertCurrency(
    from: string,
    to: string,
    amount: number
) {
    const { data } =
        await apiClient.get<ConvertResponse>(
            "/convert",
            {
                params: {
                    from,
                    to,
                    amount
                }
            }
        );

    return data;
}