import { setFiletype, setText } from "@code/codeSlice";
import { useAppDispatch } from "./useApp";

/**
 * Custom hook that runs the preview window.
 */
function useCodePreview() {
  const dispatch = useAppDispatch();

  /**
   * Fetch the file from /public/sourcecode and set its text to (exported) state.
   */
  function fetchFile(requestedFile: string) {
    //
    // Copies of the sourcecode files are stored here, so their plain text
    // be retreived by requests. This should be converted to an ENV variable soon.
    //
    // See `scripts/populate-filetree.ts` for more.
    //
    const filePrefix = "/sourcecode/";
    const fileUrl = `${filePrefix}${requestedFile}`;

    dispatch(setFiletype(requestedFile.split(".")[1]));

    fetch(fileUrl)
      .then((response) => response.text())
      .then((text) => dispatch(setText(text)));
  }

  return {
    fetchFile,
  };
}

export default useCodePreview;
