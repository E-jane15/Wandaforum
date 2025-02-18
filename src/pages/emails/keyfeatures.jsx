import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const KeyFeaturesPage = ({ userName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple">
          Introduction to Key Features
        </h1>
        <h2 className="text-xl mb-6 text-center text-yellow-700">
          Discover Your Job Readiness Resources at Wandaprep
        </h2>

        
        <p className="mb-4 text-lg">
          Hi <span className="font-semibold">{userName || "[User's Name]"}</span>,
        </p>
        <p className="mb-6">
          At <span className="font-semibold  text-purple">Wandaforum</span>, we are dedicated
          to helping you excel in your interviews. Here’s a quick look at the
          key features you can start using today:
        </p>

        
        <ul className="space-y-3">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
            <b>Technical Q&A:</b> Master job-specific technical interview questions.
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
            <b>Phone Screening Prep:</b> Essential preparation for phone interviews.
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
            <b>Skills Checklist:</b> Ensure your job readiness with our comprehensive checklist.
          </li>
        </ul>

        
        <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 mt-6 block mx-auto">
          Start Preparing Now
        </button>

        
        <footer className="mt-6 text-sm text-gray-600 text-center">
          The <span className="font-semibold">WandaForum</span> Team
        </footer>
      </div>
    </div>
  );
};

export default KeyFeaturesPage;
