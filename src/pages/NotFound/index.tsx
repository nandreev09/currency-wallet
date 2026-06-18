import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-7xl font-bold">
                404
            </h1>

            <p>Page not found.</p>

            <Link
                to="/"
                className="rounded bg-blue-600 px-6 py-3 text-white"
            >
                Back to dashboard
            </Link>
        </div>
    );
}

export default NotFound;