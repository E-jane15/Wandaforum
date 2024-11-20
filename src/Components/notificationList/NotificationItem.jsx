import React from 'react';
import { FaTrash, FaStar, FaEnvelopeOpen } from 'react-icons/fa';
import './NotificationItem.css';

const NotificationItem = ({ text, time, type }) => {
  const backgroundClass = type === 'important' ? 'important' : 'normal';

  return (
    <div className={`notification-item ${backgroundClass}`}>
      <div className="notification-left">
        <FaEnvelopeOpen className="icon" />
        <p>{text}</p>
      </div>
      <div className="notification-right">
        <span>{time}</span>
        <FaStar className="icon-star" />
        <FaTrash className="icon-trash" />
      </div>
    </div>
  );
};

export default NotificationItem;
