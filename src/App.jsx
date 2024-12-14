import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home/Home";
import PeermockHome from "./pages/Peermock/Home/index";
import SignUp from "./pages/SignUp/SignUp"
import Login from "./pages/Login/Login"
import { Question } from "./pages/Questions/Question";
import { UserProvider } from "./Context/UserContext";
import Profile from "./pages/Profile/Profile";
import Refer from "./pages/Refer/Refer";
import Contact from "./pages/Contact/contact";
import Pricing from "./pages/Pricing";
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/peermock" element={<PeermockHome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Questions" element={<Question/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/refer"   element={<Refer/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </UserProvider>
  );
};

export default App;
