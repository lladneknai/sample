/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { arta, irBlack, monoBlue } from "react-code-blocks";
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
export function useAppTheme() {
  const [theme, setTheme] = useState("light");
  const themes = useMemo(
    () => [
      {
        codeTheme: irBlack,
        colors: { bg: "#ffffff", text: "#213f59", accent: "#333" },
        enabledIcon: <DarkModeIcon />,
        icon: <DarkModeOutlinedIcon />,
        name: "dark",
      },
      {
        codeTheme: arta,
        colors: { bg: "#333", text: "#ddd", accent: "#333" },
        enabledIcon: <WbIncandescentIcon />,
        icon: <WbIncandescentOutlinedIcon />,
        name: "twilight",
      },
      {
        codeTheme: monoBlue,
        colors: { bg: "#213f59", text: "#ffd9bf", accent: "#333" },
        enabledIcon: <WbSunnyIcon />,
        icon: <WbSunnyOutlinedIcon />,
        name: "light",
      },
    ],
    []
  );

  /**
   * When user changes theme, the body is updated
   */
  const manageBodyClass = (inboundTheme: string) => {
    themes.map((t) => {
      const AppDiv = document.querySelector("#App");
      if (AppDiv) {
        if (t.name === inboundTheme) {
          AppDiv.classList.add(inboundTheme);
        } else {
          AppDiv.classList.remove(t.name);
        }
      }
    });
  };

  // change what happens to the body class on theme update
  useEffect(() => {
    manageBodyClass(theme);
  }, [theme]);

  /**
   * Handle the default theme based on what the SYSTEM is set to.
   */
  const systemInDarkmode = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    () => setTheme("dark")
  );

  useEffect(() => {
    console.log(
      `[useAppTheme]--> Setting theme according to SYSTEM: ${
        systemInDarkmode ? "dark" : "light"
      }`
    );
    if (systemInDarkmode) {
      setTheme("dark");
      manageBodyClass("dark");
    } else {
      setTheme("light");
      manageBodyClass("light");
    }
  }, [systemInDarkmode]);

  // TODO: are these updated?
  const codeTheme = themes.find((t) => t.name === theme)?.codeTheme;
  const themeIcon = themes.find((t) => t.name === theme)?.icon;
  const themeName = themes.find((t) => t.name === theme)?.name;
  const themeColors = themes.find((t) => t.name === theme)?.colors;

  return {
    codeTheme,
    theme,
    themes,
    themeColors,
    themeIcon,
    themeName,
    setTheme,
  };
}
