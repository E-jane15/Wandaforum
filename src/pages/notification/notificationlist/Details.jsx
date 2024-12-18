import React from "react";
import { FaTimes, FaClock } from "react-icons/fa";

const Details = () => {
  const NotificationDetails = [
    {
      id: 1,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "blue",
    },
    {
      id: 2,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 3,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 4,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate, offering a paradigm shift from traditional computing models",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 5,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 6,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 7,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
    {
      id: 8,
      type: "Message",
      title: "Ayamba sent you a new message",
      message:
        "Cloud computing has revolutionized the way businesses and individuals operate",
      user: "Ayamba",
      date: "24 Nov 2018 at 9:30 AM",
      color: "green",
    },
   
    
  ];

  return (

    <div  className="font=poppins">
    <div className="min-h-screen bg-darkpurple text-white flex justify-center items-start py-10">
      <div className="w-full bg-purple-800 rounded-lg shadow-lg p-6">
        <h1 className="text-sm text-white ml-8">NOTIFICATIONS</h1>
        <div className="space-y-6">
          {NotificationDetails.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start justify-between border-b border-purple pb-4 last:border-b-0"
            >  
{/*==================================Left Section: Close Icon + Notification Content =============================*/}
              <div className="flex items-start gap-4">
                {/* Close Icon */}
                <button className="text-white  bg-purple ml-8 mt-8 hover:text-gray-300 text-xl">
                  <FaTimes />
                </button>
                
                {/* Notification Content */}
                <div>
                  <div className="flex items-center gap-2 mt-8 mr-5">
                    
                  </div>

       {/*======================everything from content ================ */}
                  <div  className="ml-8">
                  <span
                      className={`text-sm font-semibold text-white px-5 py-1 rounded-t rounded-b bg-${notification.color}-500`}
                     >
                      {notification.type}
                    </span>
                  <h2 className="text-lg font-medium mt-2 text-red">{notification.title}</h2>
                  <p className="mt-4 text-sm">{notification.message}</p>
                  <p className="text-yellow-390 font-semibold mt-2 text-orange">{notification.user}</p>
                  </div>
                 {/*========================everything from content =========================== */}
                </div>
              </div>
              {/* Right Section: Date and Time*/}
              <div className="flex items-center mt-9 text-purple">
                <FaClock className="mr-1  text-purple mr-5"/>
                {notification.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;
