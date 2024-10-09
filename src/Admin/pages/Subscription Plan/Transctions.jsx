import React from 'react'
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Transctions = () => {
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
            Amount
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
            Charging Currency
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
            Transaction ID
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB]">
            Created Date
            </th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >668</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Sid gor</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Basic Plan</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >Paypal</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#ffb827]  border-[#DBDBDB]" >Pending</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >₹ 100.0</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >₹</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >660ea0ff95c3a</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB]" >04-04-2024</td>
             </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transctions