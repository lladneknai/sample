import { CodeBlock } from "react-code-blocks";
import { CodeBlockSkeleton } from "../../CodeDrawer/styles";
import { useAppSelector } from "../../../hooks";

/**
 * Code Preview | View the requested file from the tree sidebar
 */
function CodePreview({
  codeText,
  requestedFiletype,
}: {
  codeText: string;
  requestedFiletype: string;
}) {
  const codeTheme = useAppSelector((state) => state.theme.theme.codeTheme);

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
