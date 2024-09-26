import React from "react";
import photo from "../Images/photo.png";
import refresh from "../Images/refresh.png";
import app_menu from "../Images/app-menu.png";
import three_dot from "../Images/dots-three-outline.png";

const userDetails = () => {
  return (
    <div className='absolute top-[95px] left-[240px]'>
      

        <div>
          <div className="flex justify-between items-center">
            <h1 class="text-2xl p-8">User Detail</h1>
            <button className="mr-9 bg-[#511992] text-white h-[37px] w-[115px] rounded">
              Create User
            </button>
          </div>

          <div class="flex gap-[15rem] mt-2">
            {/*-- Profile section --*/}

            <div class="flex items-center space-x-4 py-1 border border-[#DBDBDB] pr-[24.8rem] rounded-md ml-8">
              <img src={photo} alt="profile" class="rounded-full ml-1" />
              <div>
                <h3 class="text-[12px] ">Current package</h3>
                <span class="inline-block bg-[#FFC407] text-black text-sm px-2 py-1 rounded-full">
                  Premium
                </span>
              </div>
            </div>

            {/*-- Dates section --*/}
            <div class="flex gap-7 ml-[-13rem] ">
              <div className="border border-[#DBDBDB] pr-[24.8rem] rounded-md">
                <span class="text-black  block text-sm pl-1 pt-1">
                  From Date
                </span>
                <span class="text-black pl-1 text-sm">23-Mar-2024</span>
              </div>
              <div className="border border-[#DBDBDB] pr-[24.8rem] rounded-md">
                <span class="text-black  block text-sm pl-1 pt-1">To Date</span>
                <span class="text-black pl-1 text-sm">23-Mar-2025</span>
              </div>
            </div>
          </div>

          {/*- Details section --*/}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-sm mt-3 ml-2">
            {/*-- Left column --*/}
            <div class="space-y-4 text-center">
              <div className="flex  gap-[12rem]">
                <span class="text-black block">Name:</span>
                <span class="text-[#B6B3B3] ml-6 ">John</span>
              </div>
              <div className="flex gap-[12rem]">
                <span class="text-black block">User Type:</span>
                <span class="text-[#B6B3B3]">Admin</span>
              </div>
              <div className="flex gap-[12rem]">
                <span class="text-black block">Contact:</span>
                <span class="text-[#B6B3B3] ml-3">admin@gmail.com</span>
              </div>
              <div className="flex gap-[12rem]">
                <span class="text-black block">Status:</span>
                <span class="inline-[#B6B3B3] ml-6 bg-[#63ED7A] text-sm px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex gap-[12rem]">
                <span class="text-black block">Date of Birth:</span>
                <span class="text-[#B6B3B3] ml-[-14px]">30-Nov--0001</span>
              </div>
              <div className="flex gap-[12rem]">
                <span class="text-black block">Date of Joining:</span>
                <span class="text-[#B6B3B3] ml-[-2.1rem]">30-Nov--0001</span>
              </div>
            </div>

            {/*-- Right column --*/}
            <div class="space-y-4">
              <div>
                <span class="text-black block">Designation:</span>
              </div>
              <div>
                <span class="text-black block">Address:</span>
              </div>
              <div>
                <span class="text-black block">City:</span>
              </div>
              <div>
                <span class="text-black block">State:</span>
              </div>
              <div>
                <span class="text-black block">Zip Code:</span>
              </div>
              <div>
                <span class="text-black block">Country:</span>
              </div>
            </div>
          </div>

          <div class="flex ml-[-1.4rem] gap-[18rem] ">
            {/*-- Package Summary --*/}
            <div class="flex flex-col items-center p-2 ml-5 ">
              <h2 class="text-lg mb-4 mr-[4rem]">Package Summary</h2>
              <div class="flex flex-col items-center rounded mb-4">
                <span class="text-[#6663E8] text-[12px] p-[2px] px-3 border">
                  Premium
                </span>

                <span class="bg-[#FC544B] text-white text-[12px] px-4 py-1 p-1 rounded-full  ">
                  Paid
                </span>
              </div>

              <div class="text-[22px] font-medium mb-4">₹ 20000</div>
              <p class="text-gray-500 text-[9px] mt-[-1.5rem] mr-4">
                For 12 Month(s)
              </p>

              <div>
                <ul class="mt-4 ml-7 space-y-3 text-[14px] font-light ">
                  <li class="flex items-center space-x-2 ml-[3.8rem]">
                    <svg
                      class="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited Storage</span>
                  </li>
                  <li class="flex items-center space-x-2 ml-[3.8rem]">
                    <svg
                      class="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited Employee(s)</span>
                  </li>
                  <li class="flex items-center space-x-2 ml-[3.8rem]">
                    <svg
                      class="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited Workspace(s)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/*-- Modules --*/}
            <div class="flex flex-wrap gap-10 mt-2.5">
              <div class="flex flex-col space-y-3">
                <h2 class="text-[16px]  font-semibold mb-4">Modules</h2>
                <div className="flex gap-[8rem]">
                  <ul class="space-y-3 mt-1">
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Projects</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Finance</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Leave Requests</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Notifications</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Time Tracker</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Knowledgebase</span>
                    </li>
                  </ul>

                  <ul class="space-y-3 mt-1">
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Tasks</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Users</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Notes</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>SMS Notifications</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Leads</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Payslip</span>
                    </li>
                  </ul>

                  <ul class="space-y-3 mt-1">
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Calendar</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Clients</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mail</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Meetings</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Todos</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Gantt chart</span>
                    </li>
                  </ul>

                  <ul class="space-y-3 mt-1">
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Chat</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Activity Logs</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Announcements</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Support system</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Contracts</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <svg
                        class="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-5.293a1 1 0 011.415 0l3-3a1 1 0 111.415 1.415l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l1.879 1.879z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Statuses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-[2.1rem]">
          <h1 className="text-[18px] font-medium mt-7">Subscription list</h1>
          <div class="flex items-center justify-between p-4">
            {/*-- Left side: Dropdown and Filter button --*/}
            <div class="flex items-center space-x-10 ml-[-1rem]">
              {/*-- Dropdown --*/}
              <div class="relative">
                <select class=" w-[35rem] appearance-none border rounded-lg py-2 px-4 border-[#DBDCDE] bg-[#F4F5F9]">
                  <option>All</option>
                  {/*-- Add more options here --*/}
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/*-- Filter Button --*/}
              <button class="bg-[#511992] text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                Filter
              </button>
            </div>

            {/*-- Right side: Icon buttons --*/}
            <div class="flex space-x-4 mr-[-16px]">
              {/*-- Refresh icon --*/}
              <div className=" flex mt-1">
                <button className="  h-[46px] w-[58px] bg-[#DADDE1] rounded-s">
                  {" "}
                  <img className="px-5 py-3" src={refresh} alt="refresh" />
                </button>
                <button className="  h-[46px] w-[58px] bg-[#CDD0D4] mr-9 rounded-e">
                  {" "}
                  <img className="px-5 py-3" src={app_menu} alt="app-menu" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden mx-9 mt-10 border-[#DBDBDB] rounded-t-lg">
          <table class=" w-full bg-white">
            <thead class="w-full bg-[#511992] text-white text-center text-[15px]">
              <tr className="text-[15px]">
                <th class="w-1/6 px-4 py-2">User Name</th>
                <th class="w-1/6 px-4 py-2">Package</th>
                <th class="w-1/6 px-4 py-2">Type</th>
                <th class="w-1/6 px-4 py-2">Start Day</th>
                <th class="w-1/6 px-4 py-2">End Day</th>
                <th class="w-1/6 px-4 py-2">Tenure</th>
                <th class="w-1/6 px-4 py-2">Months</th>
                <th class="w-1/6 px-4 py-2">Amount</th>
                <th class="w-1/6 px-4 py-2">Payment Method</th>
                <th class="w-1/6 px-4 py-2">Purchase date</th>
                <th class="w-1/6 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#89868D] text-[13px] font-normal">
              <tr class="bg-gray-100 border-b text-center">
                <td class="px-4 py-2  border  ">Admin</td>

                <div className="border-r text-start p-3">
                  <td class="px-4 py-2 ">Enterprise Plan</td>
                  <span class="bg-[#FFC107] text-white rounded-full px-2 py-1 ml-3 text-[10.22px]">
                    Upcoming plan
                  </span>
                </div>
                <td class="px-4 py-2">
                  <span class="bg-[#FC544B] text-white rounded-full px-2 py-1 text-xs ml-1">
                    Paid
                  </span>
                </td>
                <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                <td class="px-4 py-2 border">quarterly</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">₹ 8000</td>
                <td class="px-4 py-2 border">Razorpay</td>
                <td class="px-4 py-2 border">2024-05-18 21:55:42</td>
                <td class="px-4 py-2 border">
                  <button class="text-gray-500 hover:text-gray-900">
                    <img src={three_dot} alt="" />
                  </button>
                </td>
              </tr>
              <tr class="bg-gray-50 text-center">
                <td class="px-4 py-2 border">Admin</td>
                <div className="text-start p-3 border-b">
                  <td class="px-4 py-2">Enterprise Plan</td>
                  <span class="bg-[#63ED7A] text-white rounded-full px-2 py-1 ml-3 text-[10.22px]">
                    Active
                  </span>
                </div>
                <td class="px-4 py-2 border">
                  <span class="bg-[#FC544B] text-white rounded-full px-2 py-1 text-xs ml-1">
                    Paid
                  </span>
                </td>
                <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                <td class="px-4 py-2 border">Yearly</td>
                <td class="px-4 py-2 border">12</td>
                <td class="px-4 py-2 border">₹ 20000</td>
                <td class="px-4 py-2 border">Razorpay</td>
                <td class="px-4 py-2 border">2024-05-18 21:55:42</td>
                <td class="px-4 py-2 border">
                  <button class="text-gray-500">
                    <img src={three_dot} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className="m-[2.2rem] text-[#89868D] text-[16px]">
          Showing 1 to 2 of 2 rows
        </h1>

        <div className="flex justify-between place-items-start">
          <h1 className="text[16px] font-semibold ml-9">Transaction list</h1>
          <div>
            <button className="  h-[46px] w-[58px] bg-[#DADDE1] rounded-s">
              {" "}
              <img className="px-5 py-3" src={refresh} alt="refresh" />
            </button>
            <button className="  h-[46px] w-[58px] bg-[#CDD0D4] mr-9 rounded-e">
              {" "}
              <img className="px-5 py-3" src={app_menu} alt="app-menu" />
            </button>
          </div>
        </div>

        <div class="overflow-hidden mx-9 mt-10 border border-[#DBDBDB] rounded-t-lg">
          <table class="w-full bg-[#FAFAFA]">
            <thead>
              <tr class="w-full bg-[#511992] text-white text-center text-[15px]">
                <th class="py-2 px-12">User Name</th>
                <th class="py-2 px-12">Package</th>
                <th class="py-2 px-12">Type</th>
                <th class="py-2 px-12">Transaction id</th>
                <th class="py-2 px-12">Amount</th>
                <th class="py-2 px-12">Currency</th>
                <th class="py-2 px-12">Message</th>
                <th class="py-2 px-12">Status</th>
                <th class="py-2 px-12">Date Created</th>
                <th class="py-2 px-12">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-4 px-6 text-center" colspan="10">
                  No matching records found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
     
    </div>
  );
};

export default userDetails;
