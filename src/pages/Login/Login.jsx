import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import bg_signup from "../../assets/bg-signup.png";
import google from "../../assets/google.png";
import Facebook_logo from "../../assets/Facebook-logo.png";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useContext(UserContext); // Access setUser from UserContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // For redirection

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the single user from local storage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No registered user found. Please sign up first.");
      return;
    }

    // Check if the email and password match
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      // Set user in context
      setUser(savedUser);

      // Redirect to the homepage
      navigate("/");
    } else {
      alert("User not fount or incorrect email.Please register");
    }
  };
  return (
    <>
      <div
        className="bg-cover min-h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_signup}) ` }}
      >
        <Navbar />
        <div className="min-h-screen b flex items-center justify-center px-4  mt-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row ">
            {/* Left Section */}
            <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
              <h1 className="font-bold text-5xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
                Welcome to <span className="text-purple-400">WandaForum</span>
              </h1>
              <p className="text-white text-2xl">
                Get ready to rock your cloud or <br /> DevOps interview with our
                platform.
                <br /> You'll get to:
              </p>
              <ul className="text-orange space-y-4">
                <li className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Share resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Use peermocks to improve</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Post your worries and receive answers</span>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[40%] bg-darkpurple p-6 rounded-2xl shadow-2xl  md:mt-0 ">
              <h2 className="text-5xl font-bold  text-center bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">
                SignIn to your Account
              </h2>
              <p className="text-white text-sm mb-6 text-center">
                Login to your account
              </p>

              {/* Form */}
              <form className="space-y-6 " onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-orange text-sm mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full   bg-darkpurple  border border-gray-500 text-gray-300 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple2 placeholder:text-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-orange text-sm mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full   bg-darkpurple  border border-gray-500 text-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple2 placeholder:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-white focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.174.595-.368 1.167-.582 1.712M15.364 15.364A9.931 9.931 0 0112 17c-2.21 0-4.278-.716-5.951-1.928m7.707-7.707a3.993 3.993 0 00-1.413-1.413"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.293-2.502m6.62-6.62A3.993 3.993 0 0112 5c2.21 0 4.278.716 5.951 1.928m-7.707 7.707a3 3 0 004.243 0m-4.243 0a3 3 0 000-4.243m0 0a3 3 0 014.243 0m-4.243 0l4.243 4.243"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple text-white rounded-full py-4 hover:bg-purple-700 transition"
                >
                  Sign Up
                </button>
                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="accept"
                    className="w-4 h-4 text-purple-400 bg-gray-700 border-none rounded focus:ring-purple-400"
                  />
                  <label htmlFor="accept" className="ml-2 text-white text-sm">
                    I accept the Wandaprep
                  </label>
                </div>

                {/* Signup Button */}
              </form>

              {/* Divider */}
              <div className="flex flex-col items-center justify-center my-4 mt-8">
                <div className="h-px w-1/3 bg-gray-700 items-center"></div>
                <div className="mx-4 text-white text-sm">Or Sign In with</div>
              </div>
              {/* Social Login */}
              <div className="flex justify-center space-x-4">
                <button className="flex items-center border border-gray-500 bg-darkpurple px-4 py-2 rounded-full  transition">
                  <img src={google} alt="Google" className="w-9 h-8" />
                </button>
                <button className="flex items-center  border border-gray-500 bg-darkpurple px-4 py-2 rounded-full  transition">
                  <img
                    src={Facebook_logo}
                    alt="facebook logo"
                    className="w-12 h-8"
                  />
                </button>
              </div>

              {/* Already Have an Account */}
              <p className="text-white text-sm mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/SignUp" className="text-orange hover:underline">
                  {" "}
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
