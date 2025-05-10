import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Elements/Navbar';
import Footer from '../../Elements/Footer';

function RegistrationPage() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const [image, setImage] = useState(null);
    const [departments, setDepartments] = useState([]);

    const navigate = useNavigate();

    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const empRegistration = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters and include uppercase, number, and special character.");
            return;
        }

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("dob", dob);
        formData.append("gender", gender);
        formData.append("address", address);
        formData.append("departmentId", departmentId);
        formData.append("status", "b");
        if (image) formData.append("image", image);

        const response = await axios.post('http://localhost:8080/register', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (response.data.msg === "Success") {
            alert("Registration Successful");
            navigate(`/emplogin`);
        } else {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        axios.get('http://localhost:8080/dept')
            .then(res => setDepartments(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-5">
                                <h3 className="text-center text-primary mb-4">Employee Registration</h3>
                                <form onSubmit={empRegistration} encType="multipart/form-data">
                                    <div className="row">
                                        {/* Left Column */}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstname(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastname(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label>Department</label>
                                                <select className="form-control" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required>
                                                    <option value="">--Select Department--</option>
                                                    {departments.map((dept) => (
                                                        <option key={dept._id} value={dept._id}>{dept.deptName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Email</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label>Password</label>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label>Date of Birth</label>
                                                <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label>Gender</label>
                                                <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} required>
                                                    <option value="">--Select Gender--</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Address</label>
                                                <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} required></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label>Profile Image</label>
                                                <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary px-5">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RegistrationPage;
