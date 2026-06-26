import type { Transaction } from "@/features/history/types";
import { STORAGE_KEYS } from "@/shared/constants/storage";

export const saveHistory = (history: Transaction[]) => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
};

export const loadHistory = (): Transaction[] => {
    const data = localStorage.getItem(STORAGE_KEYS.HISTORY);

    return data ? JSON.parse(data) : [];
};
