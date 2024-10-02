

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./Admin/Components/pages/create_users";
import Users from './Admin/Components/pages/users';
import Details from './Admin/Components/pages/details';
import Filter from './Admin/Components/pages/filter_selected';
import Admin from './Admin/Components/Projects/overView';
import Staff from './Admin/Components/Staff';
import Role from './Admin/Components/roles/RoleDetails';
import NavBar from './Admin/Components/NavBar';
import '../src/Assets/css/new.css';
import SideBar from './Admin/Components/SideBar';
import EditForm from './Admin/Components/editForm';
import MyStaff from './Admin/Components/mystaff';
import Newactivity from './Admin/Components/Projects/Newactivity';
import NewTask from './Admin/Components/Task_deatail/NewTask';
import Attendence_summary from './Admin/Components/Attendance/Attendence_summary';
import Worktime from './Admin/Components/Attendance/Worktime';
import Reviewfine from './Admin/Components/Attendance/Reviewfine';
import Overtime from './Admin/Components/Attendance/Overtime';


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
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
          <Route path='/newactivity' element={<Newactivity />} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
          <Route path='/newtask' element={<NewTask />} />
          <Route path='/attendence_summary' element={<Attendence_summary />} />
          <Route path='/worktime' element={<Worktime />} />
          <Route path='/reviewfine' element={<Reviewfine />} />
          <Route path='/overtime' element={<Overtime />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



