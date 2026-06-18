import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className="border-b bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold">
                        Currency Wallet
                    </h1>

                    <nav className="flex gap-6">
                        <Link
                            to="/"
                            className="font-medium hover:text-blue-600"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/history"
                            className="font-medium hover:text-blue-600"
                        >
                            History
                        </Link>

                        <Link
                            to="/settings"
                            className="font-medium hover:text-blue-600"
                        >
                            Settings
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-10">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;