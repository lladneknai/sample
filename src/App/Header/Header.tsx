import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import ThemePicker from "./ThemePicker";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppTheme } from "../../hooks/useAppTheme";

function Header() {
  const { themeColors } = useAppTheme();

  return (
    <AppBar position="static" sx={{ background: themeColors?.bg || "#333" }}>
      <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingLeft: `0px !important`,
          }}
        >
          <Typography variant="h6" noWrap>
            Ian Kendall
          </Typography>
          <ThemePicker />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
