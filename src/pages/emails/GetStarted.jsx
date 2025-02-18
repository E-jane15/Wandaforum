import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetStarted = ({ userName }) => {
  return (
    <div className="flex flex-col items-center border-green justify-center min-h-screen bg-purple3-100 text-gray-800 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple2">Let’s Get You Started</h1>
        <h2 className="text-xl mb-6 text-center text-gold">Complete Your Profile & Start Preparing for Success</h2>

        <p className="mb-4">Hi {userName || "[User's Name]"},</p>
        <p className="mb-6">
          You’re just a few steps away from accessing personalized interview preparations that fit your career goals. To get started, we need to tailor the platform to your specific needs.
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>⭐ <b>Complete Your Profile</b> by selecting your job role (e.g., AWS DevOps Engineer, DevOps Lead Engineer).</li>
          <li>⭐ <b>Go to Dashboard</b> and start interviewing with expert-curated tools like technical interview Q&A and self-introduction templates.</li>
        </ul>

        <p className="mb-4">Let’s get ready for your next big interview!</p>

        <button className="bg-purple2 text-white text-lg rounded-lg py-2 px-4 hover:bg-orange-700 animate-boounce">
          Go to Profile
        </button>

        <footer className="mt-6 text-sm text-purple3 text-center">
          Best,<br />
          The WandaForum Team
        </footer>
      </div>
    </div>
  );
};

export default GetStarted;
