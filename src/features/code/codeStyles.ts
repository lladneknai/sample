import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";

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

export const FileTreeContainer = styled(Box)(() => ({
  width: "250px",
  "*": {
    fontSize: "12px !important",
  },
  //   maxWidth: "250px",
}));

export const CodeBlockSkeleton = styled(Skeleton)(() => ({
  width: "750px",
  height: "100vh",
}));

export const CodeViewHeader = styled(Stack)(() => ({}));

export const CodePreviewContainer = styled(Box)(() => ({
  height: "100vh",
  fontFamily: "Monaco, monospace",
  fontSize: "10px",
  lineHeight: "11px",
  overflowY: "scroll",
  overflowX: "scroll",
  width: "750px",
  "& code": {
    height: "calc(100vh - 60px)",
  },
  "& code > span": {
    borderRadius: "0 !important",
    padding: "0px !important",
  },
}));
