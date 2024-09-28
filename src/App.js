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

const App = () => {

   const [toggleSideBar , setToggleSideBar] = useState(true);

   const handleToggleSideBar = () =>{
      setToggleSideBar(!toggleSideBar)
   }

  //  function to create layout of the page
       function AdminLayout() {
            return (
              <>
              <div className="flex">
              <div>
            {toggleSideBar && <SideBar toggleSideBar = {toggleSideBar}/>}
            </div> 
       
         {/* container for navbar and outlet */}
         <div className={`flex flex-col flex-grow overflow-hidden`}>
           <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
           <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        <Route path='/' element = {<AddNewCustomer/>}/>
          <Route path='/Project' element = {<Project/>}/>   
          <Route path='/task' element = {<Task/>}/>   
          <Route path='/role' element = {<Role/>}/>  
          <Route path='/department' element = {<Department/>}/>  
          <Route path='/projectsettings' element = {<ProjectSettings/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;