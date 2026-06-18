import { PropsWithChildren } from "react";

import { Provider } from "react-redux";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

import { store } from "../store";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});

export function AppProviders({
    children
}: PropsWithChildren) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}