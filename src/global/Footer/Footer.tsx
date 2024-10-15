import Stack from "@mui/material/Stack";
import { FooterContainer, FooterLogo } from "./styles";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

/**
 * Global app footer
 */
function Footer() {
  return (
    <FooterContainer>
      <div>Here is one side of the footer waaaay over here!!!!!</div>
      <Stack direction="row" spacing={3} padding={1}>
        <FooterLogo>
          <a href="https://react.dev" target="_blank">
            <img alt="React logo" src={reactLogo} />
          </a>
        </FooterLogo>
        <FooterLogo>
          <a href="https://vitejs.dev" target="_blank">
            <img alt="Vite logo" src={viteLogo} />
          </a>
        </FooterLogo>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;
