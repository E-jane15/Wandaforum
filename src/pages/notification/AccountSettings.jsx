import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Navbar from "../../Components/Navbar/Navbar";
import { FaCameraRetro } from "react-icons/fa6";
import activity from "../../assets/Profile .png";


const AccountSettings  = () => {
  const { user, setUser } = useContext(UserContext);
  const [uploadedImage, setUploadedImage] = useState(
    user.profilePicture || null
  );
  const [activeTab, setActiveTab] = useState("Activity");
  const [isEditing, setIsEditing] = useState(false); // State to control the modal
  const [formData, setFormData] = useState({
    username:user.name,
    bio: "",
    profilePicture: null,
  });
  const handleEditClick = () => {
    setIsEditing(true); // Show the edit modal
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    // Update UserContext with new data
   const updatedUser = {
     ...user,
     name: formData.username || user.name, // Fallback to current name if empty
     bio: formData.bio || user.bio, // Fallback to current bio if empty
   };
    // Update the UserContext
    setUser(updatedUser);

    // Save the updated user to localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setIsEditing(false); // Hide the edit modal
  };

  const handleCancel = () => {
    setIsEditing(false);
    formData.bio = null; // Hide the edit modal without saving
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        setUploadedImage(image);
        setUser((prevUser) => ({ ...prevUser, profilePicture: image }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <p className="text-center text-white">User not found</p>;
  }

  const { name, bio } = user;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-darkpurple text-white px-10 md:px-20 py-10 mt-12">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-28 h-28 bg-purple flex items-center justify-center text-3xl font-bold rounded-full overflow-hidden">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                name[0].toUpperCase()
              )}
            </div>

            {/* Camera Icon */}
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-purple3 rounded-full p-2 cursor-pointer"
            >
              <FaCameraRetro onChange={handleImageUpload} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <h1 className="mt-4 text-3xl font-bold  bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
              {user.name}
              </h1>
            </div>
            <textarea
              placeholder="Bio"
              value={formData.bio || "Bio"}
              className="bg-transparent border border-gray-400 rounded-md px-4 py-2 text-lg"
              readOnly
            />
          </div>

          <button
            className="bg-purple px-6 py-3 rounded-full"
            onClick={handleEditClick}
          >
            Edit Profile
          </button>
        </div>
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-white">
            <div className="bg-darkpurple p-8 rounded-lg w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <div className="mb-4">
                <label className="block text-orange">User Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username }
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 bg-darkpurple p-2 rounded-3xl"
                />
              </div>

              <div className="mb-4">
                <label className="block text-orange">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 bg-darkpurple p-2 rounded"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs Section */}
        <div className="mt-10  pt-6">
          <div className="flex space-x-10 text-lg">
            <button
              className={`${
                activeTab === "Activity"
                  ? "text-orange border-b-4 border-orange"
                  : "hover:text-orange"
              } px-2 py-1`}
              onClick={() => setActiveTab("Activity")}
            >
              Activity
            </button>

            {/* Saved Tab */}
            <button
              className={`${
                activeTab === "Saved"
                  ? "text-orange border-b-4 border-orange"
                  : "hover:text-orange"
              } px-2 py-1`}
              onClick={() => setActiveTab("Saved")}
            >
              Saved
            </button>

            {/* Settings Tab */}
            <button
              className={`${
                activeTab === "Settings"
                  ? "text-orange border-b-4 border-orange"
                  : "hover:text-orange"
              } px-2 py-1`}
              onClick={() => setActiveTab("Settings")}
            >
              Settings
            </button>
          </div>
          <div className="border border-gray-600"></div>

          {/* Activity Content */}
          <div className="mt-12 text-center">
            <div className="relative w-60 h-60 mx-auto">
              {/* Image with increased size */}
              <img
                src={activity} // Your activity image path
                alt="No Activity"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Text on top of the image */}
              <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-orange rounded-lg">
                No activity yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
