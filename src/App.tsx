import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import Entrance from "./components/Entrance";
import Login from "./components/Login";
import Exit from "./components/Exit";
import { NotFound } from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./components/firebase";
import { Auth } from "firebase/auth";

const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
function useAuthState(auth: Auth): [any] {
  throw new Error("Function not implemented.");
}
