import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home/Home.jsx";
import PeermockHome from "./pages/Peermock/Home";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/peermock" element={<PeermockHome />} />
      <Route path="/pricing" element={<Pricing/>} />
    </Routes>
  );
};

export default App;
