import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home";
import PeermockHome from "./pages/Peermock/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/peermock" element={<PeermockHome />} />
    </Routes>
  );
};

export default App;
