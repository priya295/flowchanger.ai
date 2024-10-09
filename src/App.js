import React, { useState } from "react";
import "./Assets/css/roledetail.css";
import "../src/Assets/css/new.css";
import "../src/Assets/css/customer.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Admin/Components/NavBar";
import SideBar from "./Admin/Components/SideBar";
import Project from "./Admin/pages/Projects/Project_Data";

import Role from "./Admin/pages/Roles/RoleDetails";
import Department from "./Admin/pages/Department/DepartmentDetails";
import AddRole from "./Admin/pages/Roles/Add_Role";
import AddDepartment from "./Admin/pages/Department/AddDepartment";
import EditRole from "./Admin/pages/Roles/EditRole";
import EditDepartment from "./Admin/pages/Department/EditDepartment";
import StaffMenu from "./Admin/pages/StaffSection/StaffMenu";
import AddOneStaff from "./Admin/pages/StaffSection/AddOneStaff";
import PersonalDetail from "./Admin/pages/editstaff/PersonalDetail";
import BankDetails from "../src/Admin/pages/editstaff/EditBankDetail";
import Editattendance from "../src/Admin/pages/editstaff/EditAttendanceDetail";
import EmployementDetail from "./Admin/pages/editstaff/EmployementDetail";
import UserPermission from "./Admin/pages/editstaff/UserPermission";
import EditLeavePolicies from "./Admin/pages/editstaff/EditLeavePolicies";
import CustomDetail from "./Admin/pages/editstaff/CustomDetail";
import BackgroundVerification from "./Admin/pages/editstaff/BackgroundVerification";
import VerifyAadhaar from "./Admin/pages/editstaff/VerifyAadhaar";
import UpperHeader from "./Admin/pages/editstaff/UpperHeader";
import SidebarEditStaff from "../src/Admin/pages/editstaff/SidebarEditStaff";
import Salary_Details from "../src/Admin/pages/StaffSection/Salary_Details";
import MultiStepForm from "../src/Admin/pages/authentication/steps/steps/multistepform";
import Attendence_summary from "./Admin/pages/StaffSection/Attendance/Attendence_summary";
import Worktime from "./Admin/pages/StaffSection/Attendance/Worktime";
import Reviewfine from "./Admin/pages/StaffSection/Attendance/Reviewfine";
import Overtime from "./Admin/pages/StaffSection/Attendance/Overtime";
import Project_Summary from "./Admin/pages/Projects/Project_Summary";
// import ProjectsOverview from "../src/Admin/pages/Projects/Project_overview";
import Projects from '../src/Admin/pages/Projects/Projects';
import Taskview from "./Admin/pages/Tasks/Taskview";
import Task from "./Admin/pages/Tasks/Task";
import Clients from "./Admin/pages/Clients/Clients";
import NewTicket from "../src/Admin/pages/Projects/NewTicketForm";
import Add_Project from "../src/Admin/pages/Projects/Add_Project";
import Customer_Navbar from "./Customer Panel/Components/Customer_Navbar";
import Customer_Footer from "./Customer Panel/Components/Customer_Footer";
import EditSalaryDetails from "./Admin/pages/editstaff/EditSalaryDetails";
import EditPenalty from "./Admin/pages/editstaff/EditPenalty";
import SalaryOverview from "./Admin/pages/editstaff/SalaryOverview";
import StaffSalarySummry from "./Admin/pages/editstaff/StaffSalarySummry";
import Calender from "./Admin/pages/Calender/Calender";
import Editprofile from "../src/Admin/pages/profile/Editprofile";
import Task_Status from "./Admin/pages/Projects/Task_Status";
import Client_Project from "../src/Clients/Client_Project";
import Edit_Task_Status from "./Admin/pages/Projects/Edit_Task_Status";
import Edit_Project from "./Admin/pages/Projects/Edit_Project";
import Project_Progress from "../src/Clients/Project_Progress";
import Meeting from "./Admin/pages/Calender/Meeting";
import CalenderDay from "./Admin/pages/Calender/CalenderDay";
import CalenderYear from "./Admin/pages/Calender/CalenderYear";
import Note from "../src/Notes/Note";
import ExpensePage from "../src/Admin/Expenses/Expense";




const App = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  function AuthLayout() {
    return (
      <>
        <Outlet />
      
      </>
    );
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
            <NavBar
              handleToggleSideBar={handleToggleSideBar}
              toggleSideBar={toggleSideBar}
            />
            <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
              <div className=" mx-auto px-4 pl-3 pr-3 py-8 lg:px-4 view-not">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }

  function Editstaff() {
    return (
      <>
        <div className="">
          <UpperHeader />
          <div className="flex">
            <SidebarEditStaff />
            <Outlet />
          </div>
        </div>
      </>
    );
  }

  function CustomerPanel() {
    return (
      <>
        <Customer_Navbar />
        <Outlet />
        <Customer_Footer />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          {/* <Route path="/project-overview" element={<ProjectsOverview />} /> */}
          <Route path="/new-ticket" element={<NewTicket />} />
          
          <Route path="/addrole" element={<AddRole />} />
          <Route path="/role" element={<Role />} />
          <Route path="/editrole" element={<EditRole />} />
          <Route path="/editdepartment" element={<EditDepartment />} />
          <Route path="/staff-menu" element={<StaffMenu />} />
          <Route path="/add-one-staff" element={<AddOneStaff />} />
          <Route path="/department" element={<Department />} />
          <Route path="/salary_Details" element={<Salary_Details />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/reviewfine" element={<Reviewfine />} />
          <Route path="/worktime" element={<Worktime />} />
          <Route path="/attendence_summary" element={<Attendence_summary />} />
          <Route path="/project_summary" element={<Project_Summary />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/taskview" element={<Taskview />} />
          <Route path="/clients" element={<Clients />} />
          {/* <Route path="/taskdata" element={<Task_Data />} /> */}
           <Route path="/add-department" element={<AddDepartment/>}/>
          <Route path="/calender" element={<Calender/>}/>
          <Route path="/meeting" element={<Meeting/>}/>
          <Route path="/day-wise" element={<CalenderDay/>}/>
          <Route path="/year-wise" element={<CalenderYear/>}/>


 
          <Route path="/create-new-project" element={<Add_Project />}></Route>
          <Route path="/add-department" element={<AddDepartment />} />
           <Route path="/taskstatus" element={<Task_Status />} />
          <Route path="/edittaskstatus" element={<Edit_Task_Status />} />
          <Route path="/edit-project" element={<Edit_Project/>} />
 
          <Route path="/task" element={<Task />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/taskstatus" element={<Task_Status />} />
          <Route path="/edittaskstatus" element={<Edit_Task_Status />} />
          <Route path="/clientproject" element={<Client_Project />} />
          <Route path="/projectprogress" element={<Project_Progress />} />
          <Route path="/note" element={<Note />} />
          <Route path="/expensepage" element={<ExpensePage />} />
        

        </Route>

        <Route element={<Editstaff />}>
          <Route path="/personal-detail" element={<PersonalDetail />} />
          <Route path="/bank-detail" element={<BankDetails />} />
          <Route path="/attendance-detail" element={<Editattendance />} />
          <Route path="/employee-detail" element={<EmployementDetail />} />
          <Route path="/user-permission" element={<UserPermission />} />
          <Route path="/leavepolicy-detail" element={<EditLeavePolicies />} />
          <Route path="/custom-detail" element={<CustomDetail />} />
          <Route path="/salary-details-edit" element={<EditSalaryDetails />} />
          <Route path="/edit-penalty" element={<EditPenalty />} />
          <Route path="/salary-overview" element={<SalaryOverview />} />
          <Route path="/staff-salary-summary" element={<StaffSalarySummry />} />

          <Route
            path="/background-verification"
            element={<BackgroundVerification />}
          />
          <Route path="/verify-aadhar" element={<VerifyAadhaar />} />
     
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/authentication" element={<MultiStepForm />} />
        </Route>

        <Route element={<CustomerPanel />}>
          <Route path="/customer-panel"></Route>
         
        </Route>
      


      </Routes>
    </BrowserRouter>
  );
};

export default App;
