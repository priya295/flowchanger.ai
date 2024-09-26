// import React from 'react'
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Front from "./pages/create_users";
// import Users from './pages/users';
// import Details from './pages/details'
// import Filter from './pages/filter_selected'
// import Admin from './Admin/Projects/overView'
// import Staff from './Admin/Staff/Staff';
// import Role from './Admin/roles/RoleDetails';
// import NavBar from './Admin/Components/NavBar';
// import SideBar from './Admin/Components/SideBar';
// import EditForm from './components/editForm';
// import MyStaff from './components/mystaff';


// const App = () => {

//   function AdminLayout() {
//     return (
//       <>
//         <div  className='main-layout relative flex'>
//           <div className='set-layout flex '>
//             <SideBar />
//             <NavBar />
//           </div>
//           <Outlet className="w-full"/>
//         </div>

//       </>

//     )
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<AdminLayout />}>
//         <Route path="/" element= {<Front/>} />  
//           <Route path='/users' element = {<Users/>}/>   
//           <Route path='/details' element = {<Details/>}/>
//           <Route path='/filter' element = {<Filter/>}/>
//           <Route path= '/admin' element = {<Admin/>}/>
//           <Route path='/admin/staff' element = {<Staff/>}/>
//           <Route path='/admin/role' element={<Role />} />
//           <Route path='/editForm' element={<EditForm/>}/>
//           <Route path='/mystaff' element={<MyStaff/>}/>
//       </Route>
//       </Routes>








//     </BrowserRouter>
//   )
// }


import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./pages/create_users";
import Users from './pages/users';
import Details from './pages/details';
import Filter from './pages/filter_selected';
import Admin from './Admin/Projects/overView';
import Staff from './Admin/Components/Staff';
import Role from './Admin/roles/RoleDetails';
import NavBar from './Admin/Components/NavBar';
import SideBar from './Admin/Components/SideBar';
import EditForm from './Admin/Components/editForm';
import MyStaff from './Admin/Components/mystaff';

const App = () => {
  function AdminLayout() {
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="hidden md:flex md:flex-shrink-0 ">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <NavBar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Front />} />
          <Route path='/users' element={<Users />} />
          <Route path='/details' element={<Details />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/staff' element={<Staff />} />
          <Route path='/admin/role' element={<Role />} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;