import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import ThemePicker from "./ThemePicker";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../hooks";

function Header() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <AppBar position="static" sx={{ background: theme.colors.bg }}>
      <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingLeft: `0px !important`,
          }}
        >
          <Typography variant="h6" noWrap sx={{ color: theme.colors.text }}>
            Ian Kendall
          </Typography>
          <ThemePicker />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
