import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shape of state
interface AppState {
  imageNumber: number;
  revealed: boolean;
}

// Initial state
const initialState: AppState = {
  imageNumber: 1,
  revealed: false,
};

// Slice
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setImageNumber(state, action: PayloadAction<number>) {
      state.imageNumber = action.payload;
    },
    setRevealed(state, action: PayloadAction<boolean>) {
      state.revealed = action.payload;
    },
  },
});

// Exports
export const { setImageNumber, setRevealed } = appSlice.actions;

export default appSlice.reducer;
