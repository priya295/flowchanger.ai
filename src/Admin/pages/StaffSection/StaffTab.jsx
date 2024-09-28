import React from 'react'
import Search from '../../../Assets/Images/search.svg'
const StaffTab = () => {
  return (
    <div className='staff-tab mt-[20px]'>
            <div className='flex justify-between'>
                <div className='flex gap-[20px]'>
                    <div className='searching-input relative'>
                        <img src={Search} className='absolute left-2 top-3'/>
                        <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] focus-visible:outline-none' placeholder='Search'/>
                        
                    </div>

                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] w-[240px] focus-visible:outline-none'>
                        <option>All Departments</option>
                    </select>

                </div>
                <div>

                </div>
            </div>
    </div>
  )
}

export default StaffTab