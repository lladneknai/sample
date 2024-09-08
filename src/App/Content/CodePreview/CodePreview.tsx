import { CodeBlock } from "react-code-blocks";
import CodePreviewContainer from "./CodePreviewContainer";
import useCodePreview from "./useCodePreview";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { useEffect } from "react";

/**
 * Code Preview | View the requested file from the tree sidebar
 */
function CodePreview({ requestedFile }: { requestedFile: string }) {
  //
  const { codeTheme } = useAppTheme();
  const { codeText, fetchFile, requestedFiletype } = useCodePreview();

  // Fetch file contents when user selects it from the tree
  useEffect(() => {
    fetchFile(requestedFile);
  }, [requestedFile]);

  return (
    <CodePreviewContainer>
      <CodeBlock
        language={requestedFiletype}
        showLineNumbers={false}
        text={codeText}
        theme={codeTheme}
        wrapLongLines
      />
    </CodePreviewContainer>
  );
}

// MO THEMES:
// ----------
// SUNSET THEMES:
//   theme={arta}
//   theme={hopscotch}
// --------------------
// LIGHT THEMES:
//   theme={github}
//   theme={monoblue}
// --------------------
// DARK THEMES:
//   theme={dracula}
//   theme={hybrid}
//   theme={irBlack}
//   theme={monokai}
//   theme={monokaiSublime}
//   theme={tomorrowNightBright}

export default CodePreview;
