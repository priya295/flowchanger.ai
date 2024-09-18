import React from "react";
import Image from "../Images/image.png";

const Task = () => {
  return (
    <div>
      <div className="border shadow h-[32rem] p-7 rounded-xl">
        <div className="flex items-center space-x-7">
          {/*-- Add new button --*/}
          <button className="bg-[#511992] text-white px-3 py-1 font-light rounded-full hover:bg-purple-700">
            + Add new
          </button>

          {/*-- Search input --*/}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#B1B1B1] text-[#B1B1B1]  rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-[#B1B1B1] "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 105.878 13.544l5.682 5.682a1 1 0 001.415-1.415l-5.682-5.682A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </span>
          </div>

          {/*-- Group by dropdown --*/}
          <div className="relative">
            <select className="border border-[#B1B1B1] bg-white text-[#B1B1B1] rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Group by : Priority</option>
            </select>
          </div>

          {/*-- Filter icon -*/}
          <button className="text-gray-500 border hover:text-gray-700 px-3 py-1 rounded-full border-[#B1B1B1]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.632 5.633A4 4 0 0014 14.757V19a1 1 0 01-.553.894l-4 2A1 1 0 018 21v-6.243a4 4 0 00-1.074-2.683L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-x-auto mt-11">
          <table className="w-full border-none bg-white border">
            <thead>
              <tr className="text-[#B1B1B1] font-light ">
                <th className="text-left font-normal px-4 py-2  border">Status</th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  #
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Task Name
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Start Date
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Due Date
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  End Date
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Assigned To
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Tags
                </th>
                <th className="text-left font-normal text-[16px] px-4 py-2 border">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              <tr className="border-t">
                <td className="text-green-600 px-4 py-8">Complete</td>
                <td className="px-4 py-2 text-[#2568EC]">10</td>
                <td className="px-4 py-2 text-blue-600">soul relation intro</td>
                <td className="px-4 py-2 text-[#B1B1B1]">13-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">17-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">19-10-2024</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <img src={Image} alt="user1" className="w-8 h-8 rounded-full" />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium border-[#B1B1B1] border rounded">
                    Ads
                  </span>
                </td>
                <td className="text-red-600 px-4 py-2">High</td>
              </tr>

              <tr className="border-t">
                <td className="text-green-600 px-4 py-8">Complete</td>
                <td className="px-4 py-2 text-[#2568EC]">10</td>
                <td className="px-4 py-2 text-blue-600">soul relation intro</td>
                <td className="px-4 py-2 text-[#B1B1B1]">13-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">17-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">19-10-2024</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <img src={Image} alt="user1" className="w-8 h-8 rounded-full" />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium border-[#B1B1B1] border rounded">
                    Ads
                  </span>
                </td>
                <td className="text-red-600 px-4 py-2">High</td>
              </tr>

              <tr className="border-t">
                <td className="text-green-600 px-4 py-8">Complete</td>
                <td className="px-4 py-2 text-[#2568EC]">10</td>
                <td className="px-4 py-2 text-blue-600">soul relation intro</td>
                <td className="px-4 py-2 text-[#B1B1B1]">13-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">17-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">19-10-2024</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <img src={Image} alt="user1" className="w-8 h-8 rounded-full" />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium border-[#B1B1B1] border rounded">
                    Ads
                  </span>
                </td>
                <td className="text-red-600 px-4 py-2">High</td>
              </tr>

              <tr className="border-t">
                <td className="text-green-600 px-4 py-8">Complete</td>
                <td className="px-4 py-2 text-[#2568EC]">10</td>
                <td className="px-4 py-2 text-blue-600">soul relation intro</td>
                <td className="px-4 py-2 text-[#B1B1B1]">13-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">17-08-2024</td>
                <td className="px-4 py-2 text-[#B1B1B1]">19-10-2024</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <img src={Image} alt="user1" className="w-8 h-8 rounded-full" />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-xs font-medium border-[#B1B1B1] border rounded">
                    Ads
                  </span>
                </td>
                <td className="text-red-600 px-4 py-2">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between text-[#B1B1B1]">
        <h1>Showing 1 to 2 of 2 entries</h1>
        <div className="flex">
          <button className="px-3 py-1 border rounded-l-lg hover:text-gray-700 border-[#B1B1B1]">
            Previous
          </button>
          <div className="px-3 py-1 bg-[#511992] text-white">1</div>
          <button className="px-3 py-1 border rounded-r-lg  hover:text-gray-700  border-[#B1B1B1]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
