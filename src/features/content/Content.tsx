import { setOpen } from "@code/codeSlice";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import HeroText from "./components/HeroText";
import {
  bottomStyles,
  ButtonContainer,
  ContentContainer,
  Option,
  topStyles,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/useApp";
import { setImageNumber } from "../../global/App/appSlice";

/**
 * Base app content.
 */
const Content = () => {
  const dispatch = useAppDispatch();

  const imageNumber = useAppSelector((state) => state.app.imageNumber);

  const updateImageNumber = () => {
    const number = Math.ceil(Math.random() * (8 - 1));
    console.log("Changing TO:", number);
    dispatch(setImageNumber(number));
  };

  return (
    <ContentContainer
      sx={{
        backgroundImage: `url(/desktop${imageNumber}.jpg)`,
      }}
    >
      <HeroText styles={bottomStyles} />
      <HeroText styles={topStyles} />
      {/* <ButtonContainer>
        <Option onClick={() => dispatch(setOpen(true))} variant="outlined">
          View My Projects
        </Option>
        <Option onClick={() => dispatch(setOpen(true))} variant="outlined">
          View Source Code
        </Option>
        <Option onClick={() => updateImageNumber()} variant="outlined">
          Change The Vibe
        </Option>
      </ButtonContainer> */}
    </ContentContainer>
  );
};

export default Content;
