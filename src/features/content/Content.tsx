import Box from "@mui/material/Box";
import HeroText from "./components/HeroText";
import HeroTextRevealed from "./components/HeroTextRevealed";
import {
  bottomStyles,
  ContentContainer,
  revealedStyles,
  topStyles,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/useApp";
import { setRevealed } from "../../global/App/appSlice";

/**
 * Base app content.
 */
const Content = () => {
  const dispatch = useAppDispatch();
  const revealContent = () => dispatch(setRevealed(true));
  const revealed = useAppSelector((state) => state.app.revealed);

  /**
   * TODO: redo the fucking shit out of this with https://www.npmjs.com/package/framer-motion
   */

  // const imageNumber = useAppSelector((state) => state.app.imageNumber);
  const imageNumber = 1; // 1-9(?)

  return (
    <ContentContainer
      sx={{
        backgroundImage: `url(/desktop${imageNumber}.jpg)`,
      }}
    >
      {/* TODO: this is bs get rid of it */}
      {revealed ? (
        <>
          <HeroTextRevealed styles={revealedStyles} />
        </>
      ) : (
        <Box
          onMouseEnter={() => {
            setTimeout(() => {
              revealContent();
            }, 750);
          }}
        >
          <HeroText styles={bottomStyles} />
          <HeroText styles={topStyles} />
        </Box>
      )}
    </ContentContainer>
  );
};

export default Content;
