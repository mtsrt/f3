import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import User from "./component/User";
import Entrance from "./component/Entrance";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/entrance" element={<Entrance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
