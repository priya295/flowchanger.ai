import React from "react";

const Discussion = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <button className="px-4 py-2 bg-[#511992] text-white rounded-lg">
        + Create Discussion
      </button>

      <div>
        <div className="p-4 shadow mt-8 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex space-x-2 text-[#B1B1B1] mb-4 md:mb-0">
              <select className="border w-[4.5rem] border-[#B1B1B1] rounded p-2 bg-white">
                <option>25</option>
              </select>
              <button className=" text-[#B1B1B1] border border-[#B1B1B1] px-4 py-2 rounded">
                Export
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded p-2 w-full md:w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] border-b text-center border-t border-r border-[#DBDBDB]">
                    Subject
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] border-b text-center border border-[#DBDBDB]">
                    Last Activity
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] border-b text-center border border-[#DBDBDB]">
                    Total Comments
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] border-b text-center border border-[#DBDBDB]">
                    Visible to Customer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4 text-start text-[#B1B1B1]" colSpan="8">
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

export default Discussion;
