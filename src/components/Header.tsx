import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{ backgroundColor: "#424242", color: "white", height: "70px" }}
    >
      <Box fontSize={65} fontWeight="fontWeightBold" sx={{ letterSpacing: 10 }}>GateWay</Box>
    </Box>
  );
};

export default Header;
