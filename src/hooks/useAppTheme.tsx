import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

/**
 * Swap between these themes using the SpeedDial in the upper right hand corner of the app.
 * "Name" is saved in state, as well as applied to the `body` element as a class.
 */
const themes = [
  { enabledIcon: <DarkModeIcon />, icon: <DarkModeOutlinedIcon />, name: "dark" },
  { enabledIcon: <WbIncandescentIcon />, icon: <WbIncandescentOutlinedIcon />, name: "twilight" },
  { enabledIcon: <WbSunnyIcon />, icon: <WbSunnyOutlinedIcon />, name: "light" },
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
      `[useAppTheme]--> Setting theme according to SYSTEM: ${systemInDarkmode ? "dark" : "light"}`
    );
    if (systemInDarkmode) {
      manageBodyClass("dark");
    } else {
      manageBodyClass("light");
    }
  }, [systemInDarkmode]);

  const themeIcon = useMemo(() => themes.find((t) => t.name === theme)?.icon, [theme]);
  const themeName = useMemo(() => themes.find((t) => t.name === theme)?.name, [theme]);

  return {
    theme,
    themes,
    themeName,
    themeIcon,
    setTheme,
  };
}
