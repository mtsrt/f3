import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#424242", color: "white", height: "70px" }}>
      <Box fontSize={65} fontWeight="fontWeightBold" sx={{ letterSpacing: 10 }}>
        GateWay
      </Box>
      <Button onClick={() => navigate("/home")}>Home</Button>
    </Box>
  );
};

export default Header;
