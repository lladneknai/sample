import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ButtonContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  // height: "100px",
  // position: "absolute",
  // bottom: 0,
  // right: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingTop: "10vh",
  paddingRight: "12px",
  width: "100%",
}));

export const Option = styled(Button)(() => ({
  display: "flex",
  height: "40px",
  marginBottom: "20px",
  color: "white",
  borderColor: "white",
  borderRadius: "20px",
  width: "200px",
}));

export const ContentContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "left",
  minHeight: "100vh",
  paddingLeft: "12px",
  position: "relative",
  [breakpoints.only("xl")]: {
    fontSize: "80px",
  },
  [breakpoints.only("lg")]: {
    fontSize: "64px",
  },
}));

export const HeroTextContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "left",
  flexDirection: "column",
  position: "absolute",
  top: "10vh",
  width: "fit-content",
  h1: {
    lineHeight: 0.95,
    textTransform: "uppercase",
  },
  "h1, h3": {
    color: "white",
    mixBlendMode: "difference",
  },
  ":hover": {
    h1: {
      // transition: "opacity 750ms ease-in-out",
    },
  },
}));

export const bottomStyles = {
  "h1, h3": {
    mixBlendMode: "overlay",
  },
};

export const topStyles = {
  opacity: 0,
  transition: "opacity 750ms ease-in-out",
  ":hover": {
    opacity: 1,
    "h1, h3": {
      mixBlendMode: "hard-light",
      // mixBlendMode: "none",
    },
  },
};
