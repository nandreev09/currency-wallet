import type {
    ApiLatestRatesResponse,
    LatestRatesResponse,
} from "../types/exchange";

export function adaptLatestRates(
    data: ApiLatestRatesResponse
): LatestRatesResponse {
    return {
        base: data.base,
        rates: data.rates,
    };
}