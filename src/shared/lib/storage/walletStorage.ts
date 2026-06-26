import type { WalletCurrency } from "@/features/wallet/types";
import { STORAGE_KEYS } from "@/shared/constants/storage";

export const loadWallet = (): WalletCurrency[] => {
    const data = localStorage.getItem(STORAGE_KEYS.WALLET);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
};

export const saveWallet = (wallet: WalletCurrency[]): void => {
    localStorage.setItem(STORAGE_KEYS.WALLET, JSON.stringify(wallet));
};

export const clearWallet = (): void => {
    localStorage.removeItem(STORAGE_KEYS.WALLET);
};
