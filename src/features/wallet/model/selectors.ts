import type { RootState } from "@/app/store";

export const selectWallet = (
  state: RootState
) => state.wallet.currencies;

export const selectCurrencyByCode =
  (code: string) =>
  (state: RootState) =>
    state.wallet.currencies.find(
      (currency) => currency.code === code
    );