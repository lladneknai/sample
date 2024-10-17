import { useAppSelector } from "@hooks/useApp";
import { CodeBlock } from "react-code-blocks";
import { CodeBlockSkeleton } from "../codeStyles";

/**
 * Code Preview | View the requested file from the tree sidebar
 */
function CodePreview() {
  const codeTheme = useAppSelector((state) => state.theme.theme.codeTheme);
  const codeText = useAppSelector((state) => state.code.text);
  const filetype = useAppSelector((state) => state.code.filetype);

  if (codeText.length === 0) {
    return <CodeBlockSkeleton variant="rectangular" />;
  }

  return (
    <CodeBlock
      language={filetype}
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
