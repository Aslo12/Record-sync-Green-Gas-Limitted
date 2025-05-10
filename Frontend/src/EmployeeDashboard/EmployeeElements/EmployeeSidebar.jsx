import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function EmployeeSidebar() {
  const {id} = useParams();
  return (
    <div className=" text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
      <h4 className=" mb-4">Employee Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link text-white" to={`/employee`} ><i className="fa-solid fa-gauge  me-2"></i>Dashboard</Link></li>
        {/* <li className="nav-item"><Link className="nav-link text-white" to={`/employee/initiate`}><i class="fa-solid fa-file  me-2"></i>Initiate File</Link></li> */}
        <li className="nav-item"><Link className="nav-link text-white" to={`/employee/myfiles`}><i class="fa-solid fa-file  me-2"></i>My Files</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/employee/notifications`}><i class="fa-solid fa-circle-exclamation  me-2"></i>Notifications</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/employee/qaforum`}><i class="fa-solid fa-circle-question me-2"></i>Q&A Forum</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/employee/profile`}><i class="fa-solid fa-user  me-2"></i>Profile</Link></li>
      </ul>
    </div>
  );
}

export default EmployeeSidebar;
