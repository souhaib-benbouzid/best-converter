import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./coinsSlice";
import conversionsReducer from "./conversionsSlice";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    conversions: conversionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
