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
        <Stack spacing={5}>
          <Stack spacing={1}>
            <Typography variant="h1">tired of</Typography>
            <Typography variant="h1">searching?</Typography>
          </Stack>
          <Typography variant="h1">you found me.</Typography>
        </Stack>
        <Stack spacing={1}>
          {/* <Typography variant="h3">Ian Kendall.</Typography> */}
          <Typography variant="h3">
            The name's <strong>Ian Kendall</strong>.
          </Typography>
          <Typography variant="h3">It's nice to meet you.</Typography>
          <Typography variant="h3">Would you like to...</Typography>
          <Typography variant="h3" sx={{ textDecoration: "underline" }}>
            <ul>
              <li>view source code</li>
              <li>view my projects</li>
              <li>drop me a line</li>
            </ul>
          </Typography>
        </Stack>
      </Stack>
    </HeroTextContainer>
  );
};

export default HeroText;
