import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ThemePicker from './ThemePicker';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
                <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: `0px !important` }}>
                    <Typography variant="h6" noWrap>
                        PHOSPHORUS CYBERSECURITY
                    </Typography>
                    <ThemePicker />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
