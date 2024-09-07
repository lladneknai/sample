/* eslint-disable @typescript-eslint/no-unused-vars */
import Stack from "@mui/material/Stack";

/**
 * PRE BLOCK THAT LOADS IN THE REQUESTED SOURCECODE
 */

function CodePreview({ requestedFile }) {
  //
  // take the requested file, fetch it, and drop it into the DOM
  //

  const fetchFile = () => {
    console.log("Fetching-->", requestedFile);

    fetch(requestedFile)
      .then((response) => response.text())
      .then((text) => {
        const preview = document.getElementById("preview");
        if (preview) {
          preview.innerText = text;
        } else {
          console.log("--> preview element was absent");
        }
      });
  };
  fetchFile();

  return (
    <Stack>
      <h3 style={{ marginTop: 0 }}>{requestedFile}</h3>
      <pre id="preview">CodePreview</pre>
    </Stack>
  );
}

export default CodePreview;
