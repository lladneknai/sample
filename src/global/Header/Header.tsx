import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@hooks/useApp";
import { HeaderContainer, HeaderContent } from "./styles";
import ThemePicker from "./ThemePicker";

function Header() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <HeaderContainer sx={{ background: theme.colors.bg }}>
      <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
        <HeaderContent>
          <Typography variant="h6" noWrap sx={{ color: theme.colors.text }}>
            iankendall.me
          </Typography>
          <ThemePicker />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
}
export default Header;
