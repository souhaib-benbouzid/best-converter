import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { conversions } from "../data";
import { Conversion } from "../types";

const conversionsSlice = createSlice({
  name: "conversions",
  initialState: {
    data: conversions,
  },
  reducers: {
    addConversion: (state, action: PayloadAction<Conversion>) => {
      state.data = [...state.data, action.payload];
    },
    updateConversion: (
      state,
      action: PayloadAction<{ id: Conversion["id"]; data: Conversion }>
    ) => {
      const id = action.payload.id;
      const index = state.data.findIndex((conversion) => conversion.id === id);
      if (index) {
        state.data[index] = action.payload.data;
      }
    },
    deleteConversion: (
      state,
      action: PayloadAction<{ id: Conversion["id"] }>
    ) => {
      const id = action.payload.id;
      const newConversions = state.data.map((Conversion) => {
        if (Conversion.id !== id) {
          return Conversion;
        }
      });
      state.data = newConversions;
    },
  },
});

export default conversionsSlice.reducer;
export const { addConversion, deleteConversion, updateConversion } =
  conversionsSlice.actions;
