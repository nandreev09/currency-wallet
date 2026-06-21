export interface Transaction {
    id: string;
    from: string;
    to: string;
    fromAmount: number;
    toAmount: number;
    rate: number;
    createdAt: string;
    timeZone: string;
}

export interface HistoryState {
    transactions: Transaction[];
}