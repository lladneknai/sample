import { useEffect } from "react";
import { CodeBlock } from "react-code-blocks";
import { useAppTheme } from "../../../../hooks/useAppTheme";
import useCodePreview from "../../../../hooks/useCodePreview";
import { CodeBlockSkeleton } from "../../CodeDrawer/styles";

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

  if (codeText.length === 0) {
    return <CodeBlockSkeleton variant="rectangular" />;
  }

  return (
    <CodeBlock
      language={requestedFiletype}
      showLineNumbers={false}
      text={codeText}
      theme={codeTheme}
      wrapLongLines
    />
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
