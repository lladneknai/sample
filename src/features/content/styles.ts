import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContentContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  backgroundImage: `url(/desktop1.jpg)`,
  backgroundSize: "cover",
  minHeight: "calc(100vh - 52px)",
  paddingTop: "5vh",
  paddingLeft: "12px",
  lineHeight: 1.1,
  h1: {
    fontSize: "5em",
    textTransform: "uppercase",
    "&:last-of-type": {
      marginBottom: "1em",
    },
  },
  h3: {
    fontSize: "2.5em",
    lineHeight: 0.5,
    ":nth-of-type(3)": {
      marginBottom: "2em",
    },
  },
}));

const blendStyles = {
  position: "absolute",
  opacity: 1,
  transition: "opacity 750ms ease-in-out",
  h1: {
    // lineHeight: 2,
  },
};

export const LoadTextLower = styled(Box)(
  () =>
    ({
      ...blendStyles,
      opacity: 1,
      h1: {
        mixBlendMode: "overlay",
      },
    } as any)
);

export const LoadTextUpper = styled(Box)(
  () =>
    ({
      ...blendStyles,
      opacity: 0,
      h1: {
        mixBlendMode: "difference",
      },
      ":hover": {
        opacity: 1,
        h1: {
          mixBlendMode: "normal",
        },
      },
    } as any)
);

export const LoadTextContainer = styled(Box)(() => ({}));
