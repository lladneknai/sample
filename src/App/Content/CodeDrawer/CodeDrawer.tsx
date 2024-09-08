import React from "react";
import Drawer from "@mui/material/Drawer";
// import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
// import EastRoundedIcon from "@mui/icons-material/EastRounded";
// import WestRoundedIcon from "@mui/icons-material/WestRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CodeView from "../CodeView";
import {
  //   DrawerContainer,
  DrawerClosedBox,
  DrawerClosedButton,
  DrawerOpenButton,
  DrawerOpen,
} from "./styles";

const CodeDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <DrawerClosedBox />
      <DrawerClosedButton
        aria-label="view-source-code"
        color="primary"
        onClick={toggleDrawer(true)}
      >
        <ArrowForwardIosRoundedIcon />
        {/* <EastRoundedIcon /> */}
      </DrawerClosedButton>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { overflowY: "visible" } }}
      >
        <DrawerOpen>
          <DrawerOpenButton
            aria-label="close-source-code"
            onClick={toggleDrawer(false)}
            color="primary"
          >
            {/* <WestRoundedIcon /> */}
            <ArrowBackIosRoundedIcon />
          </DrawerOpenButton>
          <CodeView />
        </DrawerOpen>
      </Drawer>
    </>
  );
};

export default CodeDrawer;
