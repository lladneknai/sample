import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { HeroTextContainer } from "../styles";

/**
 * Double-layered hero text (pass in styles)
 */
const HeroText = ({ styles }: { styles: any }) => {
  return (
    <HeroTextContainer sx={styles}>
      <Stack spacing={5}>
        <Stack spacing={1}>
          <Typography variant="h1">tired of</Typography>
          <Typography variant="h1">searching?</Typography>
        </Stack>
        <Typography variant="h1">you found me.</Typography>
      </Stack>
    </HeroTextContainer>
  );
};

export default HeroText;
