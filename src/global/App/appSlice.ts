import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shape of state
interface AppState {
  imageNumber: number;
}

// Initial state
const initialState: AppState = {
  imageNumber: 1,
};

// Slice
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setImageNumber(state, action: PayloadAction<number>) {
      state.imageNumber = action.payload;
    },
  },
});

// Exports
export const { setImageNumber } = appSlice.actions;

export default appSlice.reducer;
