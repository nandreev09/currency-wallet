import { Outlet } from "react-router-dom";

import Header from "./Header";
import Container from "./Container";

function Layout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="py-10">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
}

export default Layout;