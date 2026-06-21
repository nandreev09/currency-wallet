import type {
    ApiLatestRatesResponse,
    LatestRatesResponse,
} from "../types/exchange";

export function adaptLatestRates(
    data: ApiLatestRatesResponse
): LatestRatesResponse {
    const rates: Record<string, number> = {};

    Object.entries(data.quotes).forEach(([pair, value]) => {
        const currency = pair.replace(data.source, "");
        rates[currency] = value;
    });

    return {
        base: data.source,
        rates,
    };
}