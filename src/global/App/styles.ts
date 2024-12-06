import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const AppContainer = styled(Box)(() => ({
  // Static styles
  height: "100%",
  position: "relative",
  fontFamily: "Exo, sans-serif",

  "*": {
    fontFamily: "Exo, sans-serif !important",
  },
}));
