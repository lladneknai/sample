import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HeroTextContainer, Option } from "../../styles";

/**
 * Double-layered hero text (pass in styles)
 */
const HeroText = ({ styles }: { styles: any }) => {
  // const dispatch = useAppDispatch();

  return (
    <HeroTextContainer sx={styles}>
      <Typography variant="h1">cut</Typography>
      <Typography variant="h1">through</Typography>
      <Typography variant="h1">the noise.</Typography>
      {/* <Typography variant="h1">Noise.</Typography> */}

      <Box height={100} />
      <Typography variant="h3">Ian Kendall.</Typography>
      <Typography variant="h3">Web Developer.</Typography>

      {/* <Box height={50} />
      <Option onClick={() => dispatch(setOpen(true))} variant="outlined">
        View Source Code
      </Option> */}
    </HeroTextContainer>
  );
};

export default HeroText;
