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



import Settings from "./pages/notification/notificationlist/Settings"
import Landing from "./pages/Landing/Landing"
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfileCard from "./pages/ProfileCard/ProfileCard";
import { QuestionProvider } from './Components/Quest/QuestionProvider';
import AvailabilityForm from "./Components/AvailabilityForm";
import AvailabilityPage from "./Components/AvailabilityPage";
import SavedQuestions from './pages/QuestionPage/SavedQuestions';
import AskedQuestionsPage from './pages/QuestionPage/AskedQuestionsPage';
import HelpCenterPage from './pages/QuestionPage/HelpCenterPage';
import SettingsPage from './pages/QuestionPage/SettingsPage';
import TrendingQuestionsPage from './pages/QuestionPage/TrendingQuestionsPage';
import UserProfile from "./pages/Community/UserProfile";
import WelcomeSection from "./Components/CommunityComponents/Welcome";

const App = () => {
  return (
    <UserProvider>
    <QuestionProvider>
      <Routes>
        <Route  index element={<Landing/>} />
        <Route path="/Home" element={<HomeScreen/>}/>
        <Route path="/peermock" element={<PeermockHome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      <Route path="/notification" element={<Settings/>} />
      <Route path="/Dashboard" element= {<Dashboard/>}/>
      <Route path="/profilecard" element={<ProfileCard/>} />   
        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community" element={<Community />} />
        
        
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/settings" element={<Settings/>} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/welcome" element={<WelcomeSection/>}/>
        {/* <Route path="/community/*" element={<Community />} /> */}
        <Route path="/availability-form" element={<AvailabilityForm/>} />
      <Route path="/availability-page" element={<AvailabilityPage/>} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
      </QuestionProvider>
      </UserProvider>
    
        
          
    
  );
};


export default App;