import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const SignInButton: React.FC = () => {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    };
    return (
      <button onClick={signInWithGoogle}>
        Googleでサインイン
      </button>
    );
  };
  return (
    <div>
      <h1 style={{ color: "black" }}>LoginPage</h1>
      <SignInButton />
    </div>
  );
};

export default Login;
