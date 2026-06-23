import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { saveSettings, saveWallet, saveHistory } from "@/shared/lib/storage";

export const store = configureStore({
    reducer: rootReducer
});

store.subscribe(() => {
    const state = store.getState();

    saveWallet(state.wallet.currencies);
    saveHistory(state.history.transactions);
    saveSettings(state.settings);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
