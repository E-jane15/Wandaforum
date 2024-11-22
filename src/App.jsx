import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home";
import PeermockHome from "./pages/Peermock/Home";
import Community from "./pages/Community/Community";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/peermock" element={<PeermockHome />} />
      <Route path="/community" element={<Community/>}/>
    </Routes>
  );
};

export default App;
