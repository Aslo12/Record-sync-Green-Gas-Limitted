import React, { useState, useEffect } from "react";
import axios from "axios";

function MyNotifications() {
  const [notifications, setNotifications] = useState([]);
  const empId = localStorage.getItem("user"); // Get user ID from localStorage

  // Fetch notifications for the logged-in user
  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/notification/user/${empId}`);
      setNotifications(res.data.user || []);
    } catch (err) {
      console.error("Error fetching notifications", err);
    }
  };

  useEffect(() => {
    if (empId) {
      fetchNotifications();
    } else {
      console.error("No employee ID found in localStorage.");
    }
  }, [empId]);

  return (
    <div className="container bg-light text-muted">
      <h2 className="mb-4">My Notifications</h2>
      {notifications.length > 0 ? (
        <div className="list-group">
          {notifications.map((notification) => (
            <div className="list-group-item list-group-item-action" key={notification._id}>
              <p>{notification.Notification}</p>
              <small>{new Date(notification.notificationDate).toLocaleString()}</small>
            </div>
          ))}
        </div>
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
}

export default MyNotifications;
