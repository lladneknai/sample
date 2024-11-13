import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";
import { useAppDispatch } from "@hooks/useApp";
import { setOpen } from "@code/codeSlice";
import { FooterContainer, FooterLogo, FooterLogoAmpt } from "./styles";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

/**
 * Global app footer
 */
function Footer() {
  const dispatch = useAppDispatch();
  return (
    <FooterContainer>
      <Stack direction="row" spacing={3} padding={1} alignItems="center">
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          onClick={() => dispatch(setOpen(true))}
          sx={{ cursor: "pointer" }}
        >
          <Typography>View source code</Typography>
          <Typography sx={{ paddingTop: "9px" }}>
            <LaunchIcon sx={{ color: "white" }} />
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Typography>Hire me</Typography>
          <Typography sx={{ paddingTop: "9px" }}>
            <a href="mailto:iankendall17@gmail.com">
              <EmailIcon sx={{ color: "white" }} />
            </a>
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        padding={1}
        alignItems="initial"
        sx={{ paddingBottom: "0" }}
      >
        <Typography>Built with:</Typography>
        <FooterLogo>
          <a href="https://react.dev" target="_blank">
            <img alt="React logo" src={reactLogo} />
          </a>
        </FooterLogo>
        <FooterLogo>
          <a href="https://redux-toolkit.js.org/" target="_blank">
            <img
              alt="Redux Toolkit logo"
              src="https://redux-toolkit.js.org/img/redux.svg"
            />
          </a>
        </FooterLogo>
        <FooterLogo>
          <a href="https://vitejs.dev" target="_blank">
            <img alt="Vite logo" src={viteLogo} />
          </a>
        </FooterLogo>
        <FooterLogoAmpt>
          <a href="https://www.getampt.com/" target="_blank">
            <img
              alt="Apmt logo"
              src="https://www.getampt.com/images/ampt.svg"
            />
          </a>
        </FooterLogoAmpt>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;
