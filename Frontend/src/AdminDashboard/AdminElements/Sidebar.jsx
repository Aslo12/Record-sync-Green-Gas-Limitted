import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function Sidebar() {
  let { id , dep_id, initiate_id } = useParams();
 
  return (
    <div className=" text-white p-3" style={{ width: "250px", minHeight: "100vh" }}> 
      <h4 className=" mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin`} ><i className="fa-solid fa-gauge  me-2"></i>Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin/employee`}><i class="fa-solid fa-user  me-2"></i>Employees</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin/department`}><i class="fa-solid fa-house  me-2"></i>Departments</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin/filetracking`}><i class="fa-solid fa-file  me-2"></i>Files</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin/notifications`}><i class="fa-solid fa-circle-exclamation  me-2"></i>Notifications</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to={`/admin/QusAns`}><i class="fa-solid fa-circle-question me-2"></i>Q&A Forum</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
