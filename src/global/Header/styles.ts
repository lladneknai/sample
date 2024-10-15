import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(AppBar)(() => ({
  position: "static",
}));

export const HeaderContent = styled(Toolbar)(() => ({
  justifyContent: "space-between",
  paddingLeft: `0px !important`,
}));
