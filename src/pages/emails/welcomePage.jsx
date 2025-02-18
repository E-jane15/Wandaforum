import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "font-awesome/css/fontawesome.min.css"; // Import Font Awesome

const WelcomePage = ({ userName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple2-100 text-white-800 p-6">
      <div className="bg-white  border-gold rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple">Welcome to Wandaforum</h1>
        <h2 className="text-xl mb-6 text-center text-gold">Let's Ace Your Next Interview!</h2>

        <p className="mb-4">Hi {userName || "[User's Name]"},</p>
        <p className="mb-6">
          Welcome to Wandaforum, the ultimate platform to ace your cloud and DevOps interviews! You now have access to premium interview preparation resources that will give you an edge.
        </p>

        <h3 className="font-semibold mb-2">You can:</h3>
        <ul className="list-disc list-inside mb-6 text-purple3">
          <li>⭐ <b> Start Phone Screening Questions</b> to build confidence for your interviews.</li>
          <li>⭐ <b >Share Your Projects</b> and get a custom link to showcase your skills and impress recruiters.</li>
          <li>⭐ <b>Explore Self-Introduction Templates</b> designed for various roles like AWS Cloud Engineer and DevSecOps Engineer.</li>
        </ul>

        <p className="mb-4">Let’s get you prepared and job-ready!</p>

        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 mt-4">
          Explore Wandaforum
        </button>

        <footer className="mt-6 text-sm text-purple2-600 text-center">
          Best,<br />
          The Wandaforum Team
        </footer>
      </div>
    </div>
  );
};

export default WelcomePage;