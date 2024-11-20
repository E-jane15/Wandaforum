import React from 'react';
import NotificationItem from './NotificationItem';
import Filters from '../Filters/Filters';
import './NotificationList.css';

const NotificationList = () => {
  const notifications = [
    { id: 1, text: 'New customer registered!', time: 'Just now', type: 'important' },
    { id: 2, text: '20% discount offer!', time: '30 minutes ago', type: 'normal' },
    { id: 3, text: 'Reminder: Sales target!', time: '2 days ago', type: 'normal' },
  ];

  return (
    <div className="notification-list">
      <h2>List Notifications</h2>
      <Filters />
      <div className="notification-items">
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            text={item.text}
            time={item.time}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
