import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Employees() {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  const fetchEmployee = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      setEmployee(res.data.user);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/${id}`);
      fetchEmployee();
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  return (
    <div className="container bg-light text-muted">
      <h2 className="mb-4">Manage Employees</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee? employee.map((emp, index) => (
            <tr key={emp._id}>
              <td>{index + 1}</td>
              <td>{`${emp.firstName} ${emp.lastName}`}</td>
              <td>{emp.departmentId?.deptName}</td>
              <td>{emp.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/admin/updateEmployee/${emp._id}`)}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(emp._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )) :"Data Not Found"
        }
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
