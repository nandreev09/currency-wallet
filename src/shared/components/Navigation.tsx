import { NavLink } from "react-router-dom";
import clsx from "clsx";

const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
        "transition-colors font-medium",
        isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    );

function Navigation() {
    return (
        <nav className="flex gap-6">
            <NavLink to="/" end className={linkClass}>
                Dashboard
            </NavLink>

            <NavLink to="/history" className={linkClass}>
                History
            </NavLink>

            <NavLink to="/settings" className={linkClass}>
                Settings
            </NavLink>
        </nav>
    );
}

export default Navigation;