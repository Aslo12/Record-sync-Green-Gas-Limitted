import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";

const UpdateFiletracking = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // This should be the MongoDB _id of the initiated file
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [user, setUser] = useState("");
  const [dept, setDept] = useState("");
  const [fileStatus, setFileStatus] = useState("");
  const [file, setFile] = useState(null);

  // Fetch user list
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/`);
      
      setUsers(res.data.user);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Fetch department list
  const fetchDepartments = async () => {
    try {
      const res = await axios.get("http://localhost:8080/dept");
      console.log(res);
      setDepartments(res.data);
    } catch (err) {
      console.error("Error fetching departments:", err);
    }
  };

  // Fetch single initiated file details by _id
  const fetchInitiatedFile = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/initiate/file/${id}`);
      const data = res.data.user;
      setUser(data.initiatedBy?._id || "");
      setDept(data.departmentId?._id || "");
      setFileStatus(data.fileStatus || "");
    } catch (err) {
      console.error("Error fetching initiated file:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("initiatedBy", user);
      formData.append("departmentId", dept);
      formData.append("fileStatus", fileStatus);
      if (file) {
        formData.append("file", file);
      }

      const res = await axios.put(
        `http://localhost:8080/initiate/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.message === "Success") {
        alert("Update Successful");
        navigate("/admin/filetracking");
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("An error occurred while updating.");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchDepartments();
    fetchInitiatedFile();
  }, []);

  return (
    <div className="container-fluid">
    <div className="row border-bottom bg-primary" style={{ height: "100px" }}>
      <div className="col">
        <Navbar />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-2 bg-primary">
        <Sidebar />
      </div>
      <div className="col-sm-10 p-4  text-muted">
      <div className="container mt-5 bg-light">
      <h2>Update File Tracking</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3 bg-light">
          <label className="form-label">Initiated By</label>
          <select
            className="form-select"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            {Array.isArray(users) && users.map((u) => (
              <option key={u._id} value={u._id}>
                {u.firstName} {u.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            className="form-select"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            {Array.isArray(departments) && departments.map((d) => (
              <option key={d._id} value={d._id}>
                {d.deptName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">File Status</label>
          <select
            className="form-select"
            value={fileStatus}
            onChange={(e) => setFileStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Forwarded">Forwarded</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload New File (Optional)</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update File Tracking
        </button>
      </form>
    </div>
      </div>
    </div>
  </div>
  );
};

export default UpdateFiletracking;
