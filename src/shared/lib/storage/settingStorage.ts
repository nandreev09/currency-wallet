import type { SettingsState } from "@/features/settings/types";

const SETTINGS_KEY = "settings";

export const saveSettings = (settings: SettingsState) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export const loadSettings = (): SettingsState | null => {
    const data = localStorage.getItem(SETTINGS_KEY);

    return data ? JSON.parse(data) : null;
};
