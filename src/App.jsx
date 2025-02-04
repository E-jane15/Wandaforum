import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home/Home";
import PeermockHome from "./pages/Peermock/Home/index";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

import { UserProvider } from "./Context/UserContext";
import Profile from "./pages/Profile/Profile";
import Refer from "./pages/Refer/Refer";
import Contact from "./pages/Contact/contact";
import Pricing from "./pages/Pricing";


import Community from './pages/Community/Community';
// import SavedQuestionsPage from "./pages/QuestionPage/SavedQuestionPage";



import Settings from "./pages/notification/notificationlist/Settings"


const App = () => {
  return (
    <UserProvider>

      
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/peermock" element={<PeermockHome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community/*" element={<Community />} />
        
        
        {/* <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/saved" element={<SavedQuestions />} />
        <Route path="/asked-questions" element={<AskedQuestionsPage/>} />
        <Route path="/trending" element={<TrendingQuestionsPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community/*" element={<Community />} />
        
      </Routes>
      
    </UserProvider>
  );
};


export default App;