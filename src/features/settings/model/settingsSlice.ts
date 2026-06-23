import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadSettings } from "@/shared/lib/storage";

import type { SettingsState, Theme } from "../types";

const saveSettings = loadSettings();

const initialState: SettingsState = saveSettings ?? {
    theme: "light",
    baseCurrency: "USD",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
};

const settingsSlice = createSlice({
    name: "settings",

    initialState,

    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },

        setBaseCurrency(state, action: PayloadAction<string>) {
            state.baseCurrency = action.payload;
        },

        setTimeZone(state, action: PayloadAction<string>) {
            state.timeZone = action.payload;
        }
    }
});

export const { setTheme, setBaseCurrency, setTimeZone } = settingsSlice.actions;

export default settingsSlice.reducer;
