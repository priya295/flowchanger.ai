import React, { useState } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdOutlinePermIdentity } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import Attendance from "../Staff/Attendance/Attendance";

const Staff = () => {
  const [activeTab, setactiveTab] = useState("Staff");

  const handleActiveClick = (tab) => {
    setactiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Staff":
        return <div></div>;
      case "Attendance":
        return <div><Attendance/></div>;
      case "Bank Details":
        return <div></div>;
      case "Salary Details":
        return <div></div>;
      case "Leave Balances & Policy":
        return <div></div>;
      case "Penalty & Overtime":
        return <div></div>;
      case "Permissions":
        return <div></div>;
      default:
        return <div>Overview Content</div>;
    }
  };
  return (
    <div className='absolute top-[95px] left-[240px]'>
        <div className="m-8">
          <div>
            <span className="text-black  text-[30px] font-medium">
              My Staff
            </span>
          </div>

          <div className="flex items-center justify-center space-x-6 border mt-8 h-[58px] shadow-md rounded-xl ">
            <div className="flex items-center space-x-[4.7rem] text-[20px]">
              <button
                onClick={() => handleActiveClick("Staff")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Staff"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <MdOutlinePeopleAlt />
                <span className="text-sm font-medium">Staff</span>
              </button>

              <button
                onClick={() => handleActiveClick("Attendance")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Attendance"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaCalendarAlt />
                <span className="text-sm font-medium">Attendance</span>
              </button>

              <button
                onClick={() => handleActiveClick("Bank Details")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Bank Details"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <CiBank />
                <span className="text-sm font-medium">Bank Details</span>
              </button>

              <button
                onClick={() => handleActiveClick("Salary Details")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Salary Details"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaHandHoldingDollar />
                <span className="text-sm font-medium">Salary Details</span>
              </button>

              <button
                onClick={() => handleActiveClick("Leave Balances & Policy")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Leave Balances & Policy"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <BsDoorOpenFill />
                <span className="text-sm font-medium">
                  Leave Balances & Policy
                </span>
              </button>

              <button
                onClick={() => handleActiveClick("Penalty & Overtime")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Penalty & Overtime"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaBusinessTime />
                <span className="text-sm font-medium">Penalty & Overtime</span>
              </button>

              <button
                onClick={() => handleActiveClick("Permissions")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Permissions"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2  pb-2 cursor-pointer`}
              >
                <MdOutlinePermIdentity />
                <span className="text-sm font-medium">Permissions</span>
              </button>
            </div>
          </div>

          <div className="mt-6">{renderTabContent()}</div>
        </div>
     </div>
  );
};

export default Staff;
