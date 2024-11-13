import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)(() => ({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  paddingLeft: "12px",
  width: "calc(100% - 12px)",
}));

export const FooterLogo = styled(Box)(() => ({
  img: {
    height: "24px",
    width: "24px",
    "&:hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
}));

export const FooterLogoAmpt = styled(Box)(() => ({
  img: {
    height: "30px",
    width: "70px",
    "&:hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
}));
