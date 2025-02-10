import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/wandaforum_icon.svg";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { getProfile, logoutUser } from "../../api"; // ✅ Import API function
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Icons for responsive menu

const Navbar = () => {
  const { user, setUser, logout } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Mobile menu state

  // ✅ Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fetch user profile when the component mounts
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
   const handleLogout = async () => {
     await logoutUser(); // Call logout API
     setUser(null); // Remove user from context
     localStorage.removeItem("token"); // Remove token
     navigate("/login"); // Redirect user to login page
   };

  return (
    <nav
      className={`text-white w-full sticky top-0 z-[100] transition-colors duration-300 ${
        isScrolled ? "bg-darkpurple shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* ✅ Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-orange font-medium"
                : "text-lg hover:text-orange font-medium"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-orange font-medium"
                : "text-lg hover:text-orange font-medium"
            }
          >
            Community
          </NavLink>

          <NavLink
            to="/questionpage"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-orange font-medium"
                : "text-lg hover:text-orange font-medium"
            }
          >
            Questions
          </NavLink>

          <NavLink
            to="/peermock"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-orange font-medium"
                : "text-lg hover:text-orange font-medium"
            }
          >
            Peermocks
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-orange font-medium"
                : "text-lg hover:text-orange font-medium"
            }
          >
            Pricing
          </NavLink>
        </div>

        {/* ✅ Profile Picture or Signup Button - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4 relative group">
              <Link to="/Dashboard">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center bg-purple text-white rounded-full text-xl font-bold">
                    {user.userName?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white text-black font-bold rounded-lg shadow-lg top-8 mt-2 w-48 z-[9999]">
                <ul className="py-2">
                  <Link to="/profile">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <Link to="/refer">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Refer Us to Friends
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-orange text-white py-2 px-4 rounded-full ml-4"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/SignUp">
              <button className="bg-purple py-3 px-7 rounded-full">
                Signup
              </button>
            </NavLink>
          )}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu - Shows when open */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple3 m-4 rounded-3xl shadow-lg p-4 flex flex-col space-y-4">
          <NavLink to="/Home" className="text-lg text-white hover:text-orange">
            Home
          </NavLink>
          <NavLink
            to="/community"
            className="text-lg text-white hover:text-orange"
          >
            Community
          </NavLink>
          <NavLink
            to="/questionpage"
            className="text-lg text-white hover:text-orange"
          >
            Questions
          </NavLink>
          <NavLink
            to="/peermock"
            className="text-lg text-white hover:text-orange"
          >
            Peermocks
          </NavLink>
          <NavLink
            to="/pricing"
            className="text-lg text-white hover:text-orange"
          >
            Pricing
          </NavLink>

          {/* ✅ Profile Section - Mobile */}
          {user ? (
            <div className="flex flex-col items-center space-y-3">
              <Link to="/Dashboard">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-14 h-14 rounded-full"
                  />
                ) : (
                  <div className="w-14 h-14 flex items-center justify-center bg-purple text-white rounded-full text-xl font-bold">
                    {user.userName?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </Link>

              <button
                onClick={handleLogout}
                className="bg-orange text-white py-2 px-4 rounded-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/SignUp">
              <button className="w-full bg-purple py-3 rounded-full">
                Signup
              </button>
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
