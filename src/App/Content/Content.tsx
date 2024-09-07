import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import VanityPlate from "./VanityPlate/VanityPlate";
import FileTree from "./FileTree/FileTree";
import CodePreview from "./CodePreview/CodePreview";
import React from "react";

const Content = () => {
  const [requestedFile, setRequestedFile] = React.useState(`App.tsx`);

  return (
    <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
      <VanityPlate />
      <Stack direction="row">
        <FileTree
          requestedFile={requestedFile}
          setRequestedFile={setRequestedFile}
        />
        <CodePreview requestedFile={requestedFile} />
      </Stack>
    </Container>
  );
};

export default Content;
