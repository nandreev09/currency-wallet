import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { selectTheme } from "@/features/settings/model/selectors";
import { setTheme } from "@/features/settings/model/settingsSlice";

function ThemeToggle() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    const handleToggleTheme = () => {
        dispatch(
            setTheme(
                theme === "light"
                    ? "dark"
                    : "light"
            )
        );
    };

    return (
        <button
            type="button"
            onClick={handleToggleTheme}
            className="
                rounded-lg
                border
                border-gray-300
                px-4
                py-2
                transition-colors

                hover:bg-gray-100

                dark:border-gray-600
                dark:hover:bg-slate-700
            "
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}

export default ThemeToggle;