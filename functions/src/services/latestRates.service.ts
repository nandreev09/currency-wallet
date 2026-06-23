import { exchangeApi } from "../config/axios";

import { adaptLatestRates } from "../adapters/latestRates.adapter";

import type { ApiLatestRatesResponse } from "../types/exchange";
import { USE_MOCK } from "../config/env";
import { mockLatestRates } from "../mock/latestRates.mock";

export async function fetchLatestRates(
    base: string
) {

    if (USE_MOCK) {
        return {
            ...mockLatestRates,
            base,
        };
    }

    try {
        const { data } =
            await exchangeApi.get<ApiLatestRatesResponse>(
                "/latest",
                {
                    params: {
                        base,
                    },
                }
            );

        return adaptLatestRates(data);
    } catch (error) {

        console.warn(
            "Frankfurter unavailable. Using mock data."
        );

        return {
            ...mockLatestRates,
            base,
        };
    }
}
