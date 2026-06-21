import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { HistoryState, Transaction } from "../types";

const initialState: HistoryState = {
    transactions: []
};

const historySlice = createSlice({
    name: "history",

    initialState,

    reducers: {
        addTransaction(
            state,
            action: PayloadAction<Transaction>
        ) {
            state.transactions.unshift(action.payload);
        },

        clearHistory(state) {
            state.transactions = [];
        }
    }
});

export const {
    addTransaction,
    clearHistory
} = historySlice.actions;

export default historySlice.reducer;