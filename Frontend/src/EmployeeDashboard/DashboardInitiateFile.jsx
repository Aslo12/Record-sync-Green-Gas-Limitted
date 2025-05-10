import React from 'react'
import EmployeeNavbar from './EmployeeElements/EmployeeNavbar'
import EmployeeSidebar from './EmployeeElements/EmployeeSidebar'
import InitiateFile from './EmployeeElements/InitiateFile'

function DashboardInitiateFile() {
  return (
    <>
    <div className="container-fluid" >
               <div className="row border border-1 bg-primary" style={{height:"100px",}}>
                   <div className="col">
                       <EmployeeNavbar />
                   </div>

               </div>
               <div className="row">
                   <div className="col-sm-2 bg-primary" >
                       <EmployeeSidebar />
                   </div>
                   <div className="col-sm-10 p-4">
                   <InitiateFile />
                      
                       </div>

                   </div>
               </div>
   </>
  )
}

export default DashboardInitiateFile