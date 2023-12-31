import { v4 as uuidv4 } from "uuid";
import { Coin, CoinCodes } from "../types";

export const conversions = [
  {
    id: uuidv4(),
    rate: 240,
    fee: 0,
    from: CoinCodes.PAYSERA,
    to: CoinCodes.DZD,
  },
  {
    id: uuidv4(),
    rate: 1 / 0.922,
    fee: 0,
    from: CoinCodes.PAYSERA,
    to: CoinCodes.USDT,
  },
  {
    id: uuidv4(),
    rate: 0.922,
    fee: 0,
    from: CoinCodes.USDT,
    to: CoinCodes.PAYSERA,
  },
  {
    id: uuidv4(),
    rate: 1 / 0.922,
    fee: 0,
    from: CoinCodes.USDT,
    to: CoinCodes.DZD,
  },
  {
    id: uuidv4(),
    rate: 1 / 240,
    fee: 0,
    from: CoinCodes.DZD,
    to: CoinCodes.PAYSERA,
  },
  {
    id: uuidv4(),
    rate: 1 / 225.55,
    fee: 0,
    from: CoinCodes.DZD,
    to: CoinCodes.USDT,
  },
];

export const coins: Coin[] = [
  {
    code: CoinCodes.PAYSERA,
    name: "PaySERA",
  },
  {
    code: CoinCodes.USDT,
    name: "USDT",
  },
  {
    code: CoinCodes.DZD,
    name: "DZD",
  },
];
