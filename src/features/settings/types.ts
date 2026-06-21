export type Theme = "light" | "dark";

export interface SettingsState {
    theme: Theme;
    baseCurrency: string;
    timeZone: string;
}