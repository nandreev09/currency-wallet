import type { WalletCurrency } from "@/features/wallet/types";

const WALLET_KEY = "wallet";

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