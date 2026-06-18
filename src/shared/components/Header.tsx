import Container from "./Container";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="border-b bg-white shadow-sm">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        Currency Wallet
                    </h1>

                    <div className="flex items-center gap-6">
                        <Navigation />

                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;