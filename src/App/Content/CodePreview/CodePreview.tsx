import { CodeBlock } from "react-code-blocks";
import CodePreviewContainer from "./CodePreviewContainer";
import useCodePreview from "./useCodePreview";

/**
 * Code Preview | View the requested file from the tree sidebar
 */
function CodePreview({ requestedFile }: { requestedFile: string }) {
  //
  const { codeText, codeTheme, requestedFiletype } =
    useCodePreview(requestedFile);

  return (
    <CodePreviewContainer>
      <CodeBlock
        language={requestedFiletype}
        showLineNumbers={false}
        text={codeText}
        theme={codeTheme}
        // SUNSET THEMES:
        //   theme={arta}
        //   theme={hopscotch}
        // LIGHT THEMES:
        //   theme={github}
        //   theme={monoblue}
        // DARK THEMES:
        //   theme={dracula}
        //   theme={hybrid}
        //   theme={irBlack}
        //   theme={monokai}
        //   theme={monokaiSublime}
        //   theme={tomorrowNightBright}
        wrapLongLines
      />
    </CodePreviewContainer>
  );
}

export default CodePreview;
