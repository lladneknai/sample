import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
// import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
// import EastRoundedIcon from "@mui/icons-material/EastRounded";
// import WestRoundedIcon from "@mui/icons-material/WestRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import {
  CodePreviewContainer,
  CodeViewHeader,
  FileTreeContainer,
  DrawerClosedBox,
  DrawerClosedButton,
  DrawerOpenButton,
  DrawerOpen,
} from "../codeStyles";
import { useAppDispatch, useAppSelector } from "@hooks/useApp";
import useCodePreview from "@hooks/useCodePreview";
import FileTree from "../FileTree";
import CodePreview from "../CodePreview";
import { setOpen } from "../codeSlice";

const CodeDrawer = () => {
  /**
   * Open or close the drawer.
   */
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector((state) => state.code.open);
  const { filename, filetype, text } = useAppSelector((state) => state.code);

  const toggleDrawer = (open: boolean) => dispatch(setOpen(open));

  // TODO: update this to RTKQ
  const { fetchFile } = useCodePreview();

  // Fetch file contents when user selects it from the tree
  React.useEffect(() => {
    fetchFile(filename);
  }, [filename]);

  return (
    <>
      {/* ================ */}
      {/* DRAWER IS CLOSED */}
      {/* ================ */}
      <DrawerClosedBox />
      <DrawerClosedButton
        aria-label="view-source-code"
        color="primary"
        onClick={() => toggleDrawer(true)}
      >
        <ArrowForwardIosRoundedIcon />
        {/* <EastRoundedIcon /> */}
      </DrawerClosedButton>

      {/* ============== */}
      {/* DRAWER IS OPEN */}
      {/* ============== */}
      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ sx: { overflowY: "visible" } }}
      >
        <DrawerOpen>
          <DrawerOpenButton
            aria-label="close-source-code"
            onClick={() => toggleDrawer(false)}
            color="primary"
          >
            {/* <WestRoundedIcon /> */}
            <ArrowBackIosRoundedIcon />
          </DrawerOpenButton>

          <Stack>
            <CodeViewHeader direction="row">
              <Box width="250px">
                <h4 style={{ marginBottom: 10, marginTop: 10, marginLeft: 32 }}>
                  iankendall.me
                </h4>
                {/* <Button onClick={handleExpandClick}> {expandedItems.length === 0 ? "Expand all" : "Collapse all"} </Button> */}
              </Box>
              <h5 style={{ marginBottom: 10, marginTop: 10 }}>{filename}</h5>
            </CodeViewHeader>
          </Stack>

          {/* File tree and preview window */}
          <Stack direction="row">
            <FileTreeContainer>
              <FileTree />
            </FileTreeContainer>

            <CodePreviewContainer>
              <CodePreview codeText={text} requestedFiletype={filetype} />
            </CodePreviewContainer>
          </Stack>
        </DrawerOpen>
      </Drawer>
    </>
  );
};

export default CodeDrawer;
