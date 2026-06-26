import { describe, expect, it } from "vitest";
import { convertCurrency } from "@/shared/lib/currency";

describe("convertCurrency", () => {
    const rates = {
        EUR: 0.92,
        GBP: 0.79,
        USD: 1,
    };

    it("returns the same amount when currencies are equal", () => {
        expect(
            convertCurrency({
                amount: 100,
                from: "USD",
                to: "USD",
                rates,
            })
        ).toBe(100);
    });

    it("converts from USD to another currency", () => {
        expect(
            convertCurrency({
                amount: 100,
                from: "USD",
                to: "EUR",
                rates,
            })
        ).toBe(92);
    });

    it("converts to USD", () => {
        expect(
            convertCurrency({
                amount: 92,
                from: "EUR",
                to: "USD",
                rates,
            })
        ).toBe(100);
    });

    it("converts between two non-USD currencies", () => {
        expect(
            convertCurrency({
                amount: 100,
                from: "EUR",
                to: "GBP",
                rates,
            })
        ).toBeCloseTo(85.869565, 5);
    });
});