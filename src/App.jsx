import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Startpage from "./pages/homepage/Startpage";
import Homepage from "./pages/mainpage/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export default App;
