// Code block theme objects
import { arta, irBlack, monoBlue } from "react-code-blocks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//
// THEME TYPES / INTERFACES
//
export type ThemeName = "light" | "twilight" | "dark";

export type ThemeObject = {
  codeTheme: typeof arta | typeof irBlack | typeof monoBlue;
  colors: {
    accent: string;
    bg: string;
    text: string;
  };
  name: ThemeName;
};

interface ThemeState {
  theme: ThemeObject;
}

//
// THEME STYLE DEFINITIONS
//
const DefaultTheme: ThemeObject = {
  colors: { bg: "#ffffff", text: "#213f59", accent: "#333" },
  codeTheme: monoBlue,
  name: "light",
};

const DarkTheme: ThemeObject = {
  colors: { bg: "#333", text: "#ddd", accent: "#213f59" },
  codeTheme: irBlack,
  name: "dark",
};

const TwilightTheme: ThemeObject = {
  codeTheme: arta,
  colors: { bg: "#213f59", text: "#ffd9bf", accent: "#333" },
  name: "twilight",
};

export const themes: ThemeObject[] = [DefaultTheme, DarkTheme, TwilightTheme];

//
// THEME FUNCTIONS & HANDLING
//
const getCodeTheme = (key: ThemeName) => {
  const match = themes.find((t) => t.name === key);
  return match || DefaultTheme;
};

const initialState: ThemeState = {
  theme: DarkTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeName>) {
      state.theme = getCodeTheme(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
