import React from "react";
import Stack from "@mui/material/Stack";
import FileTree from "./FileTree";
import CodePreview from "./CodePreview";

const CodeView = () => {
  const [requestedFile, setRequestedFile] = React.useState(`App.tsx`);

  return (
    <Stack direction="row">
      <Stack>
        <h4 style={{ marginBottom: 10, marginTop: 10 }}>{requestedFile}</h4>
        <FileTree
          // requestedFile={requestedFile}
          setRequestedFile={setRequestedFile}
        />
      </Stack>
      <CodePreview
        requestedFile={requestedFile}
        //   setRequestedFile={setRequestedFile}
      />
    </Stack>
  );
};

export default CodeView;
