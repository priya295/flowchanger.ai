import React from "react";

const Nots = () => {
  return (
    <div>
      <h1 className="text-[24px] text-[#585757] font-semibold">
        Personal notes
      </h1>
      <div>
        <ul className="flex gap-10 text-[#1A1A1AB2] font-medium mt-7">
          <li className="cursor-pointer">File</li>
          <li className="cursor-pointer">Edit</li>
          <li className="cursor-pointer">View</li>
          <li className="cursor-pointer">Insert</li>
          <li className="cursor-pointer">Format</li>
          <li className="cursor-pointer">Tools</li>
          <li className="cursor-pointer">Table</li>
        </ul>
      </div>

      <div className="mt-8 border  border-[#E1E1E2]">
        <div class="p-2 flex gap-5 border-b border-[#E1E1E2]  items-center bg-white">
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

      <button className="bg-[#511992] text-white px-5 py-2 rounded-md absolute right-8 mt-7">Save Note</button>
    </div>
  );
};

export default Nots;
