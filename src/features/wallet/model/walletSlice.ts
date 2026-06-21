import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadWallet } from "@/shared/lib/storage";

import type {
  WalletCurrency,
  WalletState,
} from "../types";

const savedWallet = loadWallet();

const initialState: WalletState = {
    currencies: savedWallet.length
        ? savedWallet
        : [
              {
                  code: "USD",
                  amount: 1000,
              },
          ],
};

const walletSlice = createSlice({
  name: "wallet",

  initialState,

  reducers: {
    addCurrency(state, action: PayloadAction<WalletCurrency>) {
        const exists = state.currencies.some(
            (currency) => currency.code === action.payload.code
        );
    
        if (exists) {
            return;
        }
    
        state.currencies.push(action.payload);
    },

    removeCurrency(
      state,
      action: PayloadAction<string>
    ) {
      state.currencies = state.currencies.filter(
        (currency) => currency.code !== action.payload
      );
    },

    updateBalance(
      state,
      action: PayloadAction<{
        code: string;
        amount: number;
      }>
    ) {
      const currency = state.currencies.find(
        (item) => item.code === action.payload.code
      );

      if (currency) {
        currency.amount = action.payload.amount;
      }
    },

    resetWallet(state) {
      state.currencies = initialState.currencies;
    },
  },
});

export const {
  addCurrency,
  removeCurrency,
  updateBalance,
  resetWallet,
} = walletSlice.actions;

export default walletSlice.reducer;