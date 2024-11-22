
"use client";

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import QuestionForm from "./QuestionForm";


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
       
        
      </div>
    </div>
  );
};

export default Community;







