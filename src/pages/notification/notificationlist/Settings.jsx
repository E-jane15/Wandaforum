import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrosoft,
  faMeta,
  faTiktok,
  faGoogle,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import DeleteAccountModal from "./deleteAccountModal";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Settings = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isModalOpen, SetisMOdalOpen] = useState(false);

  const HandleDeleteClick = () => {
    SetisMOdalOpen(true);
  };

  const closeModal = () => {
    SetisMOdalOpen(false);
  };

  const [notifications, setNotifications] = useState({
    replies: true,
    comments: true,
  });

  const [companySettings, setCompanySettings] = useState({
    Microsoft: false,
    Meta: true,
    TikTok: true,
    Google: true,
    Amazon: true,
  });

  const [recordingEnabled, setRecordingEnabled] = useState(true);

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const toggleCompany = (company) => {
    setCompanySettings({
      ...companySettings,
      [company]: !companySettings[company],
    });
  };

  const toggleRecording = () => {
    setRecordingEnabled(!recordingEnabled);
  };

  const handleUpgradeClick = () => {
    navigate('/pricing'); // Navigate to the pricing page
  };

  return (
    <div className="min-h-screen bg-darkpurple-100 text-white ml-9">
      <div className="max-w- mx-auto bg-darkpurple shadow-md ml-9 p-8">
        <h2 className="text-2xl font-bold text-purple2  mb-6">Notification Settings</h2>

        {/* Email Notifications */}
        <div className="mb-8 text-white">
          <p className="text-lg font-medium mb-4">When would you like to receive an email?</p>
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              id="replies"
              checked={notifications.replies}
              onChange={() => toggleNotification("replies")}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            />
            <label htmlFor="replies" className="ml-3">Someone replies to you</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="comments"
              checked={notifications.comments}
              onChange={() => toggleNotification("comments")}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            />
            <label htmlFor="comments" className="ml-3">Someone comments on a question you've interacted with</label>
          </div>
        </div>

        {/* Companies and Users */}
        <div className="mb-8">
          <p className="text-lg  text-gold mb-4">Companies and users you are following</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-2">Companies</p>
              {Object.keys(companySettings).map((company) => (
                <div key={company} className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={{
                        Microsoft: faMicrosoft,
                        Meta: faMeta,
                        TikTok: faTiktok,
                        Google: faGoogle,
                        Amazon: faAmazon,
                      }[company]}
                      className="text-2xl text-yellow-600"
                    />
                    <span>{company}</span>
                  </div>
                  <button
                    onClick={() => toggleCompany(company)}
                    className={`w-10 h-6 flex items-center rounded-full ${
                      companySettings[company] ? "bg-purple" : "bg-gray-300"
                    } p-1 transition-colors`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                        companySettings[company] ? "translate-x-4" : ""
                      } transition-transform`}
                    ></div>
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold mb-2 text-gold">Users</p>
              <p>Not following any users yet.</p>
            </div>
          </div>
        </div>

        {/* Wandaprep Practice Settings */}
        <div>
          <h2 className="text-lg font-medium mb-4 text-gold animate-bounce">Wandaprep Practice Settings</h2>
          <p className="mb-4">Peer mock interviews may be recorded...</p>
          <div className="flex items-center">
            <span className="mr-3">Recording enabled</span>
            <button
              onClick={toggleRecording}
              className={`w-10 h-6 flex items-center rounded-full ${
                recordingEnabled ? "bg-purple" : "bg-gray-300"
              } p-1 transition-colors`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  recordingEnabled ? "translate-x-4" : ""
                } transition-transform`}
              ></div>
            </button>
          </div>
        </div>

        {/* Membership Information */}
        <div className="mt-9 font-semibold text-gold animate-bounce">Wandaprep Membership</div>
        <p className="mt-4">You aren't a Wandaprep Member yet...</p>
        
        {/* Upgrade Plan Button */}

        <div className="mt-4">
  {/* Upgrade Plan Button */}
  <button
    className="bg-purple text-white py-2 px-4 rounded hover:bg-yellow-500 mt-6 block w-19 h-14"
    onClick={handleUpgradeClick} // Handle click to navigate
  >
    Upgrade Plan
  </button>

  {/* Delete Account Button */}
  <button
    className="bg-white text-purple py-2 px-3 w-19 h-14 boder-b boder-red rounded-xl border-2 border-purple hover:bg-yellow-500 mt-6 block "
    onClick={HandleDeleteClick}
  >
    Delete Account
  </button>
</div>



 
        {/* Delete Account Modal */}
        {isModalOpen && <DeleteAccountModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Settings;