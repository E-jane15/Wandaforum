import React, { createContext, useState, useEffect } from "react";
import { getProfile } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // This stores user info (including userId)
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getProfile();  // Fetch the user profile (including userId)
        console.log(userData)
        localStorage.setItem("userId", userData);
        setUser(userData); // Store user data in context (including userId)
      } catch (error) {
        console.error("User fetching failed:", error);
      }
    };

    fetchUser();
  }, []);

  // Function to add a new availability
  const addAvailability = (availability) => {
    setAvailabilities((prevAvailabilities) => [...prevAvailabilities, availability]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, availabilities, addAvailability }}>
      {children}
    </UserContext.Provider>
  );
};
