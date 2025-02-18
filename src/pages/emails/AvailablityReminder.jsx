import React from "react";

const AvailabilityReminderEmail = ({
  userName,
  interviewDate,
  interviewTime,
  interviewLocation,
  confirmationLink,
  rescheduleLink,
  unsubscribeLink,
}) => {
  return (
    <div className="bg-white max-w-3xl mx-auto border p-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-purple2 text-white p-4">
        <div className="flex items-center">
          <i className="fas fa-calendar-check text-2xl mr-2"></i>
          <span className="text-xl font-bold">WandaForum</span>
        </div>
        <span className="font-medium">Upcoming Availability Reminder</span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Hello {userName},</h2>
        <p className="mt-4 text-lg text-gray-600">
          This is a friendly reminder that you have set the following availability for an upcoming interview:
        </p>
      </div>

      {/* Availability Details */}
      <div className="bg-gray-100 p-4 mt-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-700">Your Upcoming Interview:</h3>
        <ul className="mt-2 text-gray-600">
          <li><strong>Date:</strong> {interviewDate}</li>
          <li><strong>Time:</strong> {interviewTime}</li>
          <li><strong>Location:</strong> {interviewLocation}</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 flex justify-between items-center">
        <a
          href={confirmationLink}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600"
        >
          <i className="fas fa-check-circle mr-2"></i>Confirm Interview
        </a>
        <a
          href={rescheduleLink}
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Reschedule
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>
          For any questions, feel free to contact us at{" "}
          <a href="mailto:support@wandaforum.com" className="text-blue-500">
            support@wandaforum.com
          </a>.
        </p>
        <p>
          If you no longer wish to receive reminders, you can{" "}
          <a href={unsubscribeLink} className="text-blue-500">
            unsubscribe here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default AvailabilityReminderEmail;