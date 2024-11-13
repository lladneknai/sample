import React from "react";
import useCodePreview from "@hooks/useCodePreview";
import { setOpen } from "@features/code/codeSlice";
import { useAppSelector } from "@hooks/useApp";
import { useAppDispatch } from "@hooks/useApp";
import type { DialogProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import {
  CodePreviewContainer,
  Filename,
  FileTreeContainer,
  HeaderBar,
} from "./codeStyles";
import FileTree from "./components/FileTree";
import CodePreview from "./components/CodePreview";
import Window from "./components/Window";
import WindowButtons from "./components/WindowButtons";

/**
 * Code window, within which the source code and filetree are available.
 */
function Code() {
  const dispatch = useAppDispatch();
  const { filename } = useAppSelector((state) => state.code);
  const { open, minimized } = useAppSelector((state) => state.code);

  const handleClose: DialogProps["onClose"] = (event, reason) => {
    if (minimized && reason && reason === "backdropClick") return;
    dispatch(setOpen(false));
  };

  const handleHeaderClick = () => {
    if (!minimized) {
      return;
    }
    dispatch(setOpen(true));
  };

  //--------------------------------------------------------
  // TODO: update this to RTKQ
  const { fetchFile } = useCodePreview();
  // Fetch file contents when user selects it from the tree
  React.useEffect(() => {
    fetchFile(filename);
  }, [filename]);
  //
  //--------------------------------------------------------

  return (
    <Dialog
      aria-labelledby="source-code-window"
      aria-describedby="view-site-source-code-window"
      // disableEscapeKeyDown={minimized} // If the window gets fugged, you still need this.
      hideBackdrop={minimized}
      maxWidth={false}
      onClose={handleClose}
      open={open}
      PaperComponent={Window}
      sx={{
        maxHeight: "none",
        margin: 0,
      }}
    >
      <HeaderBar onClick={handleHeaderClick}>
        <WindowButtons />
        <Filename>{filename}</Filename>
      </HeaderBar>

      <Stack direction="row" sx={{ height: "calc(100% - 32px)" }}>
        <FileTreeContainer>
          <FileTree />
        </FileTreeContainer>

        <CodePreviewContainer>
          <CodePreview />
        </CodePreviewContainer>
      </Stack>
    </Dialog>
  );
}

export default Code;
