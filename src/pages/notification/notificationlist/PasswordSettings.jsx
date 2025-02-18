import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordSettings = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const savedPassword = localStorage.getItem('userPassword');
    if (savedPassword) {
      setCurrentPassword(savedPassword);  // Set current password to saved password
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setIsPhoneValid(/^\d{10}$/.test(e.target.value)); // Validate phone number (10 digits)
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    if (isEmailValid && newPassword.trim() && isPhoneValid) {
      localStorage.setItem('userPassword', newPassword);
      console.log('Password updated successfully!');
      console.log('Password recovery link sent to:', email);
      console.log('Security code sent to phone:', phone);
    } else {
      alert('Please enter a valid email address, phone number, and new password.');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Password Settings</h2>
      <div className="flex flex-row w-full max-w-4xl bg-purple-800 rounded-lg shadow-lg">
        <div className="flex flex-col w-1/4 bg-gray-700 p-4 rounded-l-lg">
          <button className="flex items-center mb-4 p-2 text-left rounded hover:bg-purple-600">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Account Settings
          </button>
          <button className="flex items-center mb-4 p-2 text-left rounded hover:bg-purple-600">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Notification Settings
          </button>
          <button className="flex items-center mb-4 p-2 text-left rounded bg-green-600">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Password Settings
          </button>
        </div>
        <div className="flex flex-col w-3/4 p-6">
          <div className="mb-4 relative">
            <label className="mb-2 text-black block">Current Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                className="p-2 bg-white rounded w-full pr-10"
                placeholder="Enter your current password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-black-400 hover:text-yellow"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2 block">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              className="p-2 bg-purple-700 rounded w-full"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Email for Recovery</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={`p-2 bg-gray-700 rounded w-full ${isEmailValid ? '' : 'border-red-500'}`}
              placeholder="Enter your email"
            />
            {!isEmailValid && <p className="text-red-500 text-sm">Please enter a valid email address.</p>}
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Phone Number for Recovery</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className={`p-2 bg-white rounded w-full ${isPhoneValid ? '' : 'border-red-500'}`}
              placeholder="Enter your phone number"
            />
            {!isPhoneValid && <p className="text-red-500 text-sm">Please enter a valid phone number (10 digits).</p>}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-600 p-2 rounded hover:bg-green-500"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;
