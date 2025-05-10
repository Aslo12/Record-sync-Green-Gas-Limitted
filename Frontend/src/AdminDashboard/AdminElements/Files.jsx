import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Files() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filetracking, setFiletracking] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/initiate");
      setFiletracking(res.data.user);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/initiate/${id}`);
      fetchData();
    } catch (err) {
      console.error("Error deleting", err);
    }
  };

  const handleView = (file) => {
    setSelectedFile(file);
    const modal = new window.bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
  };

  return (
    <div className="container bg-light text-muted">
      <h2 className="mb-4">File Tracking</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>File Name</th>
            <th>Initiated By</th>
            <th>Status</th>
            <th>Current Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filetracking?.map((initiatefile, index) => (
            <tr key={initiatefile._id}>
              <td>{`S.No.-${index + 1}`}</td>
              <td>{initiatefile.file}</td>
              <td className="text-center">
                {`${initiatefile.initiatedBy?.firstName} ${initiatefile.initiatedBy?.lastName}`}
              </td>
              <td>{initiatefile.fileStatus}</td>
              <td align="center">{initiatefile.departmentId?.deptName}</td>
              <td>
                <input
                  type="button"
                  value="Edit"
                  className="btn btn-primary me-1"
                  onClick={() =>
                    navigate(`/admin/updatefiletracking/${initiatefile._id}`)
                  }
                />
                <input
                  type="button"
                  value="View"
                  className="btn btn-info me-1"
                  onClick={() => handleView(initiatefile)}
                />
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-danger"
                  onClick={() => handleDelete(initiatefile._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type="button"
        value="Add New File"
        className="btn btn-success"
        onClick={() => navigate(`/admin/initiatefile`)}
      />

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
                  {selectedFile.file && (
                    <a
                      href={`http://localhost:8080/uploads/${selectedFile.file}`}
                      download target="_blank"
                      className="btn btn-outline-success"
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

export default Files;
