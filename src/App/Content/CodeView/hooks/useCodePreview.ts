import React from "react";

/**
 * Custom hook that runs the preview window.
 */
function useCodePreview() {
  // TODO: is there a better way than simple state here?
  const [codeText, setCode] = React.useState("");
  const [requestedFiletype, setRequestedFiletype] = React.useState("");

  /**
   * Fetch this file, set to state, and return.
   */
  function fetchFile(requestedFile: string) {
    setRequestedFiletype(requestedFile.split(".")[1]);
    fetch(requestedFile, {
      //
      // TODO; figure out why the responses are jacked up. May not be so simple as header, but...
      //   headers: {
      // "Content-Type": "text",
      //   },
    })
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
