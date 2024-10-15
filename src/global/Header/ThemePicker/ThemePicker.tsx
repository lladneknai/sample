import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppDispatch, useAppSelector } from "@hooks/useApp";
import { setTheme, themes, ThemeName, ThemeObject } from "@theme/themeSlice";
import icons from "./icons";

/**
 * Component that selects the global app theme.
 */
function ThemePicker() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const setAppTheme = (newTheme: ThemeName) => dispatch(setTheme(newTheme));

  return (
    <SpeedDial
      ariaLabel="Select Theme"
      direction="left"
      icon={
        <SpeedDialIcon
          icon={icons[theme.name].outlined}
          openIcon={<CloseRoundedIcon />}
          sx={{ color: theme.colors.text }}
        />
      }
      sx={{
        boxShadow: 0,
        position: "absolute",
        right: 8,
        width: 0,
      }}
    >
      {themes.map((t: ThemeObject) => {
        return (
          <SpeedDialAction
            icon={
              t.name === theme.name
                ? icons[t.name].filled
                : icons[t.name].outlined
            }
            key={t.name}
            onClick={() => setAppTheme(t.name)}
            sx={{
              backgroundColor: theme.colors.text,
              color: theme.colors.bg,
            }}
            tooltipTitle={`${t.name.slice(0, 1).toUpperCase()}${t.name.slice(
              1
            )} theme`}
          />
        );
      })}
    </SpeedDial>
  );
}

export default ThemePicker;
