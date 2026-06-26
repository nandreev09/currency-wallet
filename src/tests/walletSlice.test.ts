import { describe, expect, it, vi } from "vitest";

vi.mock("@/shared/lib/storage", () => ({
    loadWallet: () => [],
}));

import reducer, {
    addCurrency,
    removeCurrency,
    updateWalletBalances
} from "@/features/wallet/model/walletSlice";

describe("walletSlice", () => {
    const initialState = {
        currencies: [
            {
                code: "USD",
                amount: 1000
            }
        ]
    };

    it("adds a new currency", () => {
        const state = reducer(
            initialState,
            addCurrency({
                code: "EUR",
                amount: 0
            })
        );

        expect(state.currencies).toHaveLength(2);
    });

    it("does not add duplicate currency", () => {
        const state = reducer(
            initialState,
            addCurrency({
                code: "USD",
                amount: 0
            })
        );

        expect(state.currencies).toHaveLength(1);
    });

    it("removes currency", () => {
        const state = reducer(
            {
                currencies: [
                    { code: "USD", amount: 100 },
                    { code: "EUR", amount: 50 }
                ]
            },
            removeCurrency("EUR")
        );

        expect(state.currencies).toHaveLength(1);
        expect(state.currencies[0].code).toBe("USD");
    });

    it("updates balances", () => {
        const state = reducer(
            {
                currencies: [
                    { code: "USD", amount: 100 },
                    { code: "EUR", amount: 50 }
                ]
            },
            updateWalletBalances({
                updates: [
                    {
                        code: "EUR",
                        amount: 999
                    }
                ]
            })
        );

        expect(state.currencies[1].amount).toBe(999);
    });
});
