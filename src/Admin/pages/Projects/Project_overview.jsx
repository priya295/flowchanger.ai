import React, { useState } from "react";
import details from "../../../Assets/Images/Details.png";
import arrowbtn from "../../../Assets/Images/arrowbtn.png";
import { MdManageSearch } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { FaChartGantt } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { MdLocalActivity } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Over from "./View";
// import Task from "./All_Task";
import Files from "./Files";
import Discussion from "./Discussion";
import Tickets from "./Tickets";
import Notes from "./Nots";
import Activity from "./Activity";
import Calender from "./Calender";
import People from "./People";
import Task from './Task'

const Projects = () => {
  const [activeTab, setactiveTab] = useState("Overview");

  const handleActiveClick = (tab) => {
    setactiveTab(tab);
  };

  const tabIcons = {
    Overview: <MdManageSearch />,
    Task: <FaTasks />,
    Files: <PiFiles />,
    Discussions: <GoCommentDiscussion />,
    Gantt: <FaChartGantt />,
    Tickets: <IoTicketSharp />,
    Notes: <FaNoteSticky />,
    Activity: <MdLocalActivity />,
    Calendar: <FaCalendarAlt />,
    People: <IoIosPeople />,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div>
            <Over/>
          </div>
        );
      case "Task":
        return (
          <div>
            <Task/>
          </div>
        );
      case "Files":
        return (
          <div>
            <Files />
          </div>
        );
      case "Discussions":
        return (
          <div>
            <Discussion />
          </div>
        );
      case "Gantt":
        return <div>Gantt Content</div>;
      case "Tickets":
        return (
          <div>
            <Tickets />
          </div>
        );
      case "Notes":
        return (
          <div>
            <Notes />
          </div>
        );
      case "Activity":
        return (
          <div>
            <Activity />
          </div>
        );
      case "Calendar":
        return (
          <div>
            <Calender />
          </div>
        );
      case "People":
        return (
          <div>
            <People />
          </div>
        );
      default:
        return <div>Overview Content</div>;
    }
  };

  return (
    <div className="">
      <div>
        <span className="text-[#9A93B3] text-[20px] font-medium max-[600px]:text-[15px]">
          Projects / Addodle
        </span>
        <div className="flex mt-3 items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-black text-[30px] font-medium max-[600px]:text-[25px]">
              Addodle
            </span>
            {/*- Profile Pictures -*/}
            <div className="flex items-center space-x-2">
              <img
                className="rounded-full border-2 border-white"
                src={details}
                alt="Profile 1"
              />
            </div>
          </div>
          {/*-- Status Badge -*/}
          <div className="bg-green-100 w-[115px] h-[38px] text-[#4BA665] rounded-xl  flex items-center justify-center">
            Finished
          </div>
          {/*-- More Dropdown --*/}

          <button className="ml-2 flex items-center h-[38px] w-[82px] xjustify-center rounded-md border-[#B1B1B1] gap-1 absolute right-12 border max-[720px]:mb-[6rem]">
            <img src={arrowbtn} alt="" />
            More
          </button>
        </div>
      </div>

      <div className="flex items-center mt-8 border h-[58px] shadow-md rounded-xl overflow-x-auto  whitespace-wrap gap-[4rem] pl-[20px]">
          {[
            "Overview",
            "Task",
            "Files",
            "Discussions",
            "Gantt",
            "Tickets",
            "Notes",
            "Activity",
            "Calendar",
            "People",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => handleActiveClick(tab)}
              className={`flex items-center space-x-2 sm:space-x-3 ${
                activeTab === tab
                  ? "text-black border-b-2 border-[#511992] text-base sm:text-lg lg:text-xl"
                  : "text-gray-400 text-sm sm:text-base"
              } hover:border-b-2 pb-2 cursor-pointer`}
            >
              {tabIcons[tab]} {/* Render the corresponding icon */}
              <span className="text-sm sm:text-base">{tab}</span>
            </button>
          ))}
        </div>
      <div className="mt-10">{renderTabContent()}</div>
    </div>
  );
};

export default Projects;
