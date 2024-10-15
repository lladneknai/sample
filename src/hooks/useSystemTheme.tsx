import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { setTheme, ThemeName } from "../features/theme/themeSlice";
import { useAppDispatch } from "@hooks/useApp";

/**
 * Set the default theme of the app based on system's theme.
 */

export function useSystemTheme() {
  //
  const dispatch = useAppDispatch();
  const setAppTheme = (newTheme: ThemeName) => dispatch(setTheme(newTheme));

  // Handle the default theme based on what the SYSTEM is set to.
  const systemInDarkmode = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    () => setAppTheme("dark")
  );

  // TODO: this part is still a hair murky.
  useEffect(() => {
    console.log(
      `[useSystemTheme]--> Setting theme according to SYSTEM: ${
        systemInDarkmode ? "dark" : "light"
      }`
    );

    setAppTheme(systemInDarkmode ? "dark" : "light");
  }, [systemInDarkmode]);
}
