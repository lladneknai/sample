import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
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
}));
