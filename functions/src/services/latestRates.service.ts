import { exchangeApi } from "../config/axios";

import { adaptLatestRates } from "../adapters/latestRates.adapter";

import type { ApiLatestRatesResponse } from "../types/exchange";

export async function fetchLatestRates(base: string) {
    const { data } = await exchangeApi.get<ApiLatestRatesResponse>("/latest", {
        params: {
            base
        }
    });

    return adaptLatestRates(data);
}
