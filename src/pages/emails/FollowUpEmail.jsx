import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing specific icons
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Example of an icon import

const FollowUpEmail = ({ interviewerName, jobTitle, companyName, userName, userContact, interviewDate }) => {
  return (
    <div className="flex bg-purple3 flex-col items-center text-white justify-center min-h-screen p-6">
      <div className="bg-white text-black rounded-lg border-b border-green shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-xl font-bold mb-4 text-center text-purple2">Subject: Follow-Up On My Interview - {userName}</h1>

        <p className="mb-6">
          Dear {interviewerName},
        </p>

        <p className="mb-4 text-green-800">
          Thank you again for the opportunity to interview for the {jobTitle} position at {companyName} on {interviewDate}. 
          I appreciated the chance to discuss how my background in software engineering aligns with the needs of your team.
        </p>

        <p className="mb-4 text-green-800">
          After our conversation, I wanted to share a recent project that might be of interest to you, as it closely relates to the challenges we discussed during the interview. 
        </p> 

        <p className="mb-4 text-green-700">
          I am excited about the prospect of joining {companyName} and contributing to [Company's goal or project]. Please feel free to contact me if you need any additional information.
        </p>

        <p className="mb-4">
          Thank you for your consideration.
        </p>

        <p className="font-semibold">
          Sincerely,<br />
          {userName}<br />
          {userContact}
        </p>

        <p> Thanks for using  <span className="text-purple2 text-lg"> wandaforum !</span> </p>

        {/* Example usage of FontAwesomeIcon */}
        <div className="flex justify-center mt-4">
          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-2xl" />
          <p className="ml-2 text-white">Application Submitted</p>


       
        </div>
      </div>
    </div>
  );
};

export default FollowUpEmail;
