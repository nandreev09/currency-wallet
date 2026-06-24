import { useEffect } from "react";

import { useAppSelector } from "@/shared/hooks/redux";

import { selectTheme } from "@/features/settings/model/selectors";

interface ThemeProviderProps {
    children: React.ReactNode;
}

function ThemeProvider({
    children,
}: ThemeProviderProps) {

    const theme =
        useAppSelector(selectTheme);

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
    }, [theme]);

    return children;
}

export default ThemeProvider;