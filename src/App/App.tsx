import Box from "@mui/material/Box";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import "./Footer/Footer.css";
import CodeDrawer from "./Content/CodeDrawer";

import { styled } from "@mui/material/styles";
import { useAppSelector } from "./hooks";
import { useSystemTheme } from "../hooks/useSystemTheme";

/**
 * Base application file (within the context of the Provider).
 */
function App() {
  //
  // Synchronizes the app theme with the user's machine
  useSystemTheme();

  //
  // Global app theme that translates the colors from redux into styles
  const theme = useAppSelector((state) => state.theme.theme);
  const AppContainer = styled(Box)(() => ({
    // Dyanmic styles: set by theme
    backgroundColor: theme.colors.bg,
    color: theme.colors.text,

    // Static styles
    height: "100%",
    minHeight: "100vh",
    position: "relative",
  }));

  //
  // Base app markup
  return (
    <AppContainer>
      <Header />
      <CodeDrawer />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;
