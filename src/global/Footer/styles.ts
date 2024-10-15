import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)(() => ({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  width: "100%",
}));

export const FooterLogo = styled(Box)(() => ({
  img: {
    height: "40px",
    width: "40px",
    "&:hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
}));
