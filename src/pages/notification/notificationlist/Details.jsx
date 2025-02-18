import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faClock, faBars } from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings"; // Assuming this is your Settings page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [readNotifications, setReadNotifications] = useState([]); // Track read notifications
  const [showAllNotifications, setShowAllNotifications] = useState(false); // Control to show all notifications

  const NotificationDetails = [
    { id: 1, type: "Message", title: "Ayamba sent you a new message", message: "Cloud computing has revolutionized the way businesses and individuals operate.", user: "Ayamba", date: "24 Nov 2018 at 9:30 AM", color: "blue" },
    { id: 2, type: "Alert", title: "New job opportunity", message: "A new job that matches your profile has been posted.", user: "WandaPrep", date: "25 Nov 2018 at 10:00 AM", color: "red" },
    { id: 3, type: "Reminder", title: "Interview Preparation", message: "Don't forget your interview tomorrow at 2 PM.", user: "WandaPrep", date: "26 Nov 2018 at 8:00 AM", color: "blue" },
    { id: 4, type: "Feedback", title: "Your profile was viewed", message: "Your profile has been viewed by a recruiter.", user: "WandaPrep", date: "27 Nov 2018 at 1:00 PM", color: "blue" },
  ];

  // Sort notifications by date in ascending order
  const sortedNotifications = NotificationDetails.sort((a, b) => new Date(a.date) - new Date(b.date));

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);

    if (!readNotifications.includes(notification.id)) {
      setReadNotifications([...readNotifications, notification.id]); // Mark as read
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotification(null);
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setReadNotifications(NotificationDetails.map((notification) => notification.id)); // Mark all as read
  };

  // Function to mark individual notification as read
  const markAsRead = (notificationId) => {
    if (!readNotifications.includes(notificationId)) {
      setReadNotifications([...readNotifications, notificationId]); // Mark as read
    }
  };

  // Function to toggle "See All Notifications"
  const toggleSeeAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications); // Toggle between showing all notifications
  };

  return (
    <div className="font-poppins ">
      {/* Settings Button */}



     






      {/* Notifications Header */}

      <div className=" flex flex-col gap-9 ">
      <div className="mt-8 ml-14">
        <h1 className="text-2xl font-bold text-purple2">NOTIFICATIONS</h1>
        <h2 className="text-sm text-orange animate-bounce">You have {NotificationDetails.length - readNotifications.length} unread notifications</h2>
      </div>





      <div className="mt-9">
        <NavLink 
          to="/Settings" 
          className={({ isActive }) => isActive ? "text-lg font-medium" : "text-lg hover:text-orange font-medium"}
        >
          <FontAwesomeIcon icon={faBars} className="text-lg text-purple2 h-6 w-6" /> 
          Settings
        </NavLink>



        <button className="text-red"   onClick={clearAllNotifications}
        >
          Clear All
        </button>

        <button className="text-green "
          onClick={toggleSeeAllNotifications}
        >
          {showAllNotifications ? 'Show Unread Only' : 'See All Notifications'}
        </button>
      </div>
      </div>
     

      {/* Notification Buttons */}


      

      {/* Notifications List */}
      <div className="min-h-screen bg-darkpurple text-white flex justify-center items-start">
        <div className="w-full shadow-xl bg-darkpurple rounded-lg px-9 my-10">
          <div className="space-y-4">
            {sortedNotifications
              .filter(notification => showAllNotifications || !readNotifications.includes(notification.id)) // Show all or only unread
              .map((notification) => {
                const isRead = readNotifications.includes(notification.id);
                return (
                  <div
                    key={notification.id}
                    className={`flex items-start justify-between border-b border-r border-orange pb-4 last:border-b cursor-pointer p-4 rounded-xl transition duration-300 ease-in-out mb-4 
                      ${isRead ? 'bg-gray-700 text-gray-400' : 'bg-purple5 hover:bg-gray-700'}`}
                    onClick={() => openModal(notification)}
                  >
                    <div className="flex items-start gap-4">
                      <button 
                        className="text-white bg-purple hover:text-gray-300 text-xl" 
                        aria-label="Close Notification"
                        onClick={() => markAsRead(notification.id)}  // Mark as read on click
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                      <div className="ml-8">
                        <span className={`text-sm font-semibold text-white px-5 py-1 rounded-t rounded-b bg-${notification.color}-500`}>
                          {notification.type}
                        </span>
                        <h2 className={`text-lg font-medium mt-2 ${isRead ? 'text-gray-400' : 'text-white'}`}>{notification.title}</h2>
                        <p className="mt-4 text-sm">{notification.message}</p>
                        <p className="font-semibold mt-2 text-orange">{notification.user}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-9 text-purple">
                      <FontAwesomeIcon icon={faClock} className="mr-1 text-purple" />
                      {notification.date}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Modal for Notification Details */}
      {isModalOpen && selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold">{selectedNotification.title}</h2>
            <p className="mt-4">{selectedNotification.message}</p>
            <p className="mt-4 font-semibold">From: {selectedNotification.user}</p>
            <p className="mt-2 text-gray-600">{selectedNotification.date}</p>
            <button onClick={closeModal} className="mt-4 text-red-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
