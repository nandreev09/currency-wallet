import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { saveWallet } from "@/shared/lib/storage";

export const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(() => {
    const currentWallet = store.getState().wallet.currencies;

    if (currentWallet !== previousWallet) {
        previousWallet = currentWallet;

        saveWallet(currentWallet);
    }
});

let previousWallet = store.getState().wallet.currencies;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;