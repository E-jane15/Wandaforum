import { NavLink } from "react-router-dom"; 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTimes, FaClock } from "react-icons/fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const NotificationDetails = [
    {
      id: 1,
      type: "Message",
      title: "Ayamba sent you a new message",
      message: "Cloud computing has revolutionized the way businesses and individuals operate.",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "blue",
    },
    {
      id: 2,
      type: "Alert",
      title: "New job opportunity",
      message: "A new job that matches your profile has been posted.",
      user: "WandaPrep",
      date: "25 Nov 2018 at 10:00 AM",
      color: "red",
    },
    {
      id: 3,
      type: "Reminder",
      title: "Interview Preparation",
      message: "Don't forget your interview tomorrow at 2 PM.",
      user: "WandaPrep",
      date: "26 Nov 2018 at 8:00 AM",
      color: "bleu",
    },
    {
      id: 4,
      type: "Feedback",
      title: "Your profile was viewed",
      message: "Your profile has been viewed by a recruiter.",
      user: "WandaPrep",
      date: "27 Nov 2018 at 1:00 PM",
      color: "blue",
    },

    {
      id: 5,
      type: "Feedback",
      title: "Your profile was viewed",
      message: "Your profile has been viewed by a recruiter.",
      user: "Wandaprep",
      date: "27 Nov 2018 at 1:00 PM",
      color: "blue",
    },
    {
      id: 6,
      type: "Feedback",
      title: "Your profile was viewed",
      message: "Your profile has been viewed by a recruiter.",
      user: "Wandaprep",
      date: "22 Oct 2018 at 1:00 PM",
      color: "blue",
    },
    


  ];

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div className="font-poppins">
      <div className="flex items-center justify-between shadow-md  rounded-lg p-4 mt-4">
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            isActive
              ? "text-lg text-purple font-medium"
              : "text-lg hover:text-orange font-medium"
          }
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-purple5 ml-20" />
          Settings
        </NavLink>
        <button className="text-purple6 mr-5 font-bold focus:outline-none mr-20">Clear All</button>
      </div>

      <div className="mt-8 ml-14">
        <h1 className="text-2xl font-bold text-white">NOTIFICATIONS</h1>
        <h2 className="text-sm text-orange animate-bounce ">You have {NotificationDetails.length} unread notifications</h2>
      </div>

      <div className="min-h-screen bg-darkpurple text-white flex justify-center items-start">
        <div className="w-full shadow-xl bg-darkpurple rounded-lg px-9 my-10">
          <div className="space-y-4">  {/* =====Adjusted spacing ==== */}
            {NotificationDetails.map((notification) => (
              <div
                key={notification.id}     
              className={`flex items-start justify-between border-b  border-r border-orange
pb-4 last:border-b cursor-pointer bg-purple5
hover:bg-gray-700 transition duration-300 ease-in-out mb-4 p-4 rounded-xl ${
selectedNotification && selectedNotification.id === notification.id
 ? 'bg-gray-700' 
 : ''
}`}
onClick={() => openModal(notification)}



                
              >
                <div className="flex items-start gap-4">
                  <button className="text-white bg-purple hover:text-gray-300 text-xl">
                    <FaTimes />
                  </button>
                  <div className="ml-8">
                    <span
                      className={`text-sm font-semibold text-white px-5 py-1 rounded-t rounded-b bg-${notification.color}-500`}
                    >
                      {notification.type}
                    </span>
                    <h2 className="text-lg font-medium mt-2">{notification.title}</h2>
                    <p className="mt-4 text-sm">{notification.message}</p>
                    <p className="font-semibold mt-2 text-orange">{notification.user}</p>
                  </div>
                </div>
                <div className="flex items-center mt-9 text-purple">
                  <FaClock className="mr-1 text-purple " />
                  {notification.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*===========Modal for Notification Details================ */}
      {isModalOpen && selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white  rounded-lg p-6 w-11/12 md:w-1/3">
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

// import { useState } from "react";
// import { FaTimes, FaClock } from "react-icons/fa";

// const Details = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedNotification, setSelectedNotification] = useState(null);

//   const NotificationDetails = [
//     {
//       id: 1,
//       type: "Message",
//       title: "Ayamba sent you a new message",
//       message: "Cloud computing has revolutionized the way businesses and individuals operate.",
//       user: "Ayamba",
//       date: "24 Nov 2018 at 9:30 AM",
//       color: "blue",
//     },
//     // ... other notifications
//   ];

//   const openModal = (notification) => {
//     setSelectedNotification(notification);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedNotification(null);
//   };

//   return (
//     <div className="font-poppins">
//       <div className="min-h-screen bg-darkpurple text-white flex justify-center items-start">
//         <div className="w-full shadow-xl bg-darkpurple rounded-lg px-9 my-10">
//           <div className="space-y-4">
//             {NotificationDetails.map((notification) => (
//               <div
//                 key={notification.id}
//                 className={`flex items-start justify-between border-b border-r border-orange
//                   pb-4 last:border-b cursor-pointer bg-purple
//                    hover:bg-gray-700 transition duration-300 ease-in-out mb-4 p-4 rounded-xl ${
//                   selectedNotification && selectedNotification.id === notification.id
//                     ? 'bg-gray-700' // Highlight the clicked notification
//                     : ''
//                 }`}
//                 onClick={() => openModal(notification)}
//               >
//                 <div className="flex items-start gap-4">
//                   <button className="text-white bg-purple hover:text-gray-300 text-xl">
//                     <FaTimes />
//                   </button>
//                   <div className="ml-8">
//                     <span
//                       className={`text-sm font-semibold text-white px-5 py-1 rounded-t rounded-b bg-${notification.color}-500`}
//                     >
//                       {notification.type}
//                     </span>
//                     <h2 className={`text-lg font-medium mt-2 ${
//                       selectedNotification && selectedNotification.id === notification.id
//                         ? 'text-gray-300'
//                         : 'text-white'
//                     }`}>
//                       {notification.title}
//                     </h2>
//                     <p className="mt-4 text-sm">{notification.message}</p>
//                     <p className="font-semibold mt-2 text-orange">{notification.user}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center mt-9 text-purple">
//                   <FaClock className="mr-1 text-purple" />
//                   {notification.date}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedNotification && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//             <button onClick={closeModal} className="absolute top-4 right-4 text-xl text-red-500">
//               <FaTimes />
//             </button>
//             <h2 className="text-2xl font-semibold">{selectedNotification.title}</h2>
//             <p className="mt-4">{selectedNotification.message}</p>
//             <div className="mt-6 text-sm text-gray-600">
//               <span className="font-semibold">User:</span> {selectedNotification.user}
//               <br/>
//               <span className="font-semibold">Date:</span> {selectedNotification.date}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;
