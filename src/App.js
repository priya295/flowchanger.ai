

import React from 'react';
import './Assets/css/roledetail.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./Admin/Components/pages/create_users";
import Users from './Admin/Components/pages/users';
import Details from './Admin/Components/pages/details';
import Filter from './Admin/Components/pages/filter_selected';
import Admin from './Admin/Components/Projects/overView';
import Staff from './Admin/Components/Staff';
import Role from './Admin/Components/roles/RoleDetails';
import NavBar from './Admin/Components/NavBar';
import SideBar from './Admin/Components/SideBar';
import EditForm from './Admin/Components/editForm';
import MyStaff from './Admin/Components/mystaff';
import AddNewRole from './Admin/Components/roles/AddNewRole';
import DepartmentDetail from './Admin/Components/Department/DepartmentDetail';
import AddDepartment from './Admin/Components/Department/AddDepartment';
import Newactivity from './Admin/Components/Projects/Newactivity';
import NewTask from './Admin/Components/Task_deatail/NewTask';

const App = () => {
       function AdminLayout() {
            return (
              <>
                <div  className='main-layout relative flex'>
                  <div className='set-layout flex '>
                    {/* <SideBar />
                    <NavBar /> */}
                  </div>
                  <Outlet />
                </div>
        
              </>
        
            )
          }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
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
          <Route path='/newactivity' element={<Newactivity />} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
          <Route path='/newtask' element={<NewTask />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;