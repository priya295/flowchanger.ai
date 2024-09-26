import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./pages/create_users";
import Users from './pages/users';
import Details from './pages/details'
import Filter from './pages/filter_selected'

import NavBar from './Admin/Components/NavBar';
import Sidebar from './Admin/Components/SideBar';
import Admin_Projects from './Admin/Pages/Projects/overView'
import Admin_Staff from './Admin/Pages/Staff/Staff';
import Admin_Role from './Admin/Pages/Roles/RoleDetails';


const App = () => {

  function AdminLayout() {
    return (
      <>
        <div div className='main-layout relative '>
          <div className='set-layout flex'>
            <Sidebar />
            <NavBar />
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
          <Route path='/details' element = {<Details/>}/>
          <Route path='/filter' element = {<Filter/>}/>


          <Route path= '/admin/project' element = {<Admin_Projects/>}/>
          <Route path='/admin/staff' element = {<Admin_Staff/>}/>
          <Route path='/admin/role' element={<Admin_Role />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
