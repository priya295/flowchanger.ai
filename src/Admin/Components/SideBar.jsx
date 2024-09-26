import React from 'react'
import logo from '../../Assets/Images/logo.png'
import home from '../../Assets/Images/home.png'
import project from '../../Assets/Images/project.png'
import task from '../../Assets/Images/task.png'
import client from '../../Assets/Images/client.png'
import report from '../../Assets/Images/report.png'
import staff from '../../Assets/Images/staff.png'
import setting from '../../Assets/Images/setting.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="min-h-screen bg-[#2B2A2D] w-[13%] lg:min-h-screen">
      <img className="p-7" src={logo} alt="" />

      <div className="mt-5 cursor-pointer">
        <ul className="ml-9 text-[#B1B1B1] space-y-7">
          <Link className="flex gap-5 items-center">
            {" "}
            <img src={home} alt="" /> Dashboard
          </Link>
          <Link to={"/admin/project"} className="flex gap-5 items-center cursor-pointer">
            {" "}
            <img src={project} alt="" /> Project
          </Link>
          <Link className="flex gap-5 items-center">
            {" "}
            <img src={task} alt="" /> Task
          </Link>
          <Link className="flex gap-5 items-center">
            {" "}
            <img src={client} alt="" /> Client
          </Link>
          <Link className="flex gap-5 items-center">
            {" "}
            <img src={report} alt="" /> Report
          </Link>
          <Link to={"/admin/staff"} className="flex gap-5 items-center cursor-pointer">
            {" "}
            <img src={staff} alt="" /> Staff
          </Link>
          <Link className="flex gap-5 items-center">
            {" "}
            <img src={setting} alt="" /> Setting
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
