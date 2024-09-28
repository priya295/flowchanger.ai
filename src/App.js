import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Admin from "./Admin/Components/Projects/overView";
import Staff from "./Admin/Components/Staff";
import Role from "./Admin/Components/roles/RoleDetails";
import NavBar from "./Admin/Components/NavBar";
import SideBar from "./Admin/Components/SideBar";
import EditForm from "./Admin/Components/editForm";
import MyStaff from "./Admin/Components/mystaff";
import AddNewRole from '../src/Admin/Components/roles/AddNewRole'
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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/staff" element={<Staff />} />
          <Route path="/admin/role" element={<Role />} />
          <Route path="/admin/addnewrole" element={<AddNewRole />} />

          <Route path="/editForm" element={<EditForm />} />
          <Route path="/mystaff" element={<MyStaff />} />

          <Route path="/editForm" element={<EditForm />} />
          <Route path="/mystaff" element={<MyStaff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;



