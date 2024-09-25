
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import MyStaff from './components/mystaff';
import Form from './components/form';
import EditForm from './components/editForm';
import ProjectSummary from './components/ProjectSummary';
import AddProject from './components/addProject';
import ProjectSettings from './components/ProjectSettings';

const initialData = [
  {
    name: "Rohan",
    jobtitle: "HR",
    id: "0001",
    EmployeeType: "Full-Time",
    DateOfJoining: "11-10-2023",
    DateOfBirth: "05-09-2002"
  },
  {
    name: "mahesh",
    jobtitle: "HR",
    id: "0002",
    EmployeeType: "Full-Time",
    DateOfJoining: "11-10-2023",
    DateOfBirth: "07-03-2000"
  },
  
];

const  App =() => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [employeeData, setEmployeeData] = useState(initialData);
  

  const handleToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar = {toggleSideBar}/>
        <div className='flex flex-row'>
        {toggleSideBar && <SideBar toggleSideBar = {toggleSideBar}/>}
        <main className={`flex-1 p-4 ${toggleSideBar ? 'ml-64' : ''} `}>
          <Routes>
            <Route 
              path="/" 
              element={
              <MyStaff employeeData={employeeData}/>} 
            />
            <Route 
              path="/add" 
              element={<Form />} 
            />
            <Route 
              path="/projectsummary" 
              element={<ProjectSummary/>} 
            />
            <Route 
              path="/projectsettings" 
              element={<ProjectSettings/>} 
            />
            <Route 
              path="/addProject" 
              element={<AddProject/>} 
            />
            <Route 
              path="/edit/:id" 
              element={<EditForm/>
            } 
            />
          </Routes>
          
        </main>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
