import Code from "@features/code";
import Content from "@features/content";
import Footer from "@global/Footer";
import Header from "@global/Header";
import { useAppSelector } from "@hooks/useApp";
// import { useSystemTheme } from "@hooks/useSystemTheme";
import { AppContainer } from "./styles";

/**
 * Base application file (within the context of the Provider).
 */
function App() {
  // Synchronizes the app theme with the user's machine
  // useSystemTheme();

  // Global app theme that translates the colors from redux into styles
  const theme = useAppSelector((state) => state.theme.theme);

  // Base app markup
  return (
    <AppContainer
      //
      // TODO: integrate this with MUI theme
      //
      sx={{
        backgroundColor: theme.colors.bg,
        color: theme.colors.text,
        fontFamily: "Exo, sans-serif",
      }}
    >
      <Header />
      {/* <CodeDrawer /> */}
      <Code />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;
