import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const AppContainer = styled(Box)(() => ({
  // Dyanmic styles: set by theme
  // backgroundColor: theme.colors.bg,
  // color: theme.colors.text,

  // Static styles
  height: "100%",
  // minHeight: "100vh",
  position: "relative",

  "*": {
    fontFamily: "Exo, sans-serif",
    fontWeight: 400,
    letterSpacing: "-0.00em",
  },
}));
