import type { LatestRatesResponse } from "../types/exchange";

export const mockLatestRates: LatestRatesResponse = {
    base: "USD",

    rates: {
        EUR: 0.92,
        GBP: 0.79,
        CHF: 0.88,
        JPY: 162.4,
        CAD: 1.36,
        AUD: 1.54,
    },
};