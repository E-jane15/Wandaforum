import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/wandaforum_icon.svg";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  const { user, logout } = useContext(UserContext); // Access user and logout from context
  // return (
  //     <nav className='text-white w-full'>
  //           <div className=' flex items-center justify-center md:justify-between px-20 my-6 sticky top-0'>
  //           <img src={logo} alt=""/>
  //           <NavLink to="/" className={({isActive})=>
  //           isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
  //           Home</NavLink>
  //           <NavLink to="/community" className={({isActive})=>
  //           isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium'}>
  //           Community</NavLink>
  //           <NavLink to="/peermock" className={({isActive})=>
  //           isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
  //           Peermocks</NavLink>
  //           <NavLink to="/pricing" className={({isActive})=>
  //           isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
  //           Pricing</NavLink>
  //           <button className='bg-purple py-3 px-7 rounded-full'>Signup</button>
  //           </div>
          
  //     </nav>
  // )

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Navbar is scrolled
      } else {
        setIsScrolled(false); // Navbar is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <nav
      className={`text-white w-full  sticky top-0 z-[100]  transition-colors duration-300 ${
        isScrolled ? "bg-darkpurple shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-center md:justify-between px-20 py-6 ">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Navigation Links */}

        <NavLink
          to="/"
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

        {/* Profile Picture or Signup Button */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4 relative group">
              {/* Profile Picture */}
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-purple text-white rounded-full">
                  {user.name ? user.name[0].toUpperCase() : "U"}
                </div>
              )}
      <div className="absolute hidden group-hover:block bg-white text-black font-bold rounded-lg shadow-lg top-8  mt-2 w-48 z-[9999]  ">
                <ul className="py-2">
                  <Link to="/profile">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/profile">Profile</a>
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/settings">Settings</a>
                  </li>
                  <Link to="/refer">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/refer">Refer Us to Friends</a>
                    </li>
                  </Link>

                  <Link to="/notification">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/notification">Notifications</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/contact">Contact Us</a>
                    </li>
                  </Link>
                </ul>
              </div>

              <button
                onClick={logout}
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

              {/* <Link to="/settings"></Link> */}
           
            {/* <FaBars onClick={() => window.location.href='/settings'} style={{ cursor: 'pointer' }} /> */}

            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
