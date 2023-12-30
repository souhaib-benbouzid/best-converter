import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { coins as coinsInitialState } from "../data";
import { Coin, CoinCodes } from "../types";

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    data: coinsInitialState,
  },
  reducers: {
    addCoin: (state, action: PayloadAction<Coin>) => {
      state.data = [...state.data, action.payload];
    },
    updateCoin: (
      state,
      action: PayloadAction<{ code: CoinCodes; data: Coin }>
    ) => {
      const code = action.payload.code;
      const index = state.data.findIndex((coin) => coin.code === code);
      if (index) {
        state.data[index] = action.payload.data;
      }
    },
    deleteCoin: (state, action: PayloadAction<{ code: CoinCodes }>) => {
      const code = action.payload.code;
      const newCoins = state.data.map((coin) => {
        if (coin.code !== code) {
          return coin;
        }
      });
      state.data = newCoins;
    },
  },
});

export const { addCoin, deleteCoin, updateCoin } = coinsSlice.actions;
export default coinsSlice.reducer;
