import React from 'react'
import logo from '../../../Assets/Images/logo.png'
import home from '../../../Assets/Images/home.png'
import project from '../../../Assets/Images/project.png'
import task from '../../../Assets/Images/task.png'
import client from '../../../Assets/Images/client.png'
import report from '../../../Assets/Images/report.png'
import staff from '../../../Assets/Images/staff.png'
import setting from '../../../Assets/Images/setting.png'

const SideBar = ({toggleSideBar}) => {

  return (
    <div className={`md:flex md:flex-shrink-0 absolute md:relative mt-20 md:mt-0 h-full ${toggleSideBar?"left-[0px]":"left-[-260px] md:left-0"} z-50`}>
    <div className='bg-[#2B2A2D]  w-64 rounded-t-md h-full  flex flex-col ' >
      <img className='p-7' src= {logo} alt="" />
      <div className='mt-5 cursor-pointer'>
        <ul className='ml-9 text-[#B1B1B1] space-y-7'>
          <li className='flex gap-5 items-center' > <img src= {home} alt="" /> Dashboard</li>
          <li className='flex gap-5 items-center' > <img src= {project} alt="" /> Project</li>
          <li className='flex gap-5 items-center' > <img src= {task} alt="" /> Task</li>
          <li className='flex gap-5 items-center' > <img src= {client} alt="" /> Client</li>
          <li className='flex gap-5 items-center' > <img src= {report} alt="" /> Report</li>
          <li className='flex gap-5 items-center' > <img src= {staff} alt="" /> Staff</li>
          <li className='flex gap-5 items-center' > <img src= {setting} alt="" /> Setting</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default SideBar
