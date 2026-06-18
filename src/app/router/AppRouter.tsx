import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Layout from "@/shared/components/Layout";

import Dashboard from "@/pages/Dashboard";
import History from "@/pages/History";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Dashboard />}
                    />

                    <Route
                        path="history"
                        element={<History />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;