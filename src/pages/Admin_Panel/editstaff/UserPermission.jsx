import React from 'react'

const UserPermission = () => {
  return (
    <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '>
    <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0  pl-[0] top-0 bg-white'>

        <h3 className='font-medium'>User Permission</h3>
        <button className='second-btn'>Update Details</button>
    </div>

    <h2 className='bg-[#f6f9fa] pt-[10px] pb-[10px] pl-[14px] rounded-md font-normal shadow'>Select Roles</h2>
    <form className=' w-[100%] xl:w-[100%] m-auto mt-[30px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >
      
        <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
            <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Roles</label><br />
                <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Graphic Designer</option>
                    <option>Second</option>
                    <option>Third</option>
                    
                </select>
            </div>

            <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Departments</label><br />
                <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Graphic Designer</option>
                    <option>Second</option>
                    <option>Third</option>
                    
                </select>
            </div>


        </div>

       


 

     

       
    </form>
    </div>
  )
}

export default UserPermission