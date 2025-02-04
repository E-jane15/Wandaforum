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
import QuestionPage from "./pages/QuestionPage/QuestionPage";

import Community from './pages/Community/Community';
// import SavedQuestionsPage from "./pages/QuestionPage/SavedQuestionPage";
import SettingsPage from "./pages/QuestionPage/SettingsPage";
import SavedQuestions from "./pages/QuestionPage/SavedQuestions";
import { QuestionProvider } from "./Components/Quest/QuestionProvider";
import AskedQuestionsPage from "./pages/QuestionPage/AskedQuestionsPage";
import TrendingQuestionsPage from "./pages/QuestionPage/TrendingQuestionsPage";
import HelpCenterPage from "./pages/QuestionPage/HelpCenterPage";



import Settings from "./pages/notification/notificationlist/Settings"


const App = () => {
  return (
    <UserProvider>

      <QuestionProvider>
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
        
        {/* Question-related routes */}
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/saved" element={<SavedQuestions />} />
        <Route path="/asked-questions" element={<AskedQuestionsPage/>} />
        <Route path="/trending" element={<TrendingQuestionsPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community/*" element={<Community />} />
        
      </Routes>
      </QuestionProvider>
    </UserProvider>
  );
};


export default App;