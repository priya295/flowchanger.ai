import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./pages/create_users";
import Users from './pages/users';
import Details from './pages/details'
import Filter from './pages/filter_selected'
import Admin from './Admin/Projects/overView'
import Staff from './Admin/Staff/Staff';
import Role from './Admin/roles/RoleDetails'
 import NavBar from './Admin/Components/NavBar';
import Sidebar from './Components/Sidebar';

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
          <Route path= '/admin' element = {<Admin/>}/>
          <Route path='/admin/staff' element = {<Staff/>}/>
          <Route path='/admin/role' element={<Role />} />




        </Route>
      </Routes>








    </BrowserRouter>
  )
}

export default App
