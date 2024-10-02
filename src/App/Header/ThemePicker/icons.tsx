// Icons for the picker
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

/**
 * Icons used in the ThemePicker to represent different App themes.
 */
const icons = {
  light: {
    filled: <WbSunnyIcon />,
    outlined: <WbSunnyOutlinedIcon />,
  },
  dark: {
    filled: <DarkModeIcon />,
    outlined: <DarkModeOutlinedIcon />,
  },
  twilight: {
    filled: <WbIncandescentIcon />,
    outlined: <WbIncandescentOutlinedIcon />,
  },
};

export default icons;
