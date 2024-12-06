import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
    },
  },
};

export const revealedStyles = {
  opacity: 1,
  transition: "opacity 750ms ease-in-out",
  "h1, h3": {
    mixBlendMode: "hard-light",
  },
};
