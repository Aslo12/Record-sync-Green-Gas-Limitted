import React, { useEffect } from 'react'
import { useState } from "react"
import axios from "axios"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useParams, useNavigate } from 'react-router-dom'

function InitiateForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUser] = useState('');
    const [dept, setDept] = useState('');
    const [file, setFile] = useState('');
    const [fileStatus, setFileStatus] = useState(null);
    const [department, setDepartments] = useState([]);
    const [employee, setEmployee] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileStatus", fileStatus);
        formData.append("departmentId", dept);
        formData.append("initiatedBy", users);
    
        try {
            const response = await axios.post('http://localhost:8080/initiate', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            console.log(response);
            if (response.data.message === "Initiation saved") {
                alert("Initiation Success");
                setUser("");
                setDepartments("");
                setFile(null);
                setFileStatus("");
                navigate('/admin/filetracking')
            } else {
                alert("Something went wrong: " + response.data.message);
            }
        } catch (error) {
            console.error("Submit error:", error);
            alert("Server error");
        }
    }
    const fetchdata = async () => {
        await axios.get(`http://localhost:8080/dept`)
            .then(res => setDepartments(res.data))
            .catch(err => console.error(err));
        await axios.get(`http://localhost:8080/`)
            .then(res => setEmployee(res.data.user))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchdata();
    }, [])


    return (
        <>
            <div className="container-fluid" >
                <div className="row border border-bottom-1 bg-primary" style={{ height: "100px" }}>
                    <div className="col">
                        <Navbar />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-2 bg-primary" >
                        <Sidebar />
                    </div>
                    <div className="col-sm-10  p-4" >
                        <div className="container bg-light">
                        <h3>Initiate Process Form</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="initiate" className="form-label">Initiated By</label>
                                <select value={users} onChange={(e) => { setUser(e.target.value) }} className="form-control">
                                    <option value="">--Select Employee--</option>
                                    {employee?.map((e) => (
                                        <option value={e._id}>{e.firstName + e.lastName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">File</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="file"
                                    onChange={(e) => { setFile(e.target.files[0]) }} 
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="statusId" className="form-label">Department</label>
                                <select value={dept} onChange={(e) => { setDept(e.target.value) }} className="form-control">
                                    <option value="">--Select Department--</option>
                                    {department?.map((e) => (
                                        <option value={e._id}>{e.deptName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">status</label>
                                <select value={fileStatus} onChange={(e) => { setFileStatus(e.target.value) }} className="form-control">
                                    <option value=''>--Select Status--</option>
                                    <option value='In Progress'>Processing</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default InitiateForm