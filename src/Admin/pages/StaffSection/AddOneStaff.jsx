import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import profile from '../../../Assets/Images/profile.svg'
const AddOneStaff = () => {
  return (
    <div className='add-one-staff'>
        <Link to="/staff-menu" className='flex items-center gap-[10px] text-[20px] font-medium		'><KeyboardBackspaceIcon/>Add Staff</Link>
        {/* <div className='flex justify-between mt-4 border border-l-2 p-3 rounded-md shadow'>
            <div className=''>
                <img src={profile} className='bg-[#CCCCCC] rounded-full p-2 w-[40px] '/>
                <h5 className='mt-2'>Add Staff</h5>
            </div>
            <div className='flex gap-[20px] items-center'>
                <button className='first-btn'>Cancel</button>
                <button className='second-btn'>Save</button>
                
            </div>

        </div> */}

        <form className=' w-[100%] xl:w-[80%] m-auto mt-[60px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >
            <div className='flex w-[100%] gap-[10px] justify-between  xl:mb-4 mb-[6px] xl:flex-row flex-col'>
                <div className='w-[100%] xl:w-[48%] 2xl:w-[48%]  '>
                <label className='text-[14px]'>Name</label><br/>
                <input type='text' placeholder='Enter Name' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] 	  placeholder:font-font-normal text-[14px]'/>
                </div>
              
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Job Tittle</label><br/>
                <input type='text' placeholder='Enter Job Title' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Branch</label><br/>
                <select  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Please Select Branch</option>
                </select>
                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Department</label><br/>
                <select  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Please Select Department</option>
                </select>
                </div>

            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Role</label><br/>
                <select  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Please Select Role</option>
                </select>
                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Mobile</label><br/>
                <input type='number' placeholder='Enter Mobile ' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Login OTP</label><br/>
                <input type='number' placeholder='Enter OTP' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Gender</label><br/>
                <select  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Male</option>
                    <option>Female</option>
                    
                </select>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Official Email ID</label><br/>
                <input type='email' placeholder='Enter Email' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Date of Joining</label><br/>
                <input type='date' placeholder='Select Date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                
                </div>


            </div>


            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Address</label><br/>
                <input type='email' placeholder='Enter Address' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                


            </div>


            <div className='flex justify-end mt-4 p-3'>
           
            <div className='flex gap-[20px] items-center'>
                <button className='first-btn'>Cancel</button>
                <button className='second-btn'>Save</button>
                
            </div>

        </div>
        </form>

    </div>
  )
}

export default AddOneStaff