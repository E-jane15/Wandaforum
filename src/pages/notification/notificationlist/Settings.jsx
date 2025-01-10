import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrosoft,
  faMeta,
  faTiktok,
  faGoogle,
  faAmazon,
  faStripe,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import DeleteAccountModal from "./DeleteAccountModal";

const Settings = () => {
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
    Stripe: true,
    DoorDash: true,
    Apple: false,
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

  return (
    <div className="min-h-screen bg-darkpurple-100 text-white ml-9">
      <div className="max-w- mx-auto bg-darkpurple shadow-md ml-9 p-8">
        <h2 className="text-2xl font-bold mb-6 text-white-">
          Notification Settings
        </h2>

        {/*=============== Email=================== Notifications */}
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
            <label htmlFor="replies" className="ml-3 text-white-700">
              Someone replies to you
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="comments"
              checked={notifications.comments}
              onChange={() => toggleNotification("comments")}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            />
            <label htmlFor="comments" className="ml-3 text-white-700">
              Someone comments on a question you've interacted with
            </label>
          </div>
        </div>

        {/*==================== Company and User Following=========================== */}
        <div className="mb-8">
          <p className="text-lg  mb-4 text-white">
            Companies and users you are following
          </p>
          <div className="grid grid-cols-2 gap-6">
            {/*========================== Companies=============================== */}
            <div>
              <p className="font-semibold  font-semibold text-white-600 mb-2">Companies</p>
              {Object.keys(companySettings).map((company) => (
                <div
                  key={company}
                  className="flex items-center justify-between mb-3"
                >
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={
                        {
                          Microsoft: faMicrosoft,
                          Meta: faMeta,
                          TikTok: faTiktok,
                          Google: faGoogle,
                          Amazon: faAmazon,
                          Stripe: faStripe,
                          DoorDash: faSquare, 
                          Apple: faApple,
                        }[company]
                      }
                      className="text-2xl text-yellow-600"
                    />
                    <span className="text-white-700">{company}</span>
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
            {/*============================ Users=========================== */}
            <div>
              <p className="font-semibold text-white-600 mb-2">Users</p>
              <p className="text-white-500">Not following any users yet.</p>
            </div>
          </div>
        </div>

        {/*==========  ======= Settings========== */}
        <div>
          <h2 className="text-lg font-medium mb-4 font-semibold">Wandaprep Practice Settings</h2>
          <p className="text-white-700 mb-4">
            Peer mock interviews on Wandaprep Practice may be recorded in order <br />
            to automatically generate transcriptions and provide feedback for you.
          </p>

          <div className="flex items-center">
            <span className="text-white-700 mr-3">Recording enabled</span>
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

        <div className=" mt-9 font-semibold text-white">Wandaprep Membership</div>
        <p className="text-grey mt-4 text-grey text-white-700"> You aren't a Wandaprep Member yet. Your career depends on your next <br />
        interview. Want unlimited access to our courses and Slack Channel? Get <br />
        Wandaprep's membership today.</p>

        <div>
          <button className="bg-purple text-white py-2 px-4 rounded hover:bg-yellow-500 mt-6">Upgrade plan</button>
        </div>

        {/*========================= Delete Account Button========================== */}
        <button
          className="bg-white text-purple py-3 px-4 rounded-xl border-2 border-purple hover:bg-yellow-500 mt-6"
          onClick={HandleDeleteClick} 
        >
          Delete Account
        </button>

        {/*======================== Delete Account Modal========================== */}
        {isModalOpen && <DeleteAccountModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Settings;
