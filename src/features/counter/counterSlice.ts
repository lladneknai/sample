import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    incremented(state) {
      // redux toolkit shorthand
      state.value++;
    },
  },
});

export const { amountAdded, incremented } = counterSlice.actions;
export default counterSlice.reducer;
