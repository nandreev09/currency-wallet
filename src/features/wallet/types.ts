export interface WalletBalance {
    [currency: string]: number;
}

export interface WalletState {
    balances: WalletBalance;
}