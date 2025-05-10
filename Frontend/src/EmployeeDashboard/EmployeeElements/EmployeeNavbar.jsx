import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'


function EmployeeNavbar() {
  const navigate = useNavigate();
          function validate() {
              if (!localStorage.getItem('user')) {
                  navigate('/emplogin');
      
              }
          }
          useEffect(()=>{
              validate();
          },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid">
          <span className="navbar-brand mt-3 text-light"><h3>Employee Dashboard</h3></span>
          <div className="d-flex mt-3">
            <button className="btn btn-outline-light btn-light me-2 text-dark">🔔 Notifications</button>
            <button className="btn btn-outline-light btn-light text-dark" onClick={()=>{
              window.alert("Are you want to Log out!");
              localStorage.removeItem("user");
              validate();
            }}>Log out</button>
          </div>
        </div>
      </nav>
  )
}

export default EmployeeNavbar