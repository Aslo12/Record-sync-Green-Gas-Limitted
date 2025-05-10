import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// Main Pages
import HomePage from './MainHomePage/HomePage'
import About from './MainHomePage/MainPageElements/About'
import AdminLogin from './MainHomePage/MainPageElements/AdminLogin'
import EmpLogin from './MainHomePage/MainPageElements/EmpLogin'

// Admin Dashboard
import DashboardHomePage from './AdminDashboard/DashboardHomePage'
import DashboardDepartmentManagement from './AdminDashboard/DashboardDepartmentManagement'
import DashboardEmployeesManagement from './AdminDashboard/DashboardEmployeesManagement'
import DashboardFileTrackingManagement from './AdminDashboard/DashboardFileTrackingManagement'
import DashboardNotificationSystem from './AdminDashboard/DashboardNotificationSystem'
import DashboardQAManagement from './AdminDashboard/DashboardQAManagement'
import DashboardReportingSection from './AdminDashboard/DashboardReportingSection'
import InitiateForm from './AdminDashboard/AdminElements/InitiateForm'
import UpdateFiletracking from './AdminDashboard/AdminElements/UpdateFiletracking'

// Employee Dashboard
import DashboardEmployeeHome from './EmployeeDashboard/DashboardEmployeeHome'
import DashboardInitiateFile from './EmployeeDashboard/DashboardInitiateFile'
import DashboardMyFiles from './EmployeeDashboard/DashboardMyFiles'
import DashboardMyNotifications from './EmployeeDashboard/DashboardMyNotifications'
import DashboardQAForum from './EmployeeDashboard/DashboardQAForum'
import DashboardProfile from './EmployeeDashboard/DashboardProfile'
import UpdateEmpProfile from './EmployeeDashboard/EmployeeElements/UpdateEmpProfile'
import RegistrationPage from './MainHomePage/MainPageElements/RegistrationPage'
import UpdateEmployee from './AdminDashboard/AdminElements/UpdateEmployee'

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/emplogin" element={<EmpLogin />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<DashboardHomePage />} />
          <Route path="/admin/department" element={<DashboardDepartmentManagement />} />
          <Route path="/admin/employee" element={<DashboardEmployeesManagement />} />
          <Route path="/admin/filetracking" element={<DashboardFileTrackingManagement />} />
          <Route path="/admin/notifications" element={<DashboardNotificationSystem />} />
          <Route path="/admin/QusAns" element={<DashboardQAManagement />} />
          <Route path="/admin/reporting" element={<DashboardReportingSection />} />
          <Route path="/admin/initiatefile" element={<InitiateForm />} />
          <Route path="/admin/updatefiletracking/:id" element={<UpdateFiletracking />} />
          <Route path="/admin/updateEmployee/:id" element={<UpdateEmployee />} />

          {/* Employee Dashboard Routes */}
          <Route path="/employee" element={<DashboardEmployeeHome />} />
          <Route path="/employee/initiate" element={<DashboardInitiateFile />} />
          <Route path="/employee/myfiles" element={<DashboardMyFiles />} />
          <Route path="/employee/notifications" element={<DashboardMyNotifications />} />
          <Route path="/employee/qaforum" element={<DashboardQAForum />} />
          <Route path="/employee/profile" element={<DashboardProfile />} />
          <Route path="/employee/profile/update" element={<UpdateEmpProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
