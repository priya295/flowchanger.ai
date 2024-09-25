import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import details from "../Images/Details.png";
import arrowbtn from "../Images/arrowbtn.png";
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
import Task from './Task'
import Files from './Files'
import Discussion from "./Discussion";
import Tickets from './Tickets'
import Notes from './Nots'
import Activity from "./Activity";
import Calender from "./Calender";
import People from './People'

const Projects = () => {

  const [activeTab, setactiveTab] = useState("Overview");

  const handleActiveClick = (tab) => {
    setactiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <div><Over/></div>;
      case "Task":
        return <div><Task/></div>;
      case "Files":
        return <div><Files/></div>;
      case "Discussions":
        return <div><Discussion/></div>;
      case "Gantt":
        return <div>Gantt Content</div>;
      case "Tickets":
        return <div><Tickets/></div>;
      case "Notes":
        return <div><Notes/></div>;
      case "Activity":
        return <div><Activity/></div>;
      case "Calendar":
        return <div><Calender/></div>;
      case "People":
        return <div><People/></div>;
      default:
        return <div>Overview Content</div>;
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />

        <div>
          <div className="m-8">
            <span className="text-[#9A93B3]  text-[20px] font-medium">
              Projects / Addodle
            </span>
            <div className="flex mt-3 items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-black  text-[30px] font-medium">
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
              <div className="bg-green-100 w-[115px] h-[38px] text-[#4BA665] rounded-xl px-3 py-1 text-sm flex items-center justify-center">
                Finished
              </div>
              {/*-- More Dropdown --*/}

              <button className="ml-2 flex items-center h-[38px] w-[82px] justify-center rounded-md border-[#B1B1B1] gap-1 absolute right-12 border">
                <img src={arrowbtn} alt="" />
                More
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 border mx-7 h-[58px] shadow-md rounded-xl ">
            <div className="flex items-center space-x-[4.7rem] text-[20px]">
              <button
                onClick={() => handleActiveClick("Overview")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Overview"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <MdManageSearch />
                <span className="text-sm font-medium">Overview</span>
              </button>

              <button
                onClick={() => handleActiveClick("Task")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Task"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaTasks />
                <span className="text-sm font-medium">Task</span>
              </button>

              <button
                onClick={() => handleActiveClick("Files")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Files"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <PiFiles />
                <span className="text-sm font-medium">Files</span>
              </button>

              <button
                onClick={() => handleActiveClick("Discussions")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Discussions"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <GoCommentDiscussion />
                <span className="text-sm font-medium">Discussions</span>
              </button>

              <button
                onClick={() => handleActiveClick("Gantt")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Gantt"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaChartGantt />
                <span className="text-sm font-medium">Gantt</span>
              </button>

              <button
                onClick={() => handleActiveClick("Tickets")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Tickets"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <IoTicketSharp />
                <span className="text-sm font-medium">Tickets</span>
              </button>

              <button
                onClick={() => handleActiveClick("Notes")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Notes"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaNoteSticky />
                <span className="text-sm font-medium">Notes</span>
              </button>

              <button
                onClick={() => handleActiveClick("Activity")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Activity"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <MdLocalActivity />
                <span className="text-sm font-medium">Activity</span>
              </button>

              <button
                onClick={() => handleActiveClick("Calendar")}
                className={`flex items-center space-x-3 ${
                  activeTab === "Calendar"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <FaCalendarAlt />
                <span className="text-sm font-medium">Calendar</span>
              </button>

              <button
                onClick={() => handleActiveClick("People")}
                className={`flex items-center space-x-3 ${
                  activeTab === "People"
                    ? "text-black border-b-2 border-[#511992]"
                    : "text-gray-400"
                } hover:border-b-2 pb-2 cursor-pointer`}
              >
                <IoIosPeople />
                <span className="text-sm font-medium">People</span>
              </button>
            </div>
            <div></div>

          </div>

          <div className="m-8">{renderTabContent()}</div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
