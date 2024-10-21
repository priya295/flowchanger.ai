import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useGlobalContext } from '../../../Context/GlobalContext';


const SidebarEditStaff = () => {
  const { selectedStaff } = useGlobalContext();
const navigate = useNavigate()


  useEffect(()=>{
    if(selectedStaff==null){
      navigate("/staff-menu")
    }
  },[])
  return (
    <div className='edit-sidebar h-lvh shadow mt-[60px]  fixed top-[6px] bg-white p-[30px] pl-[5px] pr-[5px] overflow-scroll w-[300px] z-10 pb-10'>
        <div className='flex flex-col sidelinks'>
            <NavLink to="/personal-detail" className='p-5 pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Personal Details <KeyboardArrowRightIcon className='arrow-icon'/></NavLink>
            <NavLink to="/custom-detail" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Custom Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/background-verification" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Background Verification <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/employee-detail" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Employment Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/bank-detail" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Bank Account <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/user-permission" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>User Permission <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/attendance-detail" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Attendance Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/salary-details-edit" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/leavepolicy-detail" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Leave & Balance Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/edit-penalty" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Penalty & Overtime Details <KeyboardArrowRightIcon/></NavLink> 
            <NavLink to="/salary-overview" className='p-5 pb-10 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Overview<KeyboardArrowRightIcon/></NavLink> 

            {/* <NavLink to="#" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Tax Declarations<KeyboardArrowRightIcon/></NavLink>  */}
            {/* <NavLink to="#" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Details<KeyboardArrowRightIcon/></NavLink>  */}

        </div>
    </div>
  )
}

export default SidebarEditStaff