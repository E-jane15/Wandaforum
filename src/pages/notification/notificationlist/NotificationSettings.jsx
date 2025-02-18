import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUserCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PasswordSettings from '../../notification/notificationlist/PasswordSettings';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    badge: true,
    billingAlerts: { email: false, sms: false },
    newsletter: { email: false, sms: false },
    performanceSuggestions: { email: false, sms: false },
    specialOffers: { email: false, sms: false },
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const [key, method] = name.split('.');

    setNotifications((prev) => ({
      ...prev,
      [key]: method ? { ...prev[key], [method]: checked } : checked,
    }));
  };

  const handleSave = () => {
    console.log('Notification Settings Saved:', notifications);
    setSaved(true);
  };

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  const notificationItems = [
    { title: "Billing Alerts", name: "billingAlerts" },
    { title: "Newsletter", name: "newsletter" },
    { title: "Performance Suggestions", name: "performanceSuggestions" },
    { title: "Special Offers", name: "specialOffers" },
  ];

  return (
    <div className="flex flex-col w-3/4 p-6">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="badge"
          name="badge"
          checked={notifications.badge}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <label htmlFor="badge" className="ml-2">Notification Badge</label>
      </div>
      {notificationItems.map((item) => (
        <div key={item.name} className="mb-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`${item.name}.email`}
              name={`${item.name}.email`}
              checked={notifications[item.name].email}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor={`${item.name}.email`} className="ml-2">Email</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`${item.name}.sms`}
              name={`${item.name}.sms`}
              checked={notifications[item.name].sms}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor={`${item.name}.sms`} className="ml-2">SMS</label>
          </div>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Save Changes
      </button>
      {saved && (
        <div className="mt-4 text-green-400 flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Settings saved successfully!
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center p-6 bg-gray-900 text-white">
        <div className="flex flex-row w-full bg-purple-800 rounded-lg shadow-lg">
          {/* Sidebar */}
          <div className="flex flex-col w-1/4 bg-gray-700 p-4 rounded-l-lg">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex items-center mb-4 p-2 text-left rounded ${
                  isActive ? 'bg-purple-600' : 'hover:bg-purple-600'
                }`
              }
            >
              <FontAwesomeIcon icon={faUserCog} className="mr-2" /> Account Settings
            </NavLink>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center mb-4 p-2 text-left rounded ${
                  isActive ? 'bg-purple-600' : 'hover:bg-purple-600'
                }`
              }
            >
              <FontAwesomeIcon icon={faBell} className="mr-2" /> Notification Settings
            </NavLink>
            <NavLink
              to="/password"
              className={({ isActive }) =>
                `flex items-center mb-4 p-2 text-left rounded ${
                  isActive ? 'bg-purple-600' : 'hover:bg-purple-600'
                }`
              }
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Password
            </NavLink>
          </div>

          {/* Main Content */}
          <Routes>
            <Route path="/account" element={<AccountSettings />} />
            <Route path="/notifications" element={<NotificationSettings />} />
            <Route path="/password" element={<PasswordSettings />} />
            <Route path="/" element={<NotificationSettings />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;