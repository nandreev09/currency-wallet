import axios from "axios";

import type { LatestRatesResponse } from "./exchange.types";

const API_URL =
    import.meta.env.VITE_API_URL;

export async function getLatestRates(
    base: string
) {
    const { data } =
        await axios.get<LatestRatesResponse>(
            `${API_URL}/latestRates`,
            {
                params: {
                    base,
                },
            }
        );

    return data;
}