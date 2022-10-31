import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const Login: React.FC = () => {
  const SignInButton: React.FC = () => {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    };
    return <button onClick={signInWithGoogle}>Googleでサインイン</button>;
  };
  return (
    <div
      style={{ alignItems: "center", textAlign: "center", marginTop: "100px" }}
    >
      <h1>LoginPage</h1>
      <SignInButton />
    </div>
  );
};

export default Login;
