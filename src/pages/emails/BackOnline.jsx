import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import welcomeImage from "../../assets/welcome.png"; // Correct path

const WelcomeBack = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3F1D56] px-4">
      {/* Main Container */}
      <div className="bg-[#F4EFFA] shadow-lg rounded-2xl p-8 w-[90%] max-w-lg text-center">
        
        {/* Logo */}
        <h2 className="text-lg font-semibold text-gray-700">
          <span className="text-purple-600">Wanda</span>forum <br />
        </h2>
        
        {/* Welcome Image with Bounce */}
        <div className="flex flex-col items-center  gap-4">
          <img 
            src={welcomeImage} 
            alt="Welcome" 
            className="w-48 h-auto animate-bounce"
            style={{  margin: '0 auto' }} 
          />
        </div>

        {/* Welcome Message */}
        <div className="mt-4">
          <div className="flex items-center justify-center bg-purple-200 rounded-full w-16 h-16 mx-auto">
            <i className="fas fa-power-off text-purple-600 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-semibold mt-4">
            Hi <span className="font-bold">James</span>,
          </h2>
          <h3 className="text-xl font-medium text-gray-800">Welcome back</h3>
        </div>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <div className="flex justify-center">
            <i className="fas fa-hands-clapping text-purple-600 text-5xl"></i>
          </div>
          <p className="text-gray-700 mt-4 text-sm mt-5">
            Welcome back! We missed you. <br />
            Join back in on certifications, interviews, and exam preparations. <br />
            Let’s get you your dream job.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-purple-700">
            Log in to your account
          </button>
          <p className="text-xs text-gray-500">
            Or copy and paste the link below in your browser if the button does not work:
            <br />
            <a href="https://  http://localhost:5173/home" className="text-purple-600 underline">
              https://http://localhost:5173/home
            </a>
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <div className="flex justify-center gap-4 mb-2">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
            <FaLinkedin className="text-blue-700 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
          </div>
          <p className="text-purple-600 text-xs">
            Copyright © 2025 <br />
            <span className="font-semibold text-purple mb-4">wandaforum</span> <br/>   
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WelcomeBack;
