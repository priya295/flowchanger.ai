import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Subscription_History = () => {
  return (
    <div className="m-4">
      <div className="flex items-center gap-2 justify-end">
        <input
          className="h-[40px] rounded-md border border-[#d9dee3] pl-2"
          type="text"
          placeholder="Search"
        />

        <div className="bg-[#8592a3] text-white px-7 py-[8px] rounded-md space-x-6">
          <button>
            <CachedIcon />
          </button>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>

      <table className="mt-8 overflow-x-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border-t border-r border-l border-[#DBDBDB]">
              ID
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              User Name
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Plan Name
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Payment method
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Status
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Charging Price
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Features
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Tenure
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              Started at
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
              End Date
            </th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td className="px-4 py-20 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >668</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Sid gor</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Standard Plan</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Paypal</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#71dd37]  border-[#DBDBDB]" >Active</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >₹ 500.0</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >
                    <ul className="flex flex-col items-start">
                        <li>
                            <strong>Max Projects: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Team Members: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Workspaces: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Clients: </strong>
                            10
                        </li>

                        <li>
                            <strong>Modules: </strong>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start">
                        <li>Tasks</li>
                        <li>Notes</li>
                        <li>Meetings</li>
                        <li>Chat</li>
                        <li>Todos</li>
                        <li>Contracts</li>
                        <li>Payslips</li>
                        <li>Finance</li>
                    </ul>
                </td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Monthly</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >2024-04-05</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >2024-05-05</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subscription_History;
