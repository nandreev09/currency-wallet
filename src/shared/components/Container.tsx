import type { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto w-full max-w-7xl px-6">
            {children}
        </div>
    );
}

export default Container;