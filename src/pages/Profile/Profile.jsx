import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import Navbar from "../../Components/Navbar/Navbar";
import { FaCameraRetro } from "react-icons/fa6";
import activity from "../../assets/Profile .png";
import { getProfile, updateProfile } from "../../api"; // ✅ Import API functions

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [uploadedImage, setUploadedImage] = useState(
    user?.profilePicture || null
  );
  const [activeTab, setActiveTab] = useState("Activity");
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Fetch profile from backend on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getProfile();
        setUser(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [setUser]);

  // ✅ Ensure form data starts with correct user values
  const [formData, setFormData] = useState({
    userName: user?.userName || "",
    bio: user?.bio || "",
    profilePicture: uploadedImage || null,
  });

  // ✅ Update form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Save Profile Changes
  const handleSaveChanges = async () => {
    try {
      const updatedUser = {
        ...user,
        userName: formData.userName || user.userName, // Ensure fallback
        bio: formData.bio || user.bio,
        profilePicture: uploadedImage,
      };

      // ✅ Send updated data to backend
      const response = await updateProfile(updatedUser);
      setUser(response);
      setIsEditing(false); // Hide modal
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // ✅ Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        setUploadedImage(image);
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePicture: image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <p className="text-center text-white">User not found</p>;
  }

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
                user?.userName?.charAt(0).toUpperCase() || "U"
              )}
            </div>

            {/* Camera Icon */}
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
              onChange={handleImageUpload}
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <h1 className="mt-4 text-3xl font-bold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
                {user.userName}
              </h1>
            </div>
            <textarea
              placeholder="Bio"
              value={formData.bio || "No bio yet"}
              className="bg-transparent border border-gray-400 rounded-md px-4 py-2 text-lg"
              readOnly
            />
          </div>

          <button
            className="bg-purple px-6 py-3 rounded-full"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-white">
            <div className="bg-darkpurple p-8 rounded-lg w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <div className="mb-4">
                <label className="block text-orange">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
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
                  onClick={() => setIsEditing(false)}
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
        <div className="mt-10 pt-6">
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
              <img
                src={activity}
                alt="No Activity"
                className="w-full h-full object-cover rounded-lg"
              />
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

export default Profile;
