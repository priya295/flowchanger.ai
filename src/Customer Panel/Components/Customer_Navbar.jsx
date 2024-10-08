import React, { useState } from "react";
import logo from "../../Assets/Images/logo_black.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Customer_NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="shadow">
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <img className="h-20 max-[1220px]:h-[45px]" src={logo} alt="logo" />

        {/* Menu toggle button (shown only on mobile) */}
        <button className="max-[1080px]:block hidden" onClick={handleToggle}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Menu items (visible on desktop, toggleable on mobile) */}
        <ul
          className={`flex gap-6 max-[1220px]:text-[13px] max-[1080px]:${
            isOpen ? "block" : "hidden"
          } ${isOpen ? "absolute editmenu" : "hidden"} lg:flex lg:static lg:w-auto`}
        >
          <li>
            <NavLink to="/knowledge-base">Knowledge Base</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/invoices">Invoices</NavLink>
          </li>
          <li>
            <NavLink to="/contracts">Contracts</NavLink>
          </li>
          <li>
            <NavLink to="/estimates">Estimates</NavLink>
          </li>
          <li>
            <NavLink to="/proposals">Proposals</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/knowledge-base">Knowledge Base</NavLink>
          </li>
          <li>
            <AccountBoxIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Customer_NavBar;
