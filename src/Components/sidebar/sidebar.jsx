import React from 'react';
import { FaHome, FaChartBar, FaBox, FaMoneyBill, FaEnvelope, FaCog, FaMoon } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">SalesSync</h2>
      <ul className="sidebar-menu">
        <li><FaHome /> Overview</li>
        <li><FaChartBar /> Analytics</li>
        <li><FaBox /> Product</li>
        <li><FaMoneyBill /> Sales</li>
        <h4>Transaction</h4>
        <li>Payment</li>
        <li>Refunds</li>
        <li>Invoice</li>
        <li>Returns</li>
        <h4>General</h4>
        <li className="active"><FaEnvelope /> Notifications</li>
        <li><FaCog /> Settings</li>
        <li><FaMoon /> Dark Mode</li>
      </ul>
    </div>
  );
};

export default Sidebar;
