import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppTheme } from '../../../hooks/useAppTheme';

function ThemePicker() {
    const { setTheme, theme, themeIcon, themes } = useAppTheme();

    return (
        <SpeedDial
            ariaLabel="Select Theme"
            direction="left"
            sx={{ boxShadow: 0, position: 'absolute', right: 8, width: 0 }}
            icon={<SpeedDialIcon icon={themeIcon} openIcon={<CloseRoundedIcon />} />}
        >
            {themes.map(t => (
                <SpeedDialAction
                    onClick={() => setTheme(t.name)}
                    icon={t.name === theme ? t.enabledIcon : t.icon}
                    key={t.name}
                    tooltipTitle={`${t.name.slice(0, 1).toUpperCase()}${t.name.slice(1)} theme`}
                />
            ))}
        </SpeedDial>
    );
}

export default ThemePicker;
