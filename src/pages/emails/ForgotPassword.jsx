import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);    // For password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password visibility toggle

  // Handle the email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Validate the email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Handle sending reset password email
  const handlePasswordReset = () => {
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    // Simulate sending a reset link email (mock API call)


    setTimeout(() => {
      localStorage.setItem("userEmailForReset", email); // Store email in localStorage for demo
      setIsLoading(false);
      setMessage(`A password reset link has been sent to ${email}.`);

      // Show password change form after email is sent
      setShowPasswordForm(true);
    }, 2000);
  };

  // Handle password change form submission
  const handlePasswordChange = () => {
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Simulate updating the password (in a real app, this would be an API call)
    setTimeout(() => {
      setPasswordError("");
      setMessage("Your password has been successfully changed.");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordForm(false); // Close the modal
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-900 text-white">
      <h1 className="text-4xl font-bold text-yellow-300">FORGOT YOUR PASSWORD?</h1>

      <div className="mt-6 w-full max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-purple">
          Forgot Password Authentication
        </h2>
        <p className="mt-4 text-center">
          We recently received a request for a forgotten password. To change your password, please enter your email:
        </p>

        {/* Email Input */}
        <div className="mt-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
            aria-label="Email address"
          />
        </div>

        {/* Button for resetting the password */}
        <button
          onClick={handlePasswordReset}
          className="flex-col border-2 border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out mt-4"
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>

        {/* Display email message */}
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}

        {/* If password change form should be shown */}
        {showPasswordForm && (
          <div className="mt-6 w-full max-w-md p-6 bg-gray-200 text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-purple">
              Reset Your Password
            </h2>

            {/* New Password */}
            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                aria-label="New password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-4 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border-2 border-orange-300 rounded-md"
                aria-label="Confirm new password"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>

            {/* Password Error */}
            {passwordError && (
              <p className="mt-2 text-center text-red-500">{passwordError}</p>
            )}

            {/* Submit button for password change */}
            <button
              onClick={handlePasswordChange}
              className="flex-col border-2 border-purple text-yellow-500 font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out mt-4"
            >
              Change Password
            </button>
          </div>
        )}

        <p className="mt-4 text-center text-gray-600">
          If you did not request this change, you do not need to do anything.
        </p>

        <footer className="mt-6 text-center text-green-900">
          Wandaforum <br />
          © 2025 All Rights Reserved. <br />
        </footer>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
