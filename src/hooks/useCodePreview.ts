import React from "react";

/**
 * Custom hook that runs the preview window.
 */
function useCodePreview() {
  const [codeText, setCode] = React.useState("");
  const [requestedFiletype, setRequestedFiletype] = React.useState("");

  // Fetch the file from /public/sourcecode and set its text to (exported) state.
  function fetchFile(requestedFile: string) {
    setRequestedFiletype(requestedFile.split(".")[1]);
    //
    // Copies of the sourcecode files are stored here, so their plain text
    // be retreived by requests. This should be converted to an ENV variable soon.
    //
    // See `scripts/populate-filetree.ts` for more.
    //
    const filePrefix = "/sourcecode/";
    const fileUrl = `${filePrefix}${requestedFile}`;
    fetch(fileUrl)
      .then((response) => response.text())
      .then((text) => {
        setCode(text);
      });
  }

  return {
    codeText,
    fetchFile,
    requestedFiletype,
  };
}

export default useCodePreview;
