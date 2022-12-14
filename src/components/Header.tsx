import { Box, Link } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#424242", color: "white", height: "70px" }}>
      <Box fontSize={65} fontWeight="fontWeightBold" sx={{ letterSpacing: 10 }}>
        GateWay
        <Link
          component="button"
          underline="none"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Button Link
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
