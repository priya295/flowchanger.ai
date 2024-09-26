import React from "react";
import refresh from "../Images/refresh.png";
import app_menu from "../Images/app-menu.png";
import photo from "../Images/photo.png";
import eye from "../Images/eye.png";
import edit_outline from "../Images/edit-outline.png";
import three_dot from "../Images/dots-three-outline.png";


const users = () => {

  return (
    <>
      

          <div className='absolute top-[95px] left-[240px]'>
            {/*--------- User name and create user button ------------ --*/}
            <div className="flex justify-between items-center">
              <h1 class="text-2xl p-8">Users</h1>
              <button className="mr-9 bg-[#511992] text-white h-[37px] w-[115px] rounded">
                Create User
              </button>
            </div>

            {/*--------- Search Functin ------------ --*/}
            <div className="flex justify-end items-center mt-4">
              <input
                type="text"
                placeholder="Search"
                class="mt-1 mr-4 block p-2 border w-[315px] h-[46px] border-[#DBDCDE]  bg-[#F4F5F9]  rounded-md shadow-sm sm:text-sm"
              />

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

            {/*--------- user data and status ------------ --*/}

            <div className="flex gap-[18.5rem] list-none mt-12 ml-8 mr-9 p-6 border-t border-x-2 rounded-t-[7px] bg-[#511992] text-white">
              <li>Users</li>
              <li>Role</li>
              <li>Subscriptions</li>
              <li>Status</li>
              <li>Action</li>
            </div>

            <div class="flex ml-8 mr-[38px] items-center p-4 bg-[#F3F3F3] text-[#89868D]">
              <div class="flex items-center border-[#C0B9B9] ">
                <img
                  class="w-10 h-10 ml-3 rounded-full"
                  src={photo}
                  alt="User Avatar"
                />

                <div className="items-center ml-1">
                  <div className="flex gap-1 items-center">
                    <p class="text-sm font-semibold">John</p>
                    <img src={eye} alt="" />
                    <img src={edit_outline} alt="" />
                  </div>
                  <p class="text-sm">John@gmail.com</p>
                </div>

                <div>
                  <span class="text-xs bg-[#3ED9EE] text-[#FFFFFF] border-r px-2 py-1 ml-[10.2rem] rounded-full">
                    Admin
                  </span>
                </div>
              </div>

              <div class="flex-1 mx-8 ml-[15.5rem] border-[#C0B9B9] border-x-[1px] pl-7 pr-11">
                <div class="flex  items-center mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <p class="text-sm font-semibold text-[#89868D]">
                        Premium
                      </p>
                      <span class="text-xs bg-[#63ED7A] text-white px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                    <p class="text-xs text-gray-500">Start: 2025-03-24</p>
                    <p class="text-xs text-gray-500">End: 2026-03-24</p>
                  </div>
                </div>

                <hr class="border-[#C0B9B9] my-2 w-[23rem]" />

                <div class="flex items-center">
                  <div>
                    <div>
                      <p class="text-sm font-semibold text-[#89868D]">
                        Enterprise Plan
                        <span class="text-xs ml-2 bg-[#FFC407] text-white px-2 py-1 rounded-full">
                          Up Coming
                        </span>
                      </p>
                    </div>
                    <p class="text-xs text-gray-500">Start: 2025-03-24</p>
                    <p class="text-xs text-gray-500">End: 2026-03-24</p>
                  </div>
                  <h1 class="text-xs bg-[#63ED7A] text-white px-2 py-1 rounded-full ml-[12.5rem] mt-[-68px]">
                    Active
                  </h1>
                </div>
              </div>

              
              <div class="flex flex-col items-end ml-[85px] mt-[5rem]">
                <button className="-translate-y-6 mr-5 bg-gray-300">
                  <img src={three_dot} alt="" />
                </button>

                <button class="text-sm text-[#2B2A2D] bg-white border border-gray-300 mt-[-22px] px-4 py-2 rounded-lg mr-4 hover:bg-gray-100">
                  + Add subscription
                </button>
              </div>
               
            </div>
          </div>
        
    </>
  );
};

export default users;
