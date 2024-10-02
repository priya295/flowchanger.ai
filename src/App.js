import React, { useState } from 'react';
import './Assets/css/roledetail.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './Admin/Components/NavBar';
import SideBar from './Admin/Components/SideBar';
import Project from './Admin/pages/Projects/Project_Data';
import Task from './Admin/pages/Tasks/Task_Data';
import Role from './Admin/pages/Roles/RoleDetails';
import Department from './Admin/pages/Department/DepartmentDetails';
import AddNewCustomer from './Admin/pages/Clients/AddNewCustomer';
import ProjectSettings from './Admin/pages/Projects/Project_Setting';
import ProjectSummary from './Admin/pages/Projects/Project_Data';
import MultiStepForm from './Admin/pages/multistepform';
import AddRole from './Admin/pages/Roles/Add_Role';
import AddDepartment from './Admin/pages/Department/AddDepartment'
import EditRole from './Admin/pages/Roles/EditRole';
import EditDepartment from './Admin/pages/Department/EditDepartment';
import StaffMenu from './Admin/pages/StaffSection/StaffMenu';
import AddOneStaff from './Admin/pages/StaffSection/AddOneStaff';


const App = () => {

   const [toggleSideBar , setToggleSideBar] = useState(true);

   const handleToggleSideBar = () =>{
      setToggleSideBar(!toggleSideBar)
   }

  //  function to create Authentication Layout
   function AuthLayout() {
    return (
      <>
      <Outlet/>
      </>
    )
   }

  //  function to create layout of the page
       function AdminLayout() {
            return (
              <>
              <div className="flex">
              <div className="">
            {toggleSideBar && <SideBar toggleSideBar = {toggleSideBar}/>}
            </div> 
       
         {/* container for navbar and outlet */}
         <div className={`flex flex-col flex-grow overflow-hidden`}>
           <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
           <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
             <div className="container mx-auto px-4 pl-3 pr-3 py-8 lg:px-4 ">
              <Outlet />
             </div>
          </main>
         </div>
       </div>
              </>
        
            )
          }
          
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path='/Project' element = {<Project/>}/>   
          <Route path='/task' element = {<Task/>}/>   
           <Route path='/addrole' element = {<AddRole/>}/>  
          <Route path='/role' element = {<Role/>}/>  
          <Route path='/editrole' element = {<EditRole/>}/>  
          <Route path='/editdepartment' element = {<EditDepartment/>}/>  
          <Route path='/staff-menu' element = {<StaffMenu/>}/>  
          <Route path='/add-one-staff' element = {<AddOneStaff/>}/>  
          <Route path='/department' element = {<Department/>}/>  
          <Route path='/adddepartment' element = {<AddDepartment/>}/>  
          </Route>
          <Route element = {<AuthLayout/>}>
           <Route path = "/authentication" element={<MultiStepForm/>}/>
            </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;