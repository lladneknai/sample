import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const darkColors = { bg: "#ffffff", text: "#213f59", accent: "#333" };
const lightColors = { bg: "#213f59", text: "#ffd9bf", accent: "#333" };
const twilightColors = { bg: "#333", text: "#ddd", accent: "#333" };

/**
 * Swap between these themes using the SpeedDial in the upper right hand corner of the app.
 * "Name" is saved in state, as well as applied to the `body` element as a class.
 */
const themes = [
  {
    colors: darkColors,
    enabledIcon: <DarkModeIcon />,
    icon: <DarkModeOutlinedIcon />,
    name: "dark",
  },
  {
    colors: twilightColors,
    enabledIcon: <WbIncandescentIcon />,
    icon: <WbIncandescentOutlinedIcon />,
    name: "twilight",
  },
  {
    colors: lightColors,
    enabledIcon: <WbSunnyIcon />,
    icon: <WbSunnyOutlinedIcon />,
    name: "light",
  },
];

export function useAppTheme() {
  const [theme, setTheme] = useState("light");

  const systemInDarkmode = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    () => setTheme("dark")
  );

  useEffect(() => {
    manageBodyClass(theme);
  }, [theme]);

  const manageBodyClass = (inboundTheme: string) => {
    setTheme(inboundTheme);
    themes.map((t) => {
      if (t.name === inboundTheme) {
        document.body.classList.add(inboundTheme);
      } else {
        document.body.classList.remove(t.name);
      }
    });
  };

  useEffect(() => {
    console.log(
      `[useAppTheme]--> Setting theme according to SYSTEM: ${
        systemInDarkmode ? "dark" : "light"
      }`
    );
    if (systemInDarkmode) {
      manageBodyClass("dark");
    } else {
      manageBodyClass("light");
    }
  }, [systemInDarkmode]);

  const themeIcon = useMemo(
    () => themes.find((t) => t.name === theme)?.icon,
    [theme]
  );
  const themeName = useMemo(
    () => themes.find((t) => t.name === theme)?.name,
    [theme]
  );
  const themeColors = useMemo(
    () => themes.find((t) => t.name === theme)?.colors,
    [theme]
  );

  return {
    theme,
    themes,
    themeColors,
    themeIcon,
    themeName,
    setTheme,
  };
}
