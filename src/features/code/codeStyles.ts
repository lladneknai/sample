import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";

// Base button styles
const wid = "13px";
const baseButtonStyles = {
  cursor: "pointer",
  width: wid,
  borderRadius: wid,
  height: wid,
  minWidth: wid,
  padding: 0,
  svg: {
    fill: "#000",
    opacity: 0,
    stroke: "#000",
  },
};

export const ButtonContainer = styled(Stack)(() => ({
  "&:hover": {
    svg: {
      opacity: 1,
    },
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  ...baseButtonStyles,
  backgroundColor: "#FF605C !important",
  svg: {
    ...baseButtonStyles.svg,
    transform: "scale(0.4)",
  },
}));

export const CodeBlockSkeleton = styled(Skeleton)(() => ({
  // width: "750px",
  // height: "100vh",
}));

export const CodePreviewContainer = styled(Box)(() => ({
  // height: "100vh",
  borderRadius: "0 0 10px 0",
  height: "100%",
  fontFamily: "Monaco, monospace",
  fontSize: "10px",
  lineHeight: "11px",
  overflowY: "scroll",
  overflowX: "scroll",
  width: "100%",
  "& code": {
    height: "calc(100vh - 60px)",
  },
  "& code > span": {
    borderRadius: "0 !important",
    padding: "0px !important",
  },
}));

export const CodeViewHeader = styled(Stack)(() => ({}));

export const DrawerContainer = styled(Box)(() => ({
  position: "relative",
  height: "0px",
}));

export const DrawerClosedButton = styled(Fab)(() => ({
  position: "absolute",
  top: "40%",
  left: "-20px",
}));

export const DrawerOpenButton = styled(Fab)(() => ({
  position: "absolute",
  top: "40%",
  right: "-20px",
}));

export const DrawerClosedBox = styled(Box)(() => ({
  position: "absolute",
  background: "#0ff2",
  height: "calc(100vh - 64px)",
  width: "10px",
}));

export const DrawerOpen = styled(Box)(() => ({
  position: "relative",
  minHeight: "100vh",
  maxWidth: "1000px",
}));

export const Filename = styled(Box)(() => ({
  fontSize: "12px",
  textAlign: "center",
  width: "100%",
}));

export const FileTreeContainer = styled(Box)(() => ({
  // height: "370px",
  overflow: "scroll",
  width: "250px",
  "*": {
    fontSize: "12px !important",
  },
}));

export const FullscreenButton = styled(IconButton)(() => ({
  ...baseButtonStyles,
  backgroundColor: "#00CA4E !important",
  svg: {
    ...baseButtonStyles.svg,
    transform: "scale(0.45)",
  },
}));

export const HeaderBar = styled(Box)(() => ({
  alignItems: "center",
  backgroundColor: "#ccc",
  borderBottom: "1px solid #aaa",
  borderRadius: "10px 10px 0 0",
  display: "flex",
  flexDirection: "row",
  height: "32px",
  padding: "7px 8px 6px 8px",
}));

export const MinimizeButton = styled(IconButton)(() => ({
  ...baseButtonStyles,
  backgroundColor: "#FFBD44 !important",
  svg: {
    ...baseButtonStyles.svg,
    marginBottom: "10px",
    strokeWidth: 0,
    transform: "scale(0.6)",
  },
}));
