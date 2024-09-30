import React, { useState } from 'react';
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
import MultiStepForm from './Admin/multistepform';

const App = () => {

   const [toggleSideBar , setToggleSideBar] = useState(true);

   const handleToggleSideBar = () =>{
      setToggleSideBar(!toggleSideBar)
   }

  //  function to create layout of the page
       function AdminLayout() {
            return (
              <>
              <div className="flex  min-h-screen relative">
                {/* container for sidebar */}
            <div className={`absolute md:relative mt-20 md:mt-0  $flex-shrink-0 ${toggleSideBar ? "left-0" : "-left-64"} transition-all duration-300 z-50 h-full`}>
             {toggleSideBar &&<SideBar toggleSideBar = {toggleSideBar}/>}
            </div>
            {/* container for navbar and outlet */}
             <div className={`flex flex-col flex-grow overflow-hidden`}>
           <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
           <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
              <Outlet />
             </div>
          </main>
         </div>
       </div>
              </>
        
            )
          }

       function LoginLayout() {
          return (
            <>
            <Outlet/>
            </>
          )
       }   
          
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
        <Route path='/' element = {<AddNewCustomer/>}/>
          <Route path='/Project' element = {<Project/>}/>   
          <Route path='/task' element = {<Task/>}/>   
          <Route path='/role' element = {<Role/>}/>  
          <Route path='/department' element = {<Department/>}/>  
          <Route path='/projectsettings' element = {<ProjectSettings/>}/>  
          <Route path='/addnewcustomer' element = {<AddNewCustomer/>}/>  
          <Route path='/projectdata' element = {<ProjectSummary/>}/>   
        </Route>
        <Route element={<LoginLayout />}>
        <Route path="/authentication" element={<MultiStepForm/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;