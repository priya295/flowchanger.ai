import React from "react";
import SellIcon from "@mui/icons-material/Sell";

const NewTicketForm = () => {
  return (
    <form className="overflow-x-auto">
      {/* -- Header Name --*/}
      <h1 className="text-[25px] font-medium">Ticket Information</h1>

      {/* -- Upper Input --*/}
      <div className="w-[100%] flex  mt-10 gap-[6vw]">
        {/*--left Input--*/}
        <div className="w-[45%] ">
          <div>
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Subject
            </label>
            <input
              className="h-[46px] w-[100%] text-[14.22px] pl-4 text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              name=""
              id=""
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Contact
            </label>
            <input
              className="h-[46px] w-[100%] text-[14.22px] pl-4 text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              name=""
              id=""
            ></input>
          </div>

          <div className="flex w-[100%] gap-10 mt-4 max-[1000px]:block max-[1000px]:w-[100%]  ">
            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Name
              </label>
              <input
                className="h-[46px] w-[100%]  text-[14.22px] pl-4 text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
                name=""
                id=""
              ></input>
            </div>

            <div className="max-[1000px]:mt-5 w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Email Address
              </label>
              <input
                className="h-[46px] w-[100%] text-[14.22px] pl-4 text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
                name=""
                id=""
              ></input>
            </div>
          </div>

          <div className="flex w-[100%] items-center mt-4 gap-10 max-[1000px]:block max-[1000px]:mt-5 max-[1000px]:w-[100%] ">
            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Department
              </label>
              <select
                name=""
                id=""
                className="h-[46px] w-[100%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1 max-[1000px]:w-[100%]"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>

            <div className="max-[1000px]:mt-5 w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                CC
              </label>
              <input
                className="h-[46px] w-[100%] text-[14.22px] pl-4 text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1 max-[1000px]:w-[100%]"
                name=""
                id=""
              ></input>
            </div>
          </div>
        </div>

        {/*--Right Input--*/}
        <div className="w-[45%] mt-[22px]">
          <div>
            <SellIcon />
            <span className="text-[14.22px] ml-2">Tags</span>
          </div>

          <div className="mt-[40px]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Assign ticket (Default is current user)
            </label>
            <select
              name=""
              id=""
              className="h-[46px] w-[100%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Tarsem Singh</option>
            </select>
          </div>

          <div className="flex w-[100%] gap-10 mt-[17px] max-[1000px]:block">
            <div className="w-[50%] max-[1000px]:w-[43vw]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Priority
              </label>
              <select
                name=""
                id=""
                className="h-[46px] w-[100%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              >
                <option value="">Medium</option>
              </select>
            </div>

            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Service
              </label>
              <select
                name=""
                id=""
                className="h-[46px] w-[100%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              >
                <option value="">Medium</option>
              </select>
            </div>
          </div>

          <div className="mt-[15px]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Project
            </label>
            <select
              name=""
              id=""
              className="h-[46px] w-[100%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Project name</option>
            </select>
          </div>
        </div>
      </div>

      {/* -- Lower Input --*/}
      <div className="border-t border-[#DBDCDE] mt-12">
        <div className="flex items-center mt-4">
          <div className="w-[100%]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Ticket Body
            </label>
            <select
              name=""
              id=""
              className="h-[46px] w-[92%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Insert predefined reply</option>
            </select>
          </div>

          <div className="w-[100%]">
            <select
              name=""
              id=""
              className="h-[46px] w-[95%] pl-4 text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-7"
            >
              <option value="">Insert knowledge base link</option>
            </select>
          </div>
        </div>
      </div>

      {/* -- Personal Notes --*/}
      <div className="mt-4">
        <h1 className="text-[24px] text-[#585757] font-bold">Personal notes</h1>
        <ul className="text-[16px] text-[#1A1A1AB2] flex font-semibold gap-[3vw] mt-10">
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Table</li>
        </ul>
        <div className="mt-8 border  border-[#E1E1E2]">
          <div class="p-2 flex gap-5 border-b border-[#E1E1E2]  items-center bg-white overflow-auto">
            <button class="p-2 hover:bg-gray-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a1 1 0 01.74 1.64L5.808 9.4h5.792a4.5 4.5 0 014.5 4.5V16a1 1 0 11-2 0v-2.1a2.5 2.5 0 00-2.5-2.5H5.808l3.932 3.296a1 1 0 11-1.48 1.328l-6-5a1 1 0 010-1.328l6-5A1 1 0 019 4.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button class="p-2 hover:bg-gray-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 4.5a1 1 0 00-.74 1.64l3.932 3.26H8.396a4.5 4.5 0 00-4.5 4.5V16a1 1 0 102 0v-2.1a2.5 2.5 0 012.5-2.5h6.736l-3.932 3.296a1 1 0 001.48 1.328l6-5a1 1 0 000-1.328l-6-5A1 1 0 0011 4.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button class="p-2 hover:bg-gray-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2v3h1a2 2 0 012 2v3a2 2 0 01-2 2h-1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3H4a2 2 0 01-2-2v-3a2 2 0 012-2h1V6zm10 3V6H6v3h8zM6 12v5h8v-5H6z" />
              </svg>
            </button>

            <select class="border border-gray-300 rounded p-[2px]">
              <option>Arial</option>
            </select>

            <div class="flex items-center space-x-1">
              <button class="p-2 hover:bg-gray-100 rounded">-</button>
              <span class="px-2">00</span>
              <button class="p-2 hover:bg-gray-100 rounded">+</button>
            </div>

            <button class="p-2 hover:bg-gray-100 rounded font-bold">B</button>
            <button class="p-2 hover:bg-gray-100 rounded italic">I</button>
            <button class="p-2 hover:bg-gray-100 rounded underline">U</button>

            <button class="p-2 hover:bg-gray-100 rounded">
              <div class="h-4 w-4 bg-blue-500 rounded"></div>
            </button>

            <button class="p-2 hover:bg-gray-100 rounded">A</button>
            <button class="p-2 hover:bg-gray-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 10h14M5 6h14M7 14h10M9 18h6"
                />
              </svg>
            </button>
          </div>
          <div class=" mt-2 p-4 bg-white h-40">
            {/*-- This is the editable content area --*/}
          </div>
        </div>
      </div>

      <div className="w-[50%] absolute right-[-4%] mt-4 ">
        <label htmlFor="file" className="text-[14.22px] font-normal flex">
          Insert knowledge base link
        </label>
        <input
          className="h-[46px] w-[80%] pt-2 text-[14.22px] pl-4 text-[#2B2A2D] border border-[#DBDCDE] rounded-md mt-1"
          type="file"
        ></input>
      </div>

      <button className="bg-[#511992] text-white px-5 py-2 rounded-md absolute right-[110px] mt-[8rem]">Open Tickets</button>
    </form>
  );
};

export default NewTicketForm;
