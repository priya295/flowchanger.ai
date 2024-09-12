import React from 'react'
import menu from '../Images/menu-fill.png'
import photo from '../Images/photo.png'
import group from '../Images/Group.png'

const Navbar = () => {
  return (
    <>
    <div className='flex h-[60px] items-center border-b-2 shadow-sm '>
        <div>
            <img className='p-5'  src= {menu} alt="" />
        </div>   

        <div className='flex items-center gap-4 justify-end w-[95%] mr-8'>
            <img src= {photo} alt="" />
            <span className=' text-[20px]'>Hello, John</span>
            <img src= {group} alt="" />
        </div>   

    </div>
    </>
    
  )
}

export default Navbar
