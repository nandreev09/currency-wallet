import  { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { WalletState } from "../types";

const initialState: WalletState = {
    balances: {
        USD: 1000,
        EUR: 500
    }
};

const walletSlice = createSlice({
    name: "wallet",

    initialState,

    reducers: {
        addCurrency(
            state,
            action: PayloadAction<string>
        ) {
            if (!state.balances[action.payload]) {
                state.balances[action.payload] = 0;
            }
        },

        updateBalance(
            state,
            action: PayloadAction<{
                currency: string;
                amount: number;
            }>
        ) {
            state.balances[action.payload.currency] =
                action.payload.amount;
        }
    }
});

export const {
    addCurrency,
    updateBalance
} = walletSlice.actions;

export default walletSlice.reducer;