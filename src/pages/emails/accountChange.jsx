import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faCheckCircle, faExclamationTriangle, faSpinner } from "@fortawesome/free-solid-svg-icons";

const AccountChangeNotification = () => {
  const [email, setEmail] = useState("");
  const [changeType, setChangeType] = useState("email"); // 'email' or 'password'
  const [notificationSent, setNotificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
   
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setNotificationSent(true);
    } catch (err) {
      setError("Failed to send notification. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <FontAwesomeIcon icon={faUserEdit} className="text-purple-500 text-4xl mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">Account Change Notification</h2>
        <p className="text-gray-600 mt-2">Notify users about changes in their account.</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter user's email"
          className="mt-4 p-2 border rounded w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

       
        <select
          value={changeType}
          onChange={(e) => setChangeType(e.target.value)}
          className="mt-3 p-2 border rounded w-full border-gray-300 bg-white text-gray-700"
        >
          <option value="email">Email Change</option>
          <option value="password">Password Change</option>
        </select>

        
        <button
          className={`mt-4 py-2 px-4 rounded text-white w-full flex justify-center items-center ${
            loading ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-700"
          }`}
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? <FontAwesomeIcon icon={faSpinner} spin className="mr-2" /> : null}
          {loading ? "Sending..." : "Send Notification"}
        </button>

        
        {notificationSent && (
          <div className="mt-4 flex items-center text-green-500">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <p>Notification email sent successfully!</p>
          </div>
        )}

      
        {error && (
          <div className="mt-4 flex items-center text-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            <p>{error}</p>
          </div>
        )}

       
        {notificationSent && (
          <p className="mt-4 text-sm text-gray-600">
            If this change wasn’t made by you, please contact Wandaforum support immediately.
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountChangeNotification;
