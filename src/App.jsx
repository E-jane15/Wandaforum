import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home";
import PeermockHome from "./pages/Peermock/Home";
// import Community from "./pages/Community/Community";
// import PostForum from "./pages/Questions/PostForum";
import QuestionPage from "./pages/Questions/QuestionPage";
import Community from './pages/Community/Community';
import CommunityPage from "./Components/CommunityComponents/CommunityPage";

const App = () => {
  return (
    // <CommunityPage/>
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/peermock" element={<PeermockHome />} />
      <Route path="/questionpage/*" element={<QuestionPage/>}/>
      <Route path = "/community/*" element = {<Community/>}/>
      
      
    </Routes>
  );
};

export default App;
