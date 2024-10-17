import { useAppSelector } from "@hooks/useApp";

import Draggable from "react-draggable";
import { PaperProps } from "@mui/material/Paper";
import { WindowContainer } from "./styles";

/**
 * Draggable container for CodeWindow.
 *
 */
function Window(props: PaperProps) {
  const { fullscreen, minimized } = useAppSelector((state) => state.code);

  return (
    <Draggable disabled={fullscreen || minimized}>
      <WindowContainer
        {...props}
        fullscreen={fullscreen}
        minimized={minimized}
      />
    </Draggable>
  );
}

export default Window;
