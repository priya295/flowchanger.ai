import React, { useState } from "react";
import logo from "../../Assets/Images/logo_black.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

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
        <img className="h-20 max-[1220px]:h-[45px] " src={logo} alt="logo" />

        {/* Menu toggle button (shown only on mobile) */}
        <button
          className="text-black text-3xl max-[1000px]:block hidden"
          onClick={handleToggle}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Menu items (visible on desktop, toggleable on mobile) */}
        <ul
          className={`flex gap-6 max-[1220px]:text-[13px] max-[1000px]:${
            isOpen ? "block" : "hidden"
          } max-[1000px]:absolute max-[1000px]:bg-white max-[1000px]:flex-col max-[1000px]:top-[80px] max-[1000px]:right-0 max-[1000px]:mr-6 max-[1000px]:text-[18px] max-[1000px]:font-medium max-[1000px]:space-y-5 max-[1000px]:shadow max-[1000px]:p-5 `}
        >
          <li>
            <Link to="/knowledge-base">Knowledge Base</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>
          <li>
            <Link to="/contracts">Contracts</Link>
          </li>
          <li>
            <Link to="/estimates">Estimates</Link>
          </li>
          <li>
            <Link to="/proposals">Proposals</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/knowledge-base">Knowledge Base</Link>
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
