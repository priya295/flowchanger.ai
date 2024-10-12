import React from 'react'
import { Link } from 'react-router-dom'

const RunPayroll = () => {
    return (
        <div className='mt-[20px]'>
            <div className='flex justify-between items-center flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
                <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>

                    <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />

                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Branches</option>
                        <option>Demo Main Branchs</option>

                    </select>


                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Departments</option>
                        <option>Website</option>

                    </select>


                </div>
                <div className=''>
                    <Link to="#" className='text-[#1890ff] font-normal'>Reset</Link>
                </div>
            </div>
        </div>
    )
}

export default RunPayroll