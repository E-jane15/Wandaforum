import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage initially
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });


  // Load user from localStorage on app load
  useEffect(() => {
    // Update localStorage whenever the user changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Logout function
  const logout = () => {
    
    setUser(null); // Reset user in context
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
