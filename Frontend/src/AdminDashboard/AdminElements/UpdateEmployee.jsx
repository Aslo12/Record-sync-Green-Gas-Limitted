import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});
  const [department, setDepartment] = useState([]);
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  // Fetch employee by ID
  const fetchEmployeeById = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/${id}`);
      const emp = res.data;
      console.log(res)
      setEmployee(emp);
      setEmail(emp.user.email || '');
      setDepartmentId(emp.user.departmentId?._id || '');
    } catch (err) {
      console.error('Error fetching employee:', err);
    }
  };

  // Fetch department list
  const fetchDepartments = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/dept`);
      setDepartment(res.data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  useEffect(() => {
    fetchEmployeeById();
    fetchDepartments();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        departmentId
      };
      const res = await axios.put(`http://localhost:8080/${id}`, data);
      console.log(res);
      if (res.data.msg == "Profile updated successfully") {
        alert("Employee updated successfully!");
        navigate('/admin/employee');
      } else {
        alert("Update failed: " + res.data.message);
      }
    } catch (err) {
      console.error("Update error", err);
      alert("Server error while updating.");
    }
  };

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
        <div className="col-sm-10 p-4 bg-light text-muted">
          <h2 className="mb-4">Update Employee</h2>
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <select
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">---Select Department---</option>
                    {department.map((d) => (
                      <option key={d._id} value={d._id}>
                        {d.deptName}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
