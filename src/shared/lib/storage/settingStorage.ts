import type { SettingsState } from "@/features/settings/types";
import { STORAGE_KEYS } from "@/shared/constants/storage";

export const saveSettings = (settings: SettingsState) => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};

export const loadSettings = (): SettingsState | null => {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);

    return data ? JSON.parse(data) : null;
};
