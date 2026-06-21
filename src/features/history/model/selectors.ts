import type { RootState } from "@/app/store";

export const selectHistory = (
    state: RootState
) => state.history.transactions;