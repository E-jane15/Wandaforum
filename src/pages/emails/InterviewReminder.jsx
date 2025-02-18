import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const InterviewReminderEmail = ({ interviewDate, interviewTime, interviewerName, interviewUrl, reminderTime }) => {
  return (
    <div className="bg-gray-50 p-6 sm:p-8 ">
      <div className="max-w-2xl mx-auto  text-center rounded-lg shadow-md">
        {/* Header Section */}
        <div className="border-b  border-red  bg-purple2 rounded-lg p-6 ">

        

          <h1 className="text-3xl font-semibold text-white  bg-purple2 justify-center items:center">Reminder! <br />
           Your Interview is Coming Up!</h1>
      
        </div>
        {/* Main Body Section */}
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-orange-600 text-2xl mr-3" />
            <p className="mt-2 text-gold items-center animate-bounce">This is a friendly reminder that your interview is scheduled soon.</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Interviewer:John Doe <span className="font-semibold">{interviewerName}</span></p>
            <div className="mt-2 flex items-center text-gray-600">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-600" />
              <p>{interviewDate} 12 July 2023</p>
            </div>
            <div className="mt-2 flex items-center text-gray-600">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-600" />
              <p>{interviewTime}5: 00 AM </p>
            </div>
          </div>

          <div className="mt-6 text-center">
             
<p text-puple-400 mt-6 > Position: Cloud Engineer <br />
Date: 12th July 2024 <br />
Time: 5:00 AM (Please be on time) <br />

Candidate: John Doe <br />

Please ensure you are prepared and available for the interview at the specified time.  <br />
We look forward to speaking with you soon. <br />

If you have any questions or need assistance, feel free to reach out to us.

Best regards, <br />
   <h3 text-gold> WANDAFORUM</h3> 
</p>


          </div>
        </div>


        {/* Footer Section */}
        <div className="mt-6 p-6 text-center text-sm text-gray-500  border-b border-purple2 border-t border-purple2">
        <p> Thanks for using  <span className="text-purple2 text-lg"> wandaforum !</span> </p>

          <p>If you need to reschedule or have any questions, please <a href="mailto:support@wandaforum.com" className="text-purple2">contact support</a>.</p>
          <p className="mt-4 animate-bounce">Follow us on <a href="#" className="text-purple2">Twitter</a> | <a href="#" className="text-purple2">LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
};

export default InterviewReminderEmail;
