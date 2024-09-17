import React from "react";
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

const overView = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />

        <div>
          <div class="m-8">
            <span class="text-[#9A93B3]  text-[20px] font-medium">
              Projects / Addodle
            </span>
            <div className="flex mt-3 items-center gap-3">
              <div class="flex items-center gap-2">
                <span class="text-black  text-[30px] font-medium">Addodle</span>
                {/*- Profile Pictures -*/}
                <div class="flex items-center space-x-2">
                  <img
                    class="rounded-full border-2 border-white"
                    src={details}
                    alt="Profile 1"
                  />
                </div>
              </div>
              {/*-- Status Badge -*/}
              <div class="bg-green-100 w-[115px] h-[38px] text-[#4BA665] rounded-xl px-3 py-1 text-sm flex items-center justify-center">
                Finished
              </div>
              {/*-- More Dropdown --*/}

              <button class="ml-2 flex items-center h-[38px] w-[82px] justify-center rounded-md border-[#B1B1B1] gap-1 absolute right-12 border">
                <img src={arrowbtn} alt="" />
                More
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center space-x-4 border mx-7 h-[58px] shadow-md rounded-xl ">
            <div class="flex items-center space-x-[4.7rem] text-[20px]">
              <div class="flex items-center space-x-3 text-gray-500 hover:border-b-2 pb-2 border-[#511992]">
                <MdManageSearch />
                <span class="text-sm font-medium">Overview</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <FaTasks />
                <span class="text-sm font-medium">Task</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <PiFiles />
                <span class="text-sm font-medium">Files</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <GoCommentDiscussion />
                <span class="text-sm font-medium">Discussions</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <FaChartGantt />
                <span class="text-sm font-medium">Gantt</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <IoTicketSharp />
                <span class="text-sm font-medium">Tickets</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <FaNoteSticky />
                <span class="text-sm font-medium">Notes</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <MdLocalActivity />
                <span class="text-sm font-medium">Activity</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <FaCalendarAlt />
                <span class="text-sm font-medium">Calendar</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-400 hover:border-b-2 pb-2 border-[#511992] cursor-pointer">
                <IoIosPeople />
                <span class="text-sm font-medium">People</span>
              </div>
            </div>
            <div></div>
          </div>

          <div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default overView;
