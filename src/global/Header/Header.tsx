// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { useAppSelector } from "@hooks/useApp";
// import { HeaderContainer, HeaderContent } from "./styles";
// import ThemePicker from "./ThemePicker";
// import { setOpen } from "@code/codeSlice";
// import { useAppDispatch } from "@hooks/useApp";

function Header() {
  // const theme = useAppSelector((state) => state.theme.theme);

  return (
    <Box
      sx={{
        // backgroundColor: "#fff2",
        alignItems: "center",
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        height: "60px",
        right: "8px",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          display: "block",
          paddingLeft: "20px",
          fontFamily: "Exo",
          fontWeight: "400",
        }}
      >
        iankendall.me
      </Typography>
      {/* TODO: fix */}
      {/* <ThemePicker /> */}
    </Box>
  );
}

export default Header;
