import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home/Home";
import PeermockHome from "./pages/Peermock/Home/index";
import SignUp from "./pages/SignUp/SignUp"
import Login from "./pages/Login/Login"
import { UserProvider } from "./Context/UserContext";
import Profile from "./pages/Profile/Profile";
import Refer from "./pages/Refer/Refer";
import Contact from "./pages/Contact/contact";
import Pricing from "./pages/Pricing";
import QuestionPage from "./pages/Questions/QuestionPage";
import Community from './pages/Community/Community';
import Settings from "./pages/notification/notificationlist/Settings"
import AvailabilityForm from "./Components/AvailabilityForm";
import AvailabilityPage from "./Components/AvailabilityPage";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/peermock" element={<PeermockHome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questionpage/*" element={<QuestionPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/refer"   element={<Refer/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pricing" element={<Pricing/>} />
      <Route path="/notification" element={<Settings/>} />
      <Route path = "/community/*" element = {<Community/>}/>
        <Route path="/availability-form" element={<AvailabilityForm/>} />
      <Route path="/availability-page" element={<AvailabilityPage/>} />
    </Routes>
        </UserProvider>
          
    
  );
};


export default App;
