import React, { useState } from 'react';
import './Assets/css/roledetail.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './Admin/Components/NavBar';
import '../src/Assets/css/new.css';
import SideBar from './Admin/Components/SideBar';
// import MyStaff from './Admin/Components/mystaff';
// import Newactivity from './Admin/Components/Projects/Newactivity';
// import NewTask from './Admin/Components/Task_deatail/NewTask';
import Attendence_summary from './Admin/Components/Attendance/Attendence_summary';
import Worktime from './Admin/Components/Attendance/Worktime';
import Reviewfine from './Admin/Components/Attendance/Reviewfine';
import Overtime from './Admin/Components/Attendance/Overtime';
import Project from './Admin/pages/Projects/Project_Data';
// import AddProject from './Admin/pages/Projects/Add_Projects';
import Task from './Admin/pages/Tasks/Task_Data';
import Role from './Admin/pages/Roles/RoleDetails';
import Department from './Admin/pages/Department/DepartmentDetails';
import AddRole from './Admin/pages/Roles/Add_Role';
import AddDepartment from './Admin/pages/Department/AddDepartment'
import EditRole from './Admin/pages/Roles/EditRole';
import EditDepartment from './Admin/pages/Department/EditDepartment';
// import StaffMenu from './Admin/pages/StaffSection/StaffMenu  ';
import AddOneStaff from './Admin/pages/StaffSection/AddOneStaff';
import Task_Data from "./Admin/pages/Tasks/Task_Data";
import Project_Summary from './Admin/pages/Projects/Project_Summary';



const App = () => {

  const [toggleSideBar, setToggleSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar)
  }

 
  //  function to create layout of the page
  function AdminLayout() {
    return (
      <>
        <div className="flex">
          <div className="">
            {toggleSideBar && <SideBar toggleSideBar={toggleSideBar} />}
          </div>

          {/* container for navbar and outlet */}
          <div className={`flex flex-col flex-grow overflow-hidden`}>
            <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar} />
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
          <Route path='/Project' element={<Project />} />
          {/* <Route path='/Add_Project' element = {<AddProject/>}/>    */}
          <Route path='/task' element={<Task />} />
          <Route path='/addrole' element={<AddRole />} />
          <Route path='/role' element={<Role />} />
          <Route path='/editrole' element={<EditRole />} />
          <Route path='/editdepartment' element={<EditDepartment />} />
          {/* <Route path='/staff-menu' element = {<StaffMenu/>}/>   */}
          <Route path='/add-one-staff' element={<AddOneStaff />} />
          <Route path='/department' element={<Department />} />
          <Route path='/adddepartment' element={<AddDepartment />} />
          <Route path='/ovetime' element={<Overtime />} />
          <Route path='/reviewfine' element={<Reviewfine />} />
          <Route path='/worktime' element={<Worktime />} />
          <Route path='/attendence_summary' element={<Attendence_summary />} />
          {/* <Route path='/newactivity' element = {<Newactivity/>}/> */}
          {/* <Route path='/mystaff' element = {<MyStaff/>}/> */}
          {/* <Route path='/newtask' element = {<NewTask/>}/>  */}
          <Route path='/taskdata' element={<Task_Data />} />
          <Route path='/project_summary' element={<Project_Summary />} />
          <Route path='/overtime' element={<Overtime />} />

        </Route>




  


      </Routes>
    </BrowserRouter>
  );
}

export default App;



