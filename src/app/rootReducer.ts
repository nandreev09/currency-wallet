import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from "@/features/wallet/model/walletSlice";
import historyReducer from "@/features/history/model/historySlice";
import settingsReducer from "@/features/settings/model/settingsSlice";

export const rootReducer = combineReducers({
    wallet: walletReducer,
    history: historyReducer,
    settings: settingsReducer
});