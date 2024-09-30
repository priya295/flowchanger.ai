import React from "react";
import { FaGoogle } from "react-icons/fa";

const Files = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-20 border-2 border-dashed border-[#4E58F2] rounded-lg cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <p className="mb-2 text-sm text-[#4E58F2] font-medium">
              Drop files here to upload
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="flex items-center space-x-6 space-y-2 justify-between mt-8">
        <div className="space-y-3">
          <label for="visibility-toggle" className="text-gray-500 text-sm">
            Visible to Customer
          </label>
          <input
            type="checkbox"
            id="visibility-toggle"
            className="toggle-checkbox hidden"
          />
          <label
            for="visibility-toggle"
            className="toggle-label block w-10 h-6 rounded-full bg-gray-300 cursor-pointer relative"
          >
            <span className="toggle-handle absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform"></span>
          </label>
        </div>

        <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100">
          <FaGoogle />
          Choose from Google Drive
        </button>
      </div>

      <div >
        <div className="p-4 shadow mt-8 rounded-xl">
          <div className="flex  justify-between items-center mb-4 max-[1050px]:block">
            <div className="flex space-x-2 text-[#B1B1B1]">
              <select className="border w-[4.5rem] border-[#B1B1B1] rounded p-2 bg-white">
                <option>25</option>
              </select>
              <button className=" text-[#B1B1B1] border border-[#B1B1B1] px-4 py-2 rounded">
                Export
              </button>
              <button className=" text-[#B1B1B1] border border-[#B1B1B1] px-4 py-2 rounded">
                Bulk Actions
              </button>
              <button className=" text-[#B1B1B1] border border-[#B1B1B1] px-4 py-2 rounded">
                Download All
              </button>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded p-2 w-64 max-[1050px]:mt-4"
              />
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border-t border-r border-[#DBDBDB]">Filename</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB]">File type</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB]">Last Activity</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB]">Total Comments</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB]">
                    Visible to Customer
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB">Uploaded by</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border border-[#DBDBDB">Date uploaded</th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-center border-b  border-t border-l border-[#DBDBDB] ">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4 text-start text-[#B1B1B1]" colspan="8">
                    No entries found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
