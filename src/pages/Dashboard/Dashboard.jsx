import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaClipboardList,
  FaComments,
  FaBookmark,
  FaBars,
  FaTimes,
  FaAddressBook,
} from "react-icons/fa";

import { UserContext } from "../../Context/UserContext";
import { getProfile } from "../../api";


const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false); // Default collapsed
  const [isActive, setIsActive] = useState(false); // Active class state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getProfile();
        console.log("Dashboard User Data:", userProfile); // ✅ Debugging
        setUser(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [setUser]);

  return (
    <>
      <div className="flex min-h-screen bg-purple4 flex-col md:flex-row">
        {/* Navbar (Mobile) */}
        <header className="bg-purple4 shadow-md p-4 flex justify-between items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
            Dashboard
          </h2>
          {/* Profile Picture */}
          <div>
            {user ? (
              <div className="flex items-center">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center bg-purple text-white rounded-full">
                    {user?.userName?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-white">Guest</p>
            )}
          </div>
        </header>

        {/* Sidebar with Collapsible Button */}
        <aside
          className={`${
            sidebarExpanded ? "w-64" : "w-32"
          } bg-white/10 text-white fixed inset-y-0 left-0 z-50 transition-all duration-300 
          md:relative md:translate-x-0 backdrop-blur-md rounded-lg border border-white/30 mt-0 md:mt-6 md:ml-6
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } ${sidebarOpen && "mt-16"}`}
          style={{ minHeight: "100vh" }} // Ensures full height
        >
          <div className="p-6 flex flex-col h-full items-center">
            {/* Collapsible Sidebar Button */}
            <button
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className="mb-4 p-2  rounded-full hover:bg-purple6 transition "
            >
              {sidebarExpanded ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Align Profile & Dashboard Title Properly */}
            <div className="flex items-center justify-between">
              {/* Profile Picture */}
              {user ? (
                <div className="flex items-center">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-purple"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center bg-purple text-white rounded-full">
                      {user?.userName?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white">Guest</p>
              )}
              {/* Dashboard Title (Only Show When Expanded) */}
              {sidebarExpanded && (
                <h2 className="ml-4 text-2xl font-bold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
                  Dashboard
                </h2>
              )}
            </div>

            {/* Navigation Menu */}
            <nav className="mt-8">
              <ul>
                <Link to="/profilecard">
                  <li
                    className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                    title="Profile"
                  >
                    <FaUser />
                    {sidebarExpanded && <span>Profile</span>}
                  </li>
                </Link>
                <li
                  className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                  title="Upcoming Interviews"
                >
                  <FaClipboardList />
                  {sidebarExpanded && <span>Upcoming Interviews</span>}
                </li>
                <li
                  className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                  title="Upcoming Interviews"
                >
                  <FaAddressBook />
                  {sidebarExpanded && <span>Availability page</span>}
                </li>
                <li
                  className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                  title="Active Chats"
                >
                  <FaComments />
                  {sidebarExpanded && <span>Active Chats</span>}
                </li>
                <li
                  className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                  title="Saved Questions"
                >
                  <FaBookmark />
                  {sidebarExpanded && <span>Saved Questions</span>}
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-4 md:ml-20">
          {/* Welcome Section */}
          <div className="bg-white/10 text-white p-6 shadow-lg rounded-lg text-center mx-4 mt-2 md:mt-2 backdrop-blur-md border border-white/30">
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold">
              Welcome back, {user?.userName || "User"}!
            </h2>
            <p className="mt-2 text-sm md:text-base">
              What would you like to do today?
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-6 py-3 text-white text-lg font-semibold rounded-full transition-colors duration-300 ${
                isActive
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-orange hover:bg-red-600"
              }`}
            >
              {isActive ? "In Progress..." : "I'm available"}
            </button>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {["Mock Interviews", "Community", "Questions", "Statistics"].map(
              (title, index) => (
                <div
                  key={index}
                  className="bg-purple5 p-8 rounded-lg shadow-md  hover:bg-gradient-to-r from-purple to-orange transform hover:scale-105 transition duration-300 transition"
                >
                  <h3 className="text-xl font-bold text-orange">{title}</h3>
                  <p className="text-white">
                    {title === "Mock Interviews"
                      ? "Schedule or join an interview"
                      : title === "Community"
                      ? "See trending discussions"
                      : title === "Questions"
                      ? "Browse or review saved questions"
                      : "See your interview progress"}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Notifications Section */}
          <div className="bg-purple5 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-2xl font-bold text-orange">Recent Activity</h3>
            <ul className="mt-4 space-y-2">
              <li className="p-3 bg-gray-50 rounded-md shadow-sm">
                📢 You have feedback on your last mock interview.
              </li>
              <li className="p-3 bg-gray-50 rounded-md shadow-sm">
                📌 Your saved question has been upvoted!
              </li>
              <li className="p-3 bg-gray-50 rounded-md shadow-sm">
                ✅ Your scheduled interview is tomorrow at 10 AM.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
