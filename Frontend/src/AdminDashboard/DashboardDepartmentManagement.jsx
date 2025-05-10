import React from 'react'
import Departments from './AdminElements/Departments'
import Navbar from './AdminElements/Navbar'
import Sidebar from './AdminElements/Sidebar'


function DashboardDepartmentManagement() {
   
  return (
    <>
    <div className="container-fluid" >
               <div className="row border border-bottom-1 bg-primary" style={{height:"100px"}}>
                   <div className="col">
                       <Navbar />
                   </div>

               </div>
               <div className="row">
                   <div className="col-sm-2 bg-primary">
                       <Sidebar />
                   </div>
                   <div className="col-sm-10 p-4">
                   <Departments />
                      
                       </div>

                   </div>
               </div>
   </>
  )
}

export default DashboardDepartmentManagement