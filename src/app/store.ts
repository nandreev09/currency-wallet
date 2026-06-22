import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { saveWallet } from "@/shared/lib/storage";

import { saveHistory } from "@/shared/lib/storage";

export const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(() => {
    const state = store.getState();

    saveWallet(state.wallet.currencies);
    saveHistory(state.history.transactions);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;