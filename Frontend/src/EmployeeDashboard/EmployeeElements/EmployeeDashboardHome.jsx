import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function EmployeeDashboardHome() {
  const [filesInitiated, setFilesInitiated] = useState(0);
  const [pendingFiles, setPendingFiles] = useState(0);
  const [notifications, setNotifications] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCounts = async () => {
    try {
      setLoading(true);

      const userId = localStorage.getItem('user');

      const initiatedFilesRes = await axios.get(`http://localhost:8080/initiate/${userId}`);
      setFilesInitiated(initiatedFilesRes.data.user.length);

      const pendingFilesRes = await axios.get(`http://localhost:8080/initiate/pending/${userId}`);
      console.log(pendingFilesRes)
      setPendingFiles(pendingFilesRes.data.user.length);

      const notificationsRes = await axios.get("http://localhost:8080/notification/");
      setNotifications(notificationsRes.data.user.length);

    } catch (err) {
      setError("Failed to load data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const chartData = [
    {
      name: "Files",
      Initiated: filesInitiated,
      Pending: pendingFiles,
    },
  ];

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container bg-light text-muted py-4">
      <h2 className="mb-4">Welcome Back!</h2>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Files Initiated</h5>
              <p className="fs-3">{filesInitiated}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Pending Files</h5>
              <p className="fs-3">{pendingFiles}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="fs-3">{notifications}</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mb-3">File Status Overview</h4>
      <div className="bg-white p-4 rounded shadow-sm">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="Initiated" fill="#28a745" radius={[5, 5, 0, 0]} />
      <Bar dataKey="Pending" fill="#dc3545" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EmployeeDashboardHome;
