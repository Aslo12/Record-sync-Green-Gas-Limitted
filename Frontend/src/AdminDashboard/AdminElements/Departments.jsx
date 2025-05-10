import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Departments() {
  const { id} = useParams();
  const navigate = useNavigate();
  let [departments, setDepartment] = useState([]);
  let [departmentName, setNewDepartments]=useState("")
  useEffect(() => {
    fetchDepartments();
  }, [id])
  const fetchDepartments = ()=>{
    axios.get(`http://localhost:8080/dept`)
    .then(res => setDepartment(res.data))
    .catch(err => console.error(err));
}
const handleDelete = (dept_id)=>{
  axios.delete(`http://localhost:8080/dept/${dept_id}`)
  .then(res=>{
    window.alert("Are you want to deleted!");
    fetchDepartments();
  })
  .catch(err=>console.error("Error Deleting",err));
}

const addDepartment = async(e)=>{
  e.preventDefault();
  let newDept = {'deptName':departmentName,'status':"active"};
  let responce = await axios.post(`http://localhost:8080/dept`, newDept);
  if(responce.data.msg === "Success"){
    window.alert("Are you want to added a new department!")
    setNewDepartments("");
    fetchDepartments();
  }else{
      window.alert("Failed!");
  }


}
  return (
    <div className="container bg-light text-muted">
      <form method="post" onSubmit={addDepartment}>
        <label htmlFor="departmentName">DepartmentName</label>
        <input type="text" id="departmentName" value={departmentName} onChange={(e)=>setNewDepartments(e.target.value)} name="departmentName" className="form-control" required/><br/>
        <input type="submit" value="Add Department" className="btn btn-primary"/>
      </form>
      <h3 className="mb-4 mt-5">List of Departments</h3>
      <ul className="list-group ">
        { departments?.map((dept, index) => (
          
          <li key={dept._id} className="list-group-item d-flex justify-content-between align-items-center">
            {dept.deptName}
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(dept._id)} >Delete</button>
          </li>
        ))}
        </ul>
       
    </div>
  );
}
export default Departments;
