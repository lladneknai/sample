import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  getHeight,
  getMinimizedAttributes,
  getWidth,
  WindowProps,
} from "./util";

/**
 * Styled component that represents the PaperComponent passed into
 * MUI's <Dialog /> element. Reflects all three states of the window.
 */
export const WindowContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "minimized" && prop !== "fullscreen",
})<WindowProps>(({ fullscreen, minimized }) => ({
  borderRadius: "10px",

  // Yes, this seems a little verbose. But it's all about overwriting
  height: getHeight({ fullscreen, minimized }),
  maxHeight: getHeight({ fullscreen, minimized }),
  minHeight: getHeight({ fullscreen, minimized }),

  maxWidth: getWidth({ fullscreen, minimized }),
  minWidth: getWidth({ fullscreen, minimized }),
  width: getWidth({ fullscreen, minimized }),

  margin: "0px !important",

  // position: getPosition(minimized),
  ...getMinimizedAttributes(minimized),

  // TODO: separate this from dragging
  // transition: "all 100ms ease-in-out",
}));
