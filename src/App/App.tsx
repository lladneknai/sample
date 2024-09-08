import Box from "@mui/material/Box";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import "./Header/Header.css";
import "./Footer/Footer.css";

function App() {
  return (
    <Box id="App">
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
