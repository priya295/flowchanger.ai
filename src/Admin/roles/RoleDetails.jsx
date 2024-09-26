import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";


const Main = () => {
  return (
    <div className='absolute top-[95px] pl-[240px] w-[100%]'>
      <Link to="/"><IoIosAdd />      New Role</Link>
    </div>
  )
}

export default Main