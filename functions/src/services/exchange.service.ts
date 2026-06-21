import { exchangeApi, API_KEY } from "../config/axios";

import { adaptLatestRates } from "../adapters/exchange.adapter";

import type { ApiLatestRatesResponse } from "../types/exchange";

export async function fetchLatestRates(base: string) {
    const { data } =
        await exchangeApi.get<ApiLatestRatesResponse>(
            "/live",
            {
                params: {
                    access_key: API_KEY,
                    source: base,
                },
            }
        );

    return adaptLatestRates(data);
}