import type { WalletCurrency } from "@/features/wallet/types";
import type { Transaction } from "@/features/history/types";

const WALLET_KEY = "wallet";
const HISTORY_KEY = "history";

export const saveHistory = (
    history: Transaction[]
) => {
    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );
};

export const loadHistory = (): Transaction[] => {
    const data = localStorage.getItem(HISTORY_KEY);

    return data ? JSON.parse(data) : [];
};

export const loadWallet = (): WalletCurrency[] => {
    const data = localStorage.getItem(WALLET_KEY);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
};

export const saveWallet = (
    wallet: WalletCurrency[]
): void => {
    localStorage.setItem(
        WALLET_KEY,
        JSON.stringify(wallet)
    );
};

export const clearWallet = (): void => {
    localStorage.removeItem(WALLET_KEY);
};