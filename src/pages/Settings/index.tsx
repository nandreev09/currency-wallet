import { useAppSelector, useAppDispatch } from "@/shared/hooks/redux";
import { useEffect, type ChangeEvent } from "react";
import {
    selectTheme,
    selectBaseCurrency,
    selectTimeZone
} from "@/features/settings/model/selectors";
import type { Theme } from "@/features/settings/types";
import { clearHistory } from "@/features/history/model/historySlice";
import { resetWallet } from "@/features/wallet/model/walletSlice";
import {
    setBaseCurrency,
    setTheme
} from "@/features/settings/model/settingsSlice";
import { CURRENCY_INFO } from "@/shared/constants/currencies";

function Settings() {
    const dispatch = useAppDispatch();

    const theme = useAppSelector(selectTheme);

    const baseCurrency = useAppSelector(selectBaseCurrency);

    const timeZone = useAppSelector(selectTimeZone);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setTheme(event.target.value as Theme));
    };

    const handleClearHistory = () => {
        const confirmed = window.confirm(
            "Are you sure you want to clear the transaction history?"
        );

        if (!confirmed) {
            return;
        }

        dispatch(clearHistory());
    };

    const handleClearWallet = () => {
        const confirmed = window.confirm(
            "Are you sure you want to reset your wallet?"
        );

        if (!confirmed) {
            return;
        }

        dispatch(resetWallet());
    };

    const handleBaseCurrencyChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(setBaseCurrency(event.target.value));
    };

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold">Settings</h2>

            <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Theme
                    </h3>

                    <select
                        value={theme}
                        onChange={handleThemeChange}
                        className="mt-2 w-full rounded-md border p-2 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                    >
                        <option value="light">Light</option>

                        <option value="dark">Dark</option>
                    </select>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Base Currency
                    </h3>

                    <select
                        value={baseCurrency}
                        onChange={handleBaseCurrencyChange}
                        className="mt-2 w-full rounded-md border p-2 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                    >
                        {Object.entries(CURRENCY_INFO).map(
                            ([code, currency]) => (
                                <option key={code} value={code}>
                                    {currency.name} {currency.symbol} ({code})
                                </option>
                            )
                        )}
                    </select>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Time Zone
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400">
                        {timeZone}
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Transaction History
                    </h3>

                    <p className="mb-4 text-sm text-gray-500">
                        Remove all saved transactions.
                    </p>

                    <button
                        type="button"
                        onClick={handleClearHistory}
                        className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                    >
                        Clear History
                    </button>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-700 dark:bg-slate-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Wallet
                    </h3>

                    <p className="mb-4 text-sm text-gray-500">
                        Reset wallet to the defaul state.
                    </p>

                    <button
                        type="button"
                        onClick={handleClearWallet}
                        className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                    >
                        Reset Wallet
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Settings;
