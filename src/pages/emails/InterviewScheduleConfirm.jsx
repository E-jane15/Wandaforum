import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const InterviewConfirmedEmail = ({ interviewDate, interviewTime, interviewerName, interviewUrl }) => {
  return (
    <div className="bg-gray-50 p-6 sm:p-8">
      <div className="max-w-2xl mx-auto bg-red-800 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="border-b p-6 text-center bg-purple2 text-white text-lg">
          <h1 className="text-3xl font-semibold text-white-600">Interview Confirmed</h1>
          
        </div>

        {/* Body Section */}
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-medium">Interview Confirmation</h2>
            <p className="mt-2 text-gray-600">Your interview has been confirmed with Ayamba!</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Interviewer: <span className="font-semibold">{interviewerName}</span></p>
            <div className="mt-2 flex items-center text-gray-600">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-600" />
              <p>{interviewDate}</p>
            </div>
            <div className="mt-2 flex items-center text-gray-600">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-600" />
              <p>{interviewTime}</p>
            </div>
          </div>

          <div className="mt-6 text-center">

          
            
            <a
              href={interviewUrl}
              
            >
              <button className="bg-purple2-600 px-5 py-4 mr-6  inline-block rounded-lg border-b border-orange animate-bounce  text-lg  hover:bg-purple2">
Join Interview
</button>
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-2 p-6 text-center text-sm text-gray-500">
          <p> Thanks for using  <span className="text-purple2 text-lg"> wandaforum !</span> </p>
          <p>If you need to reschedule or have any questions, please <a href="mailto:support@wandaforum.com" className="text-purple2">contact support</a>.</p>
          <p className="mt-4">Follow us on <a href="#" className="text-purple2">Twitter</a> | <a href="#" className="text-purple2">LinkedIn</a></p>
          <p className="mt-4">Need help? <a href="mailto:support@{companyName.toLowerCase()}.com" className="text-purple2">Contact support</a></p>
          
        </div>
      </div>
    </div>
  );
};

export default InterviewConfirmedEmail;
