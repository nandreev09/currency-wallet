import { beforeEach, describe, expect, it, vi } from "vitest";
import {
    clearWallet,
    loadWallet,
    saveWallet
} from "@/shared/lib/storage";

vi.mock("@/shared/constants/storage", () => ({
    STORAGE_KEYS: {
        WALLET: "wallet"
    }
}));

describe("walletStorage", () => {
    beforeEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it("returns empty array if storage is empty", () => {
        expect(loadWallet()).toEqual([]);
    });

    it("saves wallet into localStorage", () => {
        const spy = vi.spyOn(Storage.prototype, "setItem");

        const wallet = [
            {
                code: "USD",
                amount: 100
            }
        ];

        saveWallet(wallet);

        expect(spy).toHaveBeenCalledOnce();
        expect(loadWallet()).toEqual(wallet);
    });

    it("returns empty array for invalid JSON", () => {
        localStorage.setItem("wallet", "{invalid json");

        expect(loadWallet()).toEqual([]);
    });

    it("clears wallet", () => {
        saveWallet([
            {
                code: "USD",
                amount: 100
            }
        ]);

        clearWallet();

        expect(loadWallet()).toEqual([]);
    });
});
