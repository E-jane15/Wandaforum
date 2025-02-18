import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./pages/Home/Home";
import PeermockHome from "./pages/Peermock/Home/index";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { UserProvider } from "./Context/UserContext";
import Profile from "./pages/Profile/Profile";
import Refer from "./pages/Refer/Refer";
import Contact from "./pages/Contact/contact";
import Pricing from "./pages/Pricing";
import QuestionPage from "./pages/Questions/QuestionPage";
import Community from "./pages/Community/Community";
import Settings from "./pages/notification/notificationlist/Settings";
import Details from "./pages/notification/notificationlist/Details";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NewComment from "./pages/emails/NewComment";
import GetStarted from "./pages/emails/GetStarted"; // Make sure this import is uncommented and correct

import ForgotPassword from "./pages/emails/ForgotPassword";
import BackOnline from "./pages/emails/BackOnline";
import KeyFeaturesPage from "./pages/emails/keyfeatures";
import FollowUpEmail from "./pages/emails/FollowUpEmail";

import Navbar from "./Components/Navbar/Navbar";
import PeerMockInterviewRequestEmail from "./pages/emails/MockInterviewRequest";
import InterviewScheduleConfirm from "./pages/emails/InterviewScheduleConfirm";
import InterviewReminder from "./pages/emails/InterviewReminder";
import WelcomePage from "./pages/emails/welcomePage";
import VerifyEmail from "./pages/emails/VerifyEmail";
import PeerMockInterviewRequest from "./pages/emails/MockInterviewRequest";

import InterviewScheduledConfirm from "./pages/emails/InterviewScheduleConfirm";
import AvailabilityReminder from "./pages/emails/AvailablityReminder";

import NotificationSettings from "./pages/notification/notificationlist/NotificationSettings";
import AccountSettings from "./pages/notification/AccountSettings"; 
import PasswordSettings from "./pages/notification/notificationlist/PasswordSettings";

// App.jsx - Main app component
const App = () => {
  const location = useLocation();

  // Show Navbar only for specific routes (adjust the condition based on your needs)
  const showNavbar = !["/login", "/signup"].includes(location.pathname); // Hide Navbar on login and signup pages

  return (
    <UserProvider>
      {showNavbar && <Navbar />} {/* Display Navbar if condition is met */}

      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/peermock" element={<PeermockHome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questionpage/*" element={<QuestionPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        
        {/* Notification and Settings Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/notification/*" element={<Details />} />
        <Route path="/notification/settings" element={<NotificationSettings />} />
        <Route path="/notification/account-settings" element={<AccountSettings />} />
        <Route path="/notification/password-settings" element={<PasswordSettings />} />

        {/* Email-related Routes */}
        <Route path="/email/forgot-password" element={<ForgotPassword />} />
        <Route path="/email/back-online" element={<BackOnline />} />
        <Route path="/email/key-features" element={<KeyFeaturesPage />} />

        {/* GetStarted Route */}
        <Route path="/notification/*" element={<Details />} />

        {/* Community and Questions Routes */}
        <Route path="/community/*" element={<Community />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

// NotFound Component
const NotFound = () => <div>Page Not Found at all </div>;

export default App;
