import React from 'react'
import EmployeeNavbar from './EmployeeElements/EmployeeNavbar'
import EmployeeSidebar from './EmployeeElements/EmployeeSidebar'
import QAForum from './EmployeeElements/QAForum'

function DashboardQAForum() {
  return (
    <>
    <div className="container-fluid" >
               <div className="row border border-2 bg-primary " style={{height:"100px"}}>
                   <div className="col">
                       <EmployeeNavbar />
                   </div>

               </div>
               <div className="row ">
                   <div className="col-sm-2 bg-primary" >
                       <EmployeeSidebar/>
                   </div>
                   <div className="col-sm-10 p-4">
                   <QAForum />
                      
                       </div>

                   </div>
               </div>
   </>
  )
}

export default DashboardQAForum