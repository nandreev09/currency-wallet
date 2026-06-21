import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from "@/features/wallet/model/walletSlice";
import historyReducer from "@/features/history/model/historySlice";

export const rootReducer = combineReducers({
    wallet: walletReducer,
    history: historyReducer
});