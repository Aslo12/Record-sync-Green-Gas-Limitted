import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyFiles() {
  const navigate = useNavigate();
  const [myFiles, setMyFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track if we're in edit mode
  const [newStatus, setNewStatus] = useState(""); // Track new status input

  // Fetch the files assigned to the current user
  const fetchAssignedFiles = async () => {
    try {
      const empId = localStorage.getItem("user");  // Assuming user ID is stored in localStorage
      if (!empId) {
        console.error("No employee ID found. Please log in.");
        return;
      }
      const res = await axios.get(`http://localhost:8080/initiate/${empId}`);
      setMyFiles(res.data.user || []);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchAssignedFiles();
  }, []);

  // Handle status change in the modal
  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  // Save updated file status to the backend
  const handleSaveStatus = async () => {
    if (newStatus !== selectedFile.fileStatus) {
      try {
        await axios.put(`http://localhost:8080/initiate/${selectedFile._id}`, {
          fileStatus: newStatus,
        });
        fetchAssignedFiles();
        setIsEditing(false); // Exit edit mode
        
      } catch (err) {
        console.error("Error updating status", err);
      }
    } else {
      alert("No changes made to the status.");
      setIsEditing(false); // Exit edit mode if no changes
    }
  };

  // Toggle edit mode for file status
  const handleEdit = (file) => {
    setSelectedFile(file);
    setNewStatus(file.fileStatus); // Set the current status in the modal input
    setIsEditing(true); // Enable edit mode
    const modal = new window.bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
  };

  const handleView = (file) => {
    setSelectedFile(file);
    setNewStatus(file.fileStatus); // Set the current status in the modal input
    const modal = new window.bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
  };

  return (
    <div className="container bg-light text-muted py-4">
      <h2 className="mb-4 text-success">My Assigned Files</h2>

      <table className="table table-hover">
        <thead className="table-success">
          <tr>
            <th>S.No</th>
            <th>File Name</th>
            <th>Initiated By</th>
            <th>Status</th>
            <th>Current Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myFiles.map((file, index) => (
            <tr key={file._id}>
              <td>{index + 1}</td>
              <td>{file.file}</td>
              <td className="text-center">
                {`${file.initiatedBy?.firstName} ${file.initiatedBy?.lastName}`}
              </td>
              <td>{file.fileStatus}</td>
              <td align="center">{file.departmentId?.deptName}</td>
              <td>
                
                <input
                  type="button"
                  value="Edit Status"
                  className="btn btn-primary"
                  onClick={() => handleEdit(file)} // Opens modal for editing status
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {/* View Modal */}
      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-labelledby="viewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">
                File Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedFile && (
                <>
                  <p><strong>File Name:</strong> {selectedFile.file}</p>
                  <p>
                    <strong>Initiated By:</strong>{" "}
                    {selectedFile.initiatedBy?.firstName}{" "}
                    {selectedFile.initiatedBy?.lastName}
                  </p>
                  <p>
                    <strong>Department:</strong>{" "}
                    {selectedFile.departmentId?.deptName}
                  </p>
                  <p><strong>Status:</strong> {selectedFile.fileStatus}</p>
                  
                  {/* Show the status change form when editing */}
                  {isEditing ? (
                    <div>
                      <label htmlFor="newStatus"><strong>Change Status:</strong></label>
                      <select
                        id="newStatus"
                        value={newStatus}
                        onChange={handleStatusChange}
                        className="form-select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={handleSaveStatus}
                      >
                        Save Status
                      </button>
                    </div>
                  ) : (
                    <p><strong>Status:</strong> {selectedFile.fileStatus}</p>
                  )}

                  {selectedFile.file && (
                    <a
                      href={`http://localhost:8080/uploads/${selectedFile.file}`}
                      download
                      target="_blank"
                      className="btn btn-outline-success mt-3"
                    >
                      Download File
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFiles;
