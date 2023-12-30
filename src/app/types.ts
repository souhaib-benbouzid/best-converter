export enum CoinCodes {
  "PAYSERA" = "PAYSERA",
  "DZD" = "DZD",
  "USDT" = "USDT",
}

export type Coin = {
  name: string;
  code: CoinCodes;
};

export type Conversion = {
  id: string;
  rate: number;
  fee: number;
  from: CoinCodes;
  to: CoinCodes;
};
