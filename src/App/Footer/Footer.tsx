import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function Footer() {
  return (
    <Box id='Footer'>
      <div>Here is one side of the footer waaaay over here</div>
      <Stack direction='row' spacing={3} padding={1}>
        <a className='footer-logo react' href='https://react.dev' target='_blank'>
          <img alt='React logo' src={reactLogo} />
        </a>
        <a className='footer-logo vite' href='https://vitejs.dev' target='_blank'>
          <img alt='Vite logo' src={viteLogo} />
        </a>
      </Stack>
    </Box>
  );
}

export default Footer;
