import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DashboardHome() {
  const [report, setReports] = useState({
    pending: 0,
    processing: 0,
    completed: 0,
  });
  const [employee, setEmployee] = useState({});
  const [notifications, setNotifications] = useState(8); // Adjust dynamically if needed
  const [showModal, setShowModal] = useState(false);

  // Fetch overview data
  const fetchOverview = async () => {
    try {
      const resEmployee = await axios.get("http://localhost:8080/");
      setEmployee(resEmployee.data);

      const resReports = await axios.get("http://localhost:8080/initiate");
      const reportData = resReports.data.user;  // Assuming this contains an array of reports
      console.log(reportData);

      // Initialize counts for each status
      const reportCounts = {
        pending: 0,
        processing: 0,
        completed: 0,
      };

      // Count each status in the report data
      reportData.forEach((reportItem) => {
        if (reportItem.fileStatus === "Pending") {
          reportCounts.pending++;
        } else if (reportItem.fileStatus === "In Progress") {
          reportCounts.processing++;
        } else if (reportItem.fileStatus === "Completed") {
          reportCounts.completed++;
        }
      });

      // Set the counts in the state
      setReports(reportCounts);

    } catch (err) {
      console.error(err);
    }
  };





  useEffect(() => {
    fetchOverview();
  },[]);

  // Chart Data for reports
  const chartData = {
    labels: ["Pending", "In Progress", "Completed"], // Categories
    datasets: [
      {
        label: "File Status",
        data: [report.pending, report.processing, report.completed], // Dynamic data
        backgroundColor: ["#FF6397", "#FFD700", "#32CD32"],
        borderColor: ["#FF6347", "#FFD700", "#32CD32"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container bg-light text-muted p-4">
      <h2 className="mb-4">Admin Dashboard Overview</h2>

      <div className="row g-4">
        {/* Total Employees Card */}
        <div className="col-md-3">
          <div className="card text-dark bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Employees</h5>
              <p className="card-text fs-3">{employee.total}</p>
            </div>
          </div>
        </div>

        {/* Files Initiated Card */}
        <div className="col-md-3">
          <div className="card text-dark bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Files Initiated</h5>
              <p className="card-text fs-3">{report.pending + report.processing + report.completed}</p>
            </div>
          </div>
        </div>

        {/* Files Pending Card */}
        <div className="col-md-3">
          <div className="card text-dark bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Files Pending</h5>
              <p className="card-text fs-3">{report.pending}</p>
            </div>
          </div>
        </div>

        {/* Files Processing Card */}
        <div className="col-md-3">
          <div className="card text-dark bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Files Processing</h5>
              <p className="card-text fs-3">{report.processing}</p>
            </div>
          </div>
        </div>

        {/* Files Completed Card */}
        <div className="col-md-3">
          <div className="card text-dark bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Files Completed</h5>
              <p className="card-text fs-3">{report.completed}</p>
            </div>
          </div>
        </div>

        {/* Notifications Card with Tooltip */}
        <div className="col-md-3">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="notifications-tooltip">Total notifications</Tooltip>}
          >
            <div className="card text-dark bg-light shadow-sm" style={{ cursor: "pointer" }} >
              <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                <p className="card-text fs-3">{notifications}</p>
              </div>
            </div>
          </OverlayTrigger>
        </div>
      </div>

      {/* Bar Chart - File Status */}
      <div className="mt-4">
        <h5>File Status Report</h5>
        <Bar data={chartData} />
      </div>

      {/* Action Buttons */}
     
    
    </div>
  );
}

export default DashboardHome;
