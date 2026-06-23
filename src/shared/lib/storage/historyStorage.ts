import type { Transaction } from "@/features/history/types";
const HISTORY_KEY = "history";


export const saveHistory = (history: Transaction[]) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const loadHistory = (): Transaction[] => {
    const data = localStorage.getItem(HISTORY_KEY);

    return data ? JSON.parse(data) : [];
};