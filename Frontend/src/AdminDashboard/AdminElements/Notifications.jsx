import React, { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employees: "",
    Notification: "",
    Status: "",
    IsRead: false,
  });
  const [editingId, setEditingId] = useState(null);

  const fetchNotifications = async () => {
    const res = await axios.get("http://localhost:8080/notification");
    setNotifications(res.data.user);
  };

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:8080/");
    setEmployees(res.data.user);
  };

  useEffect(() => {
    fetchNotifications();
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.employees || !form.Notification) {
      alert("Please fill in required fields.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/notification/${editingId}`, form);
      } else {
        await axios.post("http://localhost:8080/notification", form);
      }

      setForm({ employees: "", Notification: "", Status: "", IsRead: false });
      setEditingId(null);
      fetchNotifications();
    } catch (err) {
      console.error("Error saving notification", err);
    }
  };

  const handleEdit = (notif) => {
    setForm({
      employees: notif.employees,
      Notification: notif.Notification,
      Status: notif.Status,
      IsRead: notif.IsRead,
    });
    setEditingId(notif._id);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this notification?");
    if (!confirm) return;
    await axios.delete(`http://localhost:8080/notification/${id}`);
    fetchNotifications();
  };

  return (
    <div className="container bg-light text-muted p-4">
      <h2 className="mb-4">Manage Notifications</h2>

      {/* Notification Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label>Employee</label>
          <select
            className="form-control"
            name="employees"
            value={form.employees}
            onChange={handleChange}
            required
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp._id} value={emp._id}>
                {emp.firstName} {emp.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Notification</label>
          <input
            type="text"
            className="form-control"
            name="Notification"
            value={form.Notification}
            onChange={handleChange}
            required
          />
        </div>

     

      

        <button type="submit" className="btn btn-primary">
          {editingId ? "Update" : "Add"} Notification
        </button>
        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setForm({ employees: "", Notification: "", Status: "", IsRead: false });
              setEditingId(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Notifications List */}
      <h4>All Notifications</h4>
      <ul className="list-group">
        {notifications.map((notif) => (
          <li key={notif._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>To:</strong> {notif.employees?.firstName} {notif.employees?.lastName} <br />
              <strong>Note:</strong> {notif.Notification} <br />
              <strong>Status:</strong> {notif.Status || "N/A"} |{" "}
              <strong>Read:</strong> {notif.IsRead ? "Yes" : "No"} <br />
              <small><strong>Date:</strong> {new Date(notif.notificationDate).toLocaleString()}</small>
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(notif)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(notif._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
