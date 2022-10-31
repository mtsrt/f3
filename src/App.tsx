import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import User from "./component/User";
import Entrance from "./component/Entrance";
import Login from "./component/Login";
import Exit from "./component/Exit";
import { NotFound } from "./component/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
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
