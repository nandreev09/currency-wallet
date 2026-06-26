import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadWallet } from "@/shared/lib/storage";
import { INITIAL_BALANCE } from "@/shared/constants/wallet";

import type {
  WalletCurrency,
  WalletState,
} from "../types";

const savedWallet = loadWallet();


interface WalletBalanceUpdate {
    code: string;
    amount: number;
}

interface UpdateWalletBalancesPayload {
    updates: WalletBalanceUpdate[];
}


const initialState: WalletState = {
    currencies: savedWallet.length
        ? savedWallet
        : [
              {
                  code: "USD",
                  amount: INITIAL_BALANCE,
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


    resetWallet(state) {
      state.currencies = initialState.currencies;
    },

    updateWalletBalances(
        state,
        action: PayloadAction<UpdateWalletBalancesPayload>
    ) {
        action.payload.updates.forEach((update) => {
            const currency = state.currencies.find(
                (item) => item.code === update.code
            );
    
            if (currency) {
                currency.amount = update.amount;
            }
        });
    },
  },
});

export const {
  addCurrency,
  removeCurrency,
  resetWallet,
  updateWalletBalances,
} = walletSlice.actions;

export default walletSlice.reducer;