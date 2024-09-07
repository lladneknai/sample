import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const VanityBox = styled(Box)(() => ({
  paddingLeft: 0,
}));

const VanityPlate = () => {
  return (
    <VanityBox maxWidth="xl">
      <h1>Ian Kendall</h1>
    </VanityBox>
  );
};

export default VanityPlate;
