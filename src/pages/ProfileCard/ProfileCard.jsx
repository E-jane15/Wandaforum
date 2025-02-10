import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaClipboardList,
  FaComments,
  FaBookmark,
  FaBars,
  FaTimes,
  FaAddressBook,
  FaCameraRetro,
} from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { UserContext } from "../../Context/UserContext";
import bottom_icon from "../../assets/bottom_icon.png";
import bottom_vector from "../../assets/bottom_vector.png";


const ProfileCard = () => {
  const { user } = useContext(UserContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false); // Default collapsed
  const [isActive, setIsActive] = useState(false); // Active class state
 const [uploadedImage, setUploadedImage] = useState(
   user?.profilePicture || null
 );

 if (!user) {
   return <p className="text-center text-white">User not found</p>;
 }

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
                    {user.name ? user.name[0].toUpperCase() : "U"}
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
                      {user.name ? user.name[0].toUpperCase() : "U"}
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
                <li
                  className="mb-4 flex items-center space-x-2 hover:bg-purple4 p-2 rounded-md cursor-pointer"
                  title="Profile"
                >
                  <FaUser />
                  {sidebarExpanded && <span>Profile</span>}
                </li>

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
              Account Settings
            </h2>
          </div>

          <div className="bg-white/10 rounded-lg p-6 shadow-lg text-white w-full md:max-w-lg border border-white/30 mt-12 ml-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple">
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="bg-purple text-white w-full h-full flex items-center justify-center text-2xl">
                      {user.name[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-purple3 rounded-full p-2 cursor-pointer"
                >
                  <FaCameraRetro />
                </label>
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setUploadedImage(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-purple px-4 py-3 rounded-full">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
