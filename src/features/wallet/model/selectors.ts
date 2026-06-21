import type { RootState } from "@/app/store";

export const selectWallet = (
    state: RootState
) => state.wallet;

export const selectBalances = (
    state: RootState
) => state.wallet.balances;