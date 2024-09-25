import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const SideBar = ({ toggleSideBar }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
        mass: 0.8,
        restDelta: 0.001
      }
    }
  };

  const sidebarItems = [
    { link: "#", item: 'Dashboard' },
    { link: "/addProject", item: 'Project' },
    { link: "#", item: 'Task' },
    { link: "#", item: 'Client' },
    { link: "#", item: 'Report' },
    { link: "/", item: 'Staff' },
    { link: "#", item: 'Setting' }
  ];

  return (
    <motion.div
      initial="closed"
      animate={toggleSideBar ? 'open' : 'closed'}
      variants={sidebarVariants}
      className="fixed top-0 left-0 z-20 h-full"
    >
      <div className="w-64 bg-gray-800 h-screen overflow-y-auto">
        <div className="text-white text-2xl p-4">
          <img src="./images/Flowchangers.ai 4.png" alt="Flow Changer AI" className="max-w-full h-auto" />
        </div>
        <ul className="space-y-2 mt-6">
          {sidebarItems.map((item, index) => (
            <NavLink to={item.link}>
            <li 
              key={index} 
              className={`p-4 rounded-l-full cursor-pointer transition-colors duration-200 ${
                item.item === 'Staff' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.item}
            </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
