import React from 'react'
import Employees from './AdminElements/Employees'
import Navbar from './AdminElements/Navbar'
import Sidebar from './AdminElements/Sidebar'
import {useParams} from 'react-router-dom';

function DashboardEmployeesManagement() {
    
  return (
    <>
    <div className="container-fluid" >
               <div className="row border border-bottom-1 bg-primary" style={{height:"100px"}}>
                   <div className="col">
                       <Navbar />
                   </div>

               </div>
               <div className="row">
                   <div className="col-sm-2 bg-primary" >
                       <Sidebar />
                   </div>
                   <div className="col-sm-10 p-4">
                   <Employees />
                      
                       </div>

                   </div>
               </div>
   </>
  )
}

export default DashboardEmployeesManagement