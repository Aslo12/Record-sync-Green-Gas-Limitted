import React from "react";
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
function Navbar() {
  const navigate = useNavigate();
          function validate() {
              if (!localStorage.getItem('useradmin')) {
                  navigate('/adminlogin');
      
              }
          }
          useEffect(()=>{
              validate();
          },[])
    return (
      <nav className="navbar navbar-expand-lg navbar-primary px-4">
        <div className="container-fluid ">
          <span className="navbar-brand mt-3 text-light "><h3>Admin Dashboard</h3></span>
          <div className="d-flex mt-3">
            <button className="btn btn-outline-light btn-light text-primary me-2">🔔 Notifications</button>
            <button className="btn btn-outline-light btn-light text-primary" onClick={()=>{
              window.alert("Are you want to Log out!");
              localStorage.removeItem("useradmin");
              validate();
            }}>Log out</button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  