import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeNavbar from './EmployeeNavbar';
import EmployeeSidebar from './EmployeeSidebar';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmpProfile() {
  const [dept, setDept] = useState('');
  const [department, setDepartments] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
//   const { id: userId } = useParams();
const userId = localStorage.getItem("user");

  // Fetch employee info
  const fetchEmployeeData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/${userId}`);
      const employee = res.data.user;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmail(employee.email);
      setDept(employee.departmentId?._id || employee.departmentId);
      setDob(employee.dob ? employee.dob.split('T')[0] : '');
      setGender(employee.gender || '');
      setAddress(employee.address || '');
      setStatus(employee.status || '');
    } catch (err) {
      console.error("Error fetching employee data:", err);
    }
  };

  // Fetch department list
  const fetchDepartments = async () => {
    try {
      const res = await axios.get('http://localhost:8080/dept');
      setDepartments(res.data);
    } catch (err) {
      console.error("Error fetching departments:", err);
    }
  };

  // Submit update
  const updateSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("departmentId", dept);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("address", address);
      formData.append("status", status);
      if (image) formData.append("image", image);

      await axios.put(`http://localhost:8080/${userId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert("Profile updated successfully!");
      navigate('/employee/profile');
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Update failed!");
    }
  };

  useEffect(() => {
    fetchEmployeeData();
    fetchDepartments();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row border border-bottom-1 bg-primary" style={{ height: "100px" }}>
        <div className="col">
          <EmployeeNavbar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2 bg-primary">
          <EmployeeSidebar />
        </div>
        <div className="col-sm-10 p-4">
          <form onSubmit={updateSubmit} className="mx-auto my-5 w-50 opacity-lg" encType="multipart/form-data">
            <h2>Update Profile</h2>

            <label className="form-label">First Name</label>
            <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />

            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />

            <label className="form-label">Gender</label>
            <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">--Select Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="form-label">Address</label>
            <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>

            <label className="form-label">Department</label>
            <select className="form-control" value={dept} onChange={(e) => setDept(e.target.value)}>
              <option value="">--Select Department--</option>
              {department?.map((d) => (
                <option key={d._id} value={d._id}>{d.deptName}</option>
              ))}
            </select>

            <label className="form-label">Upload New Image (optional)</label>
            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />

            <br />
            <input type="submit" value="Update" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmpProfile;
