export interface WalletCurrency {
    code: string;
    amount: number;
  }
  
  export interface WalletState {
    currencies: WalletCurrency[];
  }