import React from "react";
import Train from "../../../../../src/Assets/Images/train.png";
import CheckIcon from '@mui/icons-material/Check';
import TaskIcon from '@mui/icons-material/Task';
import NotesIcon from '@mui/icons-material/Description';
import TodosIcon from '@mui/icons-material/FormatListBulleted';
import ContractsIcon from '@mui/icons-material/Newspaper';
import CloseIcon from '@mui/icons-material/Close';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Monthly = () => {
  return (
    <div className="monthly-plan space-y-10">
      <div className="grid grid-cols-4 mt-10 gap-8 max-[1480px]:grid-cols-2 max-[700px]:grid-cols-1">
        <div className=" border space-y-3 py-10 shadow rounded-lg">
          <div className="flex  justify-center text-center">
            <img className="h-[90px]" src={Train} alt="" />
          </div>

          <div className="text-center">
            <h1 className="text-[28px] text-[#566a7f]">Basic Plan</h1>
            <p className="text-[#566a7f]">Basic plan for small teams</p>
            <div className="flex justify-center gap-2">
              <h1 className="text-[40px] text-[#66299b]">₹ 100.0 </h1>
              <span className="mt-8 text-[#566a7f]">/Monthly</span>
            </div>
          </div>

          <ul className="space-y-3 pl-20">
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Projects: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1 " style={{fontSize: 18}}/>  Max Clients: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Team Members: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Workspaces: 5 </li>
           </ul>
            <h1 className="text-[#566a7f] pl-[90px]">Modules</h1>
            <ul className="space-y-3 pl-[95px] mt-4">
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TaskIcon/> Tasks</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><NotesIcon/> Notes</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TodosIcon/>  Todos</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><ContractsIcon/> Contracts</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><GroupsIcon/>  Meetings</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ChatIcon/>  Chat</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ReceiptIcon/>  Payslips</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><PaidIcon/>  Finance</li>
            </ul>
            
            <div className="flex justify-center">
            <button className="text-[#66299b] border border-[#66299b] px-6 py-2 rounded-md hover:bg-[#66299b] hover:text-[white] duration-200 mt-5">Proceed <ArrowForwardIcon/></button>
            </div>
        </div>

        <div className="border space-y-3 py-10 shadow rounded-lg">
          <div className="flex  justify-center text-center">
            <img className="h-[90px]" src={Train} alt="" />
          </div>

          <div className="text-center">
            <h1 className="text-[28px] text-[#566a7f]">Basic Plan</h1>
            <p className="text-[#566a7f]">Basic plan for small teams</p>
            <div className="flex justify-center gap-2">
              <h1 className="text-[40px] text-[#66299b]">₹ 100.0 </h1>
              <span className="mt-8 text-[#566a7f]">/Monthly</span>
            </div>
          </div>

          <ul className="space-y-3 pl-20">
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Projects: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1 " style={{fontSize: 18}}/>  Max Clients: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Team Members: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Workspaces: 5 </li>
           </ul>
            <h1 className="text-[#566a7f] pl-[90px]">Modules</h1>
            <ul className="space-y-3 pl-[95px] mt-4">
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TaskIcon/> Tasks</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><NotesIcon/> Notes</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TodosIcon/>  Todos</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><ContractsIcon/> Contracts</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><GroupsIcon/>  Meetings</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ChatIcon/>  Chat</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ReceiptIcon/>  Payslips</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><PaidIcon/>  Finance</li>
            </ul>

            <div className="flex justify-center">
            <button className="text-[#66299b] border border-[#66299b] px-6 py-2 rounded-md hover:bg-[#66299b] hover:text-[white] duration-200 mt-5">Proceed <ArrowForwardIcon/></button>
            </div>
        </div>

        <div className=" border space-y-3 py-10 shadow rounded-lg">
          <div className="flex  justify-center text-center">
            <img className="h-[90px]" src={Train} alt="" />
          </div>

          <div className="text-center">
            <h1 className="text-[28px] text-[#566a7f]">Basic Plan</h1>
            <p className="text-[#566a7f]">Basic plan for small teams</p>
            <div className="flex justify-center gap-2">
              <h1 className="text-[40px] text-[#66299b]">₹ 100.0 </h1>
              <span className="mt-8 text-[#566a7f]">/Monthly</span>
            </div>
          </div>

          <ul className="space-y-3 pl-20">
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Projects: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1 " style={{fontSize: 18}}/>  Max Clients: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Team Members: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Workspaces: 5 </li>
           </ul>
            <h1 className="text-[#566a7f] pl-[90px]">Modules</h1>
            <ul className="space-y-3 pl-[95px] mt-4">
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TaskIcon/> Tasks</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><NotesIcon/> Notes</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TodosIcon/>  Todos</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><ContractsIcon/> Contracts</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><GroupsIcon/>  Meetings</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ChatIcon/>  Chat</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ReceiptIcon/>  Payslips</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><PaidIcon/>  Finance</li>
            </ul>

            <div className="flex justify-center">
            <button className="text-[#66299b] border border-[#66299b] px-6 py-2 rounded-md hover:bg-[#66299b] hover:text-[white] duration-200 mt-5">Proceed <ArrowForwardIcon/></button>
            </div>
        </div>

        <div className="border space-y-3 py-10 shadow rounded-lg">
          <div className="flex  justify-center text-center">
            <img className="h-[90px]" src={Train} alt="" />
          </div>

          <div className="text-center">
            <h1 className="text-[28px] text-[#566a7f]">Basic Plan</h1>
            <p className="text-[#566a7f]">Basic plan for small teams</p>
            <div className="flex justify-center gap-2">
              <h1 className="text-[40px] text-[#66299b]">₹ 100.0 </h1>
              <span className="mt-8 text-[#566a7f]">/Monthly</span>
            </div>
          </div>

          <ul className="space-y-3 pl-20">
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Projects: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1 " style={{fontSize: 18}}/>  Max Clients: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Team Members: 5</li>
            <li className="text-[#566a7f]"><CheckIcon className="bg-[#bd88eb] text-[#542081] rounded-full py-1" style={{fontSize: 18}}/> Max Workspaces: 5 </li>
           </ul>
            <h1 className="text-[#566a7f] pl-[90px]">Modules</h1>
            <ul className="space-y-3 pl-[95px] mt-4">
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TaskIcon/> Tasks</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><NotesIcon/> Notes</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><TodosIcon/>  Todos</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CheckIcon className="border border-green-500 text-green-500 rounded-full" style={{fontSize: 18}}/><ContractsIcon/> Contracts</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><GroupsIcon/>  Meetings</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ChatIcon/>  Chat</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><ReceiptIcon/>  Payslips</li>
                <li className="text-[#233446] space-x-2 flex items-center gap-1"><CloseIcon className="bg-red-500 text-white rounded-full" style={{fontSize: 18}}/><PaidIcon/>  Finance</li>
            </ul>

            <div className="flex justify-center">
            <button className="text-[#66299b] border border-[#66299b] px-6 py-2 rounded-md hover:bg-[#66299b] hover:text-[white] duration-200 mt-5">Proceed <ArrowForwardIcon/></button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Monthly;
