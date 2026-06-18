import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from "@/features/wallet/model/walletSlice";

export const rootReducer = combineReducers({
    wallet: walletReducer
});