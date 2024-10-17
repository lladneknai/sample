import { useAppDispatch } from "@hooks/useApp";
import { setFullscreen, setMinimized, setOpen } from "@code/codeSlice";

import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MinimizeRoundedIcon from "@mui/icons-material/MinimizeRounded";

import {
  ButtonContainer,
  CloseButton,
  FullscreenButton,
  MinimizeButton,
} from "../codeStyles";
import { useAppSelector } from "@/hooks/useApp";

const WindowButtons = () => {
  const dispatch = useAppDispatch();
  const { fullscreen, minimized } = useAppSelector((state) => state.code);

  return (
    <ButtonContainer direction="row" spacing={0.75}>
      <CloseButton onClick={() => dispatch(setOpen(false))}>
        <CloseRoundedIcon />
      </CloseButton>
      <MinimizeButton onClick={() => dispatch(setMinimized(!minimized))}>
        <MinimizeRoundedIcon />
      </MinimizeButton>
      <FullscreenButton onClick={() => dispatch(setFullscreen(!fullscreen))}>
        <AddIcon />
      </FullscreenButton>
    </ButtonContainer>
  );
};

export default WindowButtons;
