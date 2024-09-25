import React from 'react';
import { FiShare, FiCheck, FiBell, FiUser, FiSearch } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";

const NavBar = ({ handleToggleSideBar, toggleSideBar }) => {
  return (
    <header className={`bg-white shadow-md p-4 ${toggleSideBar ? "ml-64" : "ml-0"} transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <div className='flex items-center'>
          <button className='mr-4 text-gray-600 hover:text-purple-600' onClick={handleToggleSideBar}>
            <FaBars className='text-2xl'/>
          </button>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        <img src='./images/plus icon (1).png' className='ml-2' alt="add icon"/>
        </div>
        <div className="flex items-center space-x-6">
        
          <FiShare className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"/>
          <FiCheck className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer"/>
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
            <img src="./images/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <FiBell className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
          <FiUser className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;