import React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FileTree from "./FileTree";
import CodePreview from "./CodePreview";
import {
  CodePreviewContainer,
  CodeViewHeader,
  FileTreeContainer,
} from "../CodeDrawer/styles";
// import { useFileTree } from "./hooks/useFileTree";

const CodeView = () => {
  const [requestedFile, setRequestedFile] = React.useState(`App.tsx`);
  //   const { expandedItems, handleExpandClick } = useFileTree();
  return (
    <>
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
      <Stack direction="row">
        <FileTreeContainer>
          <FileTree
            // requestedFile={requestedFile}
            setRequestedFile={setRequestedFile}
          />
        </FileTreeContainer>

        <CodePreviewContainer>
          <CodePreview
            requestedFile={requestedFile}
            //   setRequestedFile={setRequestedFile}
          />
        </CodePreviewContainer>
      </Stack>
    </>
  );
};

export default CodeView;
