import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Entrance from "./components/Entrance";
import Login from "./components/Login";
import Exit from "./components/Exit";
import { NotFound } from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
