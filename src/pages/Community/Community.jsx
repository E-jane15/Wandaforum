// Community.jsx
"use client";

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import QuestionFeed from '../../Components/Questions/QuestionFeed';
import QuestionForm from '../../Components/Questions/QuestionForm';

const Community = () => {
  return (
    <div className="min-h-screen bg-[#13111C]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            All Questions
          </h1>
          <QuestionForm />
        </div>
        {/* Add your questions list content here */}
      </div>
    </div>
  );
};

export default Community;