import { useQuery } from "@tanstack/react-query";

import { getLatestRates } from "../exchange.service";

export function useLatestRates(
    base: string
) {
    return useQuery({
        queryKey: ["rates", base],
        queryFn: () => getLatestRates(base),
        staleTime: 1000 * 60 * 5,
    });
}