import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FileTree from "./FileTree";
import CodePreview from "./CodePreview";
import {
  CodePreviewContainer,
  CodeViewHeader,
  FileTreeContainer,
} from "../CodeDrawer/styles";
import useCodePreview from "../../../hooks/useCodePreview";

/**
 * Code View (everything inside the sidebar)
 *
 * TODO: figure out if any of this is worth abstracting to RTKQ.
 * If so, figure out how to get it in plaintext.
 *
 */
const CodeView = () => {
  //

  const [requestedFile, setRequestedFile] = React.useState(`App.tsx`);
  const { codeText, fetchFile, requestedFiletype } = useCodePreview();

  // Fetch file contents when user selects it from the tree
  React.useEffect(() => {
    fetchFile(requestedFile);
  }, [requestedFile]);

  return (
    <>
      {/* Name and requested file */}
      <Stack>
        <CodeViewHeader direction="row">
          <Box width="250px">
            <h4 style={{ marginBottom: 10, marginTop: 10, marginLeft: 32 }}>
              iankendall.me
            </h4>
            {/* <Button onClick={handleExpandClick}>
              {expandedItems.length === 0 ? "Expand all" : "Collapse all"}
            </Button> */}
          </Box>
          <h5 style={{ marginBottom: 10, marginTop: 10 }}>{requestedFile}</h5>
        </CodeViewHeader>
      </Stack>

      {/* File tree and preview window */}
      <Stack direction="row">
        <FileTreeContainer>
          <FileTree
            //
            setRequestedFile={setRequestedFile}
          />
        </FileTreeContainer>

        <CodePreviewContainer>
          <CodePreview
            //
            codeText={codeText}
            requestedFiletype={requestedFiletype}
          />
        </CodePreviewContainer>
      </Stack>
    </>
  );
};

export default CodeView;
