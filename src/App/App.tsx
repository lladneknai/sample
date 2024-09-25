import Box from "@mui/material/Box";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import "./Footer/Footer.css";
import CodeDrawer from "./Content/CodeDrawer/CodeDrawer";

function App() {
  return (
    <Box id="App">
      <Header />
      <CodeDrawer />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
