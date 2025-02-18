import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faMapMarkerAlt, faLaptop } from "@fortawesome/free-solid-svg-icons";

const InterviewRequestEmail = ({ positionTitle, companyName, interviewDate, interviewTime, interviewLocation, interviewMode, interviewUrl }) => {
  return (
    <div className="bg-white p-6 sm:p-8">
      <div className="max-w-2xl mx-auto bg-purple-400 rounded-lg shadow-md">
        {/* Header Section */}
        
        <div className="border-b  border-gold p-6 text-center bg-purple2">
          <h1 className="text-3xl font-semibold text-white  border-orange bg-purple3-"> Mock Interview Request  {companyName}</h1>
          <p className="mt-2 border-b border-gold rounded-lg  text-black">You have an interview request for the position of {positionTitle}!</p>
        </div>
        
        {/* Body Section */}
        <div className="px-6 py-4 text-gray-600">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-medium animate-bounce text-gold">Interview Request for {positionTitle}</h2>
          </div>

          <div className="mt-4">
            <p className="text-gray-600">We are pleased to invite you for an interview for the position of <span className="font-semibold">{positionTitle}</span> at <span className="font-semibold">{companyName}</span>.</p>
            
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-purple2-600 mr-2" />
                <span className="text-gray-700">Date: <span className="font-semibold">{new Date(interviewDate).toLocaleDateString()}</span></span>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faClock} className="text-purple2-600 mr-2" />
                <span className="text-purple2-700">Time: <span className="font-semibold">{interviewTime}</span></span>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple2-600 mr-2" />
                <span className="text-purple2-700">Location: <span className="font-semibold">{interviewLocation}</span></span>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faLaptop} className="text-purple2-600 mr-2" />
                <span className="text-purple2-700">Mode: <span className="font-semibold">{interviewMode}</span></span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
<a href="interviewUrl" className="flex  space-x-6">
<button className="bg-purple2-600 px-5 py-4 mr-6  inline-block rounded-lg border-b border-purple2 animate-bounce  text-lg  hover:bg-green-300">
  Accept
</button>
 <button className=" border-b border-purple2 inline-block rounded-lg py-4 px-6 mr-6 bg-yellow animate-bounce text-lg hover:bg-green-300"> Reject </button>
</a>


          </div>
        </div>

        {/* Engagement Section */}
        <div className="mt-6 px-6 py-4 border-t border-purple2">
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-purple2-600" />
              <span>Add to Calendar</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptop} className="mr-2 text-purple2-600" />
              <span>Join Interview</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6 p-6 text-center text-sm text-gray-500">
          <p>Need to reschedule? <a href="#" className="text-purple3-500">Contact us</a></p>
          <p className="mt-4">Need help? <a href="mailto:support@{companyName.toLowerCase()}.com" className="text-blue-500">Contact support</a></p>
          <p className="mt-4 text-yellow-500 animate-bounce">Follow us on <a href="#" className="text-blue-500">
            Twitter</a> | <a href="#" className="text-blue-500">Facebook</a> | <a href="#" className="text-blue-500">Instagram</a></p>
          <p className="mt-2 text-purple3-400 animate-bounce">© 2025 Wandaforum {companyName}. All rights reserved. | <a href="#" className="text-orange-500">Privacy Policy</a> | <a href="#" className="text-green-500">Terms of Service</a></p>
        </div>
      </div>
    </div>
  );
};

export default InterviewRequestEmail;