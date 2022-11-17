import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { Button, Box } from "@mui/material";

const Login: React.FC = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <Box sx={{ alignItems: "center", textAlign: "center", marginTop: "100px" }}>
      <h1>LoginPage</h1>
      <Button onClick={signInWithGoogle}>Googleでサインイン</Button>
    </Box>
  );
};

export default Login;
