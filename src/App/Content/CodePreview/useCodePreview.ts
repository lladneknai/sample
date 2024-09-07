import React from "react";
import { arta, hybrid, irBlack, monoBlue } from "react-code-blocks";
import { useAppTheme } from "../../../hooks/useAppTheme";

function useCodePreview(requestedFile: string) {
  /**
   * Fetch @param requestedFile and set to state.
   *
   * TODO: there is some funky shit going on with some of the files.
   * Looks like there is some vite compilation going on.
   * Might just be a local thing... we shall see.
   *
   */
  const [codeText, setCode] = React.useState("");
  const requestedFiletype = requestedFile.split(".")[1];
  const fetchFile = () =>
    fetch(requestedFile, {
      //   headers: {
      // "Content-Type": "text",
      //   },
    })
      .then((response) => response.text())
      .then((text) => setCode(text));
  fetchFile();

  /**
   * Code theme is set dynamically by the current app theme.
   */
  const { theme } = useAppTheme();
  const codeTheme = React.useMemo(() => {
    if (theme === "light") {
      return monoBlue;
    }
    if (theme === "dark") {
      return irBlack;
    }
    if (theme === "sunset") {
      return arta;
    }
    // This... should never happen
    console.warn(
      "--> TIMING ISSUE! Theme not yet set but trying to be accessed."
    );
    return hybrid;
  }, [theme]);

  return {
    codeText,
    codeTheme,
    requestedFiletype,
  };
}

export default useCodePreview;
