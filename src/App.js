<<<<<<< HEAD


import React,{useState} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./Admin/Components/pages/create_users";
import Users from './Admin/Components/pages/users';
import Details from './Admin/Components/pages/details';
import Filter from './Admin/Components/pages/filter_selected';
import Admin from './Admin/Components/Projects/overView';
import Staff from './Admin/Components/Staff';
import Role from './Admin/Components/roles/RoleDetails';
import NavBar from './Admin/Components/headers/NavBar';
import SideBar from './Admin/Components/headers/SideBar';
import EditForm from './Admin/Components/editForm';
import MyStaff from './Admin/Components/mystaff';
import AddNewRole from '../src/Admin/Components/roles/AddNewRole' 
import DepartmentDetail from '../src/Admin/Components/Department/DepartmentDetail' 
import AddDepartment from '../src/Admin/Components/Department/AddDepartment' 
import NewTask from '../src/Admin/Components/Task_deatail/NewTask';

const App = () => {

   const [toggleSideBar , setToggleSideBar] = useState(false);

   const handleToggleSideBar = () =>{
      setToggleSideBar(!toggleSideBar)
   }

  //  function to create layout of the page
       function AdminLayout() {
            return (
              <>
                <div  className='main-layout relative flex'>
                  <div className='set-layout flex '>
                    <SideBar />
                    <NavBar />
                  </div>
                  <Outlet />
                </div>
        
              </>
        
            )
          }
=======
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Admin from "./Admin/Components/Projects/overView";
import Staff from "./Admin/Components/Staff";
import Role from "./Admin/Components/roles/RoleDetails";
import NavBar from "./Admin/Components/NavBar";
import SideBar from "./Admin/Components/SideBar";
import EditForm from "./Admin/Components/editForm";
import MyStaff from "./Admin/Components/mystaff";

const App = () => {
  function AdminLayout() {
    return (
      <>
        <div className="main-layout relative flex">
          <div className="set-layout flex ">
            {/* <SideBar />
            <NavBar /> */}
          </div>
          <Outlet />
        </div>
      </>
    );
  }
>>>>>>> e49abc6c4d35d7c0b9154c41377d6b3e209c7cc8
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
<<<<<<< HEAD
        <Route path="/" element= {<Front/>} />  
          <Route path='/users' element = {<Users/>}/>   
          {/* <Route path='/details' element = {<Details/>}/> */}
          <Route path='/filter' element = {<Filter/>}/>
          <Route path= '/admin' element = {<Admin/>}/>
          <Route path='/admin/staff' element = {<Staff/>}/>
          <Route path='/admin/role' element={<Role />} />
          <Route path='/admin/addnewrole' element={<AddNewRole />} />
          <Route path='/admin/department' element={<DepartmentDetail />} />
          <Route path='/admin/adddepartment' element={<AddDepartment />} />


          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
          <Route path='/newtask' element={<NewTask/>} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
=======
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/staff" element={<Staff />} />
          <Route path="/admin/role" element={<Role />} />
          <Route path="/editForm" element={<EditForm />} />
          <Route path="/mystaff" element={<MyStaff />} />
>>>>>>> e49abc6c4d35d7c0b9154c41377d6b3e209c7cc8

          <Route path="/editForm" element={<EditForm />} />
          <Route path="/mystaff" element={<MyStaff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
<<<<<<< HEAD



=======
>>>>>>> e49abc6c4d35d7c0b9154c41377d6b3e209c7cc8
