import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CodePreviewContainer = styled(Box)(() => ({
  fontFamily: "Monaco, monospace",
  fontSize: "12px",
  lineHeight: "12px",
  "& code > span": {
    padding: "0px !important",
  },
}));

export default CodePreviewContainer;
