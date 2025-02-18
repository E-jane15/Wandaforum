import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ActivationCode = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4EFFA]">
      {/* Header Section */}
      <header className="w-full bg-[#3F1D56] py-4 flex justify-center">
        <h1 className="text-white text-lg font-semibold">
          <span className="text-purple-300">Prep</span>meets by wandameet
        </h1>
      </header>

      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mt-8 w-[400px] text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-purple-500 flex items-center justify-center rounded-full">
            <i className="fas fa-unlock-alt text-white text-2xl"></i>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4">Activation Code</h2>

        {/* Code Box */}
        <div className="mt-6 text-2xl font-bold text-purple-700 border-dashed border-2 border-purple-400 py-3 px-6 rounded-lg inline-block">
          435264
        </div>

        {/* Instruction */}
        <p className="text-gray-600 mt-4 px-4">
          You are ready to set up your account. Copy your activation code or click the button below to activate your account.
        </p>

        {/* Activation Button */}
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-purple-700">
          Activate your account
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <div className="flex justify-center gap-4 mb-2">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaLinkedin className="text-blue-700 text-2xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
        </div>
        <p className="text-gray-600 text-sm">
          Copyright © 2023 <br />
          <span className="font-semibold">Prepmeets</span> <br />
          Prepmeets by wandameet
        </p>
      </footer>
    </div>
  );
};

export default ActivationCode;
