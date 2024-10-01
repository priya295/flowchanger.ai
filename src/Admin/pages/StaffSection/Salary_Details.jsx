import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Salary_Details = () => {
  return (
    <div className="salary-details layout w-[100%]">
      <div className="flex items-center justify-between border-b border-[#DBDBDB] pb-6 max-[1050px]:block">
        <h1 className="text-[30px] font-medium max-[1050px]:text-[25px] max-[660px]:text-[20px]">
          <ArrowBackIcon />
          Salary Details Import Settings
        </h1>

        <div className="btn space-x-6 max-[1050px]:mt-7">
          <button className="h-[46px] w-[113px] text-[#8A25B0] border border-[#8A25B0] rounded-md">
            Cancel
          </button>
          <button className="h-[46px] w-[166px] text-white bg-[#8A25B0] border border-[#8A25B0] rounded-md">
            Save Settings
          </button>
        </div>
      </div>


      {/*--Earnings Part--*/}
      <div className="mt-8">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">Earnings</h1>
        </div>

        {/*--Left Part --*/}
        <div className="flex mt-12 ml-16 gap-[19rem] max-[660px]:gap-[8rem]">
          <div>
            <ul className="space-y-6">
              <li className="text-[16px] font-semibold">Heads</li>
              <li className="text-[16px] font-medium">BASIC</li>
              <li className="text-[16px] font-medium">HRA</li>
              <li className="text-[16px] font-medium">Dearness Allowance</li>
              <button className="text-[#8A25B0]">+ Add Allowances</button>
            </ul>
          </div>

          {/*--Right Part --*/}
          <div className="flex flex-col space-y-6">
            <h1 className="text-[16px] font-semibold">Calculation</h1>
            <select
              name=""
              id=""
              className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
            >
              <option value="On Attendance">On Attendance</option>
            </select>

            <select
              name=""
              id=""
              className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
            >
              <option value="On Attendance">On Attendance</option>
            </select>

            <select
              name=""
              id=""
              className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
            >
              <option value="On Attendance">On Attendance</option>
            </select>
          </div>
        </div>
      </div>


      {/*--Compliances Part--*/}
      <div className=" mt-12">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">
            Compliances
          </h1>
        </div>

        {/*--Left Part --*/}
        <div className="flex mt-12 ml-16 gap-[16rem] max-[660px]:gap-[5rem]">
          <div>
            <ul className="space-y-6">
              <li className="text-[16px] font-semibold">
                Employer Contributions
              </li>
              <li className="text-[16px] font-medium">
                Employer PF Contribution
              </li>
              <li className="text-[16px] font-medium">
                Employer ESI Contribution
              </li>
              <li className="text-[16px] font-medium">Employer LWF</li>
            </ul>
          </div>

          {/*--Right Part --*/}
          <div className="flex flex-col space-y-6 ">
            <h1 className="text-[16px] font-semibold">Select Components</h1>
            <button
              name=""
              id=""
              className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
            >
              {" "}
              + Add
            </button>

            <button
              name=""
              id=""
              className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
            >
              {" "}
              + Add
            </button>

            <h1 className="text-[14px] text-[#B1B1B1]">
              You can set this at staff level
            </h1>
          </div>
        </div>

        <div className="flex mt-14 ml-16 gap-[16rem] max-[660px]:gap-[5rem]">
          <div>
            <ul className="space-y-6">
              <li className="text-[16px] font-semibold">
                Employer Contributions
              </li>
              <li className="text-[16px] font-medium">
                Employer PF Contribution
              </li>
              <li className="text-[16px] font-medium">
                Employer ESI Contribution
              </li>

              <li className="text-[16px] font-medium">Professional Tax</li>
              <li className="text-[16px] font-medium">Employer LWF</li>
              <li className="text-[16px] font-medium">TDS</li>
            </ul>
          </div>

          {/*--Right Part --*/}
          <div className="flex flex-col space-y-6">
            <h1 className="text-[16px] font-semibold">Select Components</h1>
            <button
              name=""
              id=""
              className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
            >
              {" "}
              + Add
            </button>

            <button
              name=""
              id=""
              className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
            >
              {" "}
              + Add
            </button>

            <h1 className="text-[14px] text-[#B1B1B1]">
              You can set this at staff level
            </h1>

            <h1 className="text-[14px] text-[#B1B1B1]">
              You can set this at staff level
            </h1>

            <h1 className="text-[14px] text-[#B1B1B1]">System Calculated</h1>
          </div>
        </div>
      </div>


      {/*--Deductions Part--*/}
      <div className="mt-12">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">Deductions</h1>
        </div>
        <div className="flex mt-12 ml-16 gap-[16rem] max-[660px]:gap-[7rem]">
          <div>
            <ul className="space-y-6">
              <li className="text-[16px] font-semibold">Heads</li>
              <li className="text-[16px] font-medium text-[#B1B1B1]">
                No Deductions Added
              </li>
              <button className="text-[#8A25B0]">+ Add Allowances</button>
            </ul>
          </div>

          <h1 className="text-[16px] font-semibold">Calculation</h1>
        </div>
      </div>

      {/*--Scroll Pages--*/}
      <div className="mt-14">
        <h1>Showing 1-1 of 1 staff</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="border border-[#CFCFCF] rounded-md h-[38px] w-[39px] text-[#CFCFCF] pl-2"><ArrowBackIosIcon/></button>
          <button className="border border-[8A25B0] rounded-md h-[38px] w-[39px] bg-[#8A25B0] text-white">1</button>
          <button className="border border-[#CFCFCF] rounded-md h-[38px] w-[39px] text-[#CFCFCF]"><ArrowForwardIosIcon/></button>
        </div>
      </div>
    </div>
  );
};

export default Salary_Details;
