import type { RootState } from "@/app/store";

export const selectSettings = (
    state: RootState
) => state.settings;

export const selectTheme = (
    state: RootState
) => state.settings.theme;

export const selectBaseCurrency = (
    state: RootState
) => state.settings.baseCurrency;

export const selectTimeZone = (
    state: RootState
) => state.settings.timeZone;