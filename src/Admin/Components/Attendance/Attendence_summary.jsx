import { div } from 'framer-motion/client'
import React from 'react'
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
 

 
function Attendence_summary() {
    return (
        <div className='p-[20px] w-full'>
            <div className='flex  justify-between  '>
                <div className='flex gap-[10px]'>
                    <h1 className='font-semibold'>Attendence Summary</h1>
                    <p className='bg-[#edd0ca] p-[5px] text-[12px] border border-b border-[#e07964] text-[black] rounded-md'> <WarningIcon className='warning-icon text-[14px] text-[red] ' /> Approval pending for other  <Link className='text-[blue] ml-[10px]' to="/">View</Link> </p>
                </div>
                <div className='flex gap-[10px]'>
                    <Link className='text-[blue] text-[14px] font-semibold' to="/">Unprocessed Logs <FilterListIcon className='icon-filter' /></Link>
                    <Link className='text-[blue] text-[14px] font-semibold' to="/">Daily Report <DownloadIcon className='icon-filter' /></Link>
                    <Link className='text-[blue] text-[14px] font-semibold ' to="/">Setting <SettingsIcon className='icon-filter' /></Link>
                </div>

            </div>

            <div className='bg-[#f1f1f1] p-[20px] rounded-md mt-[24px] '>

                <div className='flex gap-[14px] justify-between items-center  '>
                    <div className='flex '>
                        <input className='bg-transparent font-medium text-[14px]' type="date" />
                    </div>
                    <div className='flex items-center justify-between gap-[14px]'>
                        <h2 className='text-[14px] font-medium'>Total Pending for Approval : 10</h2>
                        <Link className='bg-[#8a25b0] text-[white] review-btn rounded-md' to="/">Review</Link>
                    </div>
                </div>
                <div className='mt-[16px] flex gap-[30px]'>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Total Staff</h2>
                        <p className='text-[14px] font-semibold'>13</p>
                    </div>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Present</h2>
                        <p className='text-[14px] font-semibold'>0(+ 10)</p>
                    </div>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Absent</h2>
                        <p className='text-[14px] font-semibold'>1</p>
                    </div>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Half Day</h2>
                        <p className='text-[14px] font-semibold'>0</p>
                    </div>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Overtime Hours</h2>
                        <p className='text-[14px] font-semibold'>00.00</p>
                    </div>
                    <div className='total-staff w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Fine Hours</h2>
                        <p className='text-[14px] font-semibold'>04.29</p>
                    </div>
                    <div className='total-staff1 w-[15%]'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Paid Leave</h2>
                        <p className='text-[14px] font-semibold'>0</p>
                    </div>
                </div>


            </div>
            <div className='bg-[#f1f1f1] p-[20px] rounded-md mt-[24px] flex gap-[10px]'>
                <Link to="/" className='total-staff text-[blue] w-[12%] text-[14px] font-medium'>Daily Work Entry</Link>
                <Link to="/" className='total-staff text-[blue] w-[4%] text-[14px] font-medium'>Fine</Link>
                <Link to="/" className=' w-[12%] text-[blue] text-[14px] font-medium'>Overtime</Link>
            </div>
            <div className="relative">
                <SearchIcon className='absolute top-[34px] right-[7px]' />
                <input className='bg-[#f1f1f1] w-full  mt-[24px] p-[10px] rounded-md search-staff ' type="text" placeholder='Search Staff by Name , Phone Number or EmployeeID' />
            </div>
            <div className='flex gap-[10px] items-center mt-[20px]'>
                <h1>Creative Department</h1>
                <p className='bg-[#f1f1f1] four'>4</p>
            </div>
            <div className='bg-[#f1f1f1] p-[20px] mt-[18px] rounded-md'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-[16px]'>Akash</p>
                        <p className='text-[red] text-[14px]'>Absent</p>
                    </div>
                    <div className='flex gap-[18px]'>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>P I Present</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>HD I Half Day</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>F I Fine</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>OT I Overtime</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>L I Paid Leave</button>
                        <button className='btns bg-[red] text-[#fff] rounded-md text-[14px] font-medium' type='submit'>A I Absent</button>
     

                      



                    </div>
                </div>
                <p className='text-[blue] text-[14px] mt-[40px]'>Add Note - Login</p>

            </div>
            <div className='bg-[#f1f1f1] p-[20px] mt-[18px] rounded-md'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-[16px]'>Aman Designer FC</p>
                        <p className='text-[red] text-[14px]'>Absent</p>
                    </div>
                    <div className='flex gap-[18px]'>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>P I Present</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>HD I Half Day</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>F I Fine</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>OT I Overtime</button>
                        <button className='btns bg-[#fff] rounded-md text-[14px] font-medium' type='submit'>L I Paid Leave</button>
                        <button className='btns bg-[red] text-[#fff] rounded-md text-[14px] font-medium' type='submit'>A I Absent</button>
                    </div>
                </div>
                <p className='text-[blue] text-[14px] mt-[40px]'>Add Note - Login</p>

            </div>
        </div>

    );
}





export default Attendence_summary