import axios from "axios";

// Base URL for the backend
const API_BASE_URL = "http://localhost:3000"; // Change if needed

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Signup API
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Signup failed";
  }
};
export const logoutUser = async () => {
  try {
    await api.post("/users/logout"); // Call logout API
  } catch (error) {
    console.error("Logout failed:", error);
  }

  // Remove token from localStorage (since we are not using cookies)
  localStorage.removeItem("token");
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/users/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error.response?.data || "Failed to fetch profile";
  }
};
// ✅ Update user profile (Fixes your error)
export const updateProfile = async (updatedUserData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put("/users/profile", updatedUserData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error.response?.data || "Failed to update profile";
  }
};
// ✅ Login API
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);
    localStorage.setItem("token", response.data.access_token); // ✅ Store token
    return response.data;
  } catch (error) {
    throw error.response?.data || "Invalid login credentials";
  }
};
