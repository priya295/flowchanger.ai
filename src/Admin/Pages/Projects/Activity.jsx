import React from "react";
<<<<<<<< HEAD:src/Admin/Components/Projects/Activity.jsx
import photo from "../../../Assets/Images/photo.png";
========
import photo from "../../Images/photo.png";
>>>>>>>> 0f3779cf5b2609acb98cb63f6b92db8dbcf13d19:src/Admin/Pages/Projects/Activity.jsx

const Activity = () => {
  return (
    <div>
      <div className=" h-[38rem] shadow p-6 rounded-lg">
        <div className="pl-8 border-b pb-8 border-[#DFDFDF]">
          <h1 className="text-[#B1B1B1] text-[13px]">18 hrs ago</h1>
          <div className="flex items-start gap-4 mt-5">
            <img src={photo} alt="" />
            <div>
              <h1>Abhishek Verma - Task Status Changed</h1>
              <h1 className="text-[#B1B1B1] mt-2 text-[13px]">
                REEL COVER FREELANCER - BEROZGAR(WHITE) -
              </h1>
            </div>
            <button className="border border-[#5D5757] text-[#0E2040] text-[10px] px-2 py-1 mt-7 rounded-md bg-[#ECECEC]">
              In Review
            </button>
            <div className=" absolute right-2 mr-11">
              <h1 className="text-[#B1B1B1] text-[15px]">
                Visible to Customer
              </h1>
              <div className="relative inline-block w-12 h-6 ml-[6rem] mt-2">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-[#511992] w-full h-full rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-8 border-b pb-8 pt-7 border-[#DFDFDF]">
          <h1 className="text-[#B1B1B1] text-[13px]">18 hrs ago</h1>
          <div className="flex items-start gap-4 mt-5">
            <img src={photo} alt="" />
            <div>
              <h1>Abhishek Verma - Task Status Changed</h1>
              <h1 className="text-[#B1B1B1] mt-2 text-[13px]">
                REEL COVER FREELANCER - BEROZGAR(WHITE) -
              </h1>
            </div>
            <button className="border border-[#5D5757] text-[#0E2040] text-[10px] px-2 py-1 mt-7 rounded-md bg-[#ECECEC]">
              Forward For QC
            </button>
            <div className=" absolute right-2 mr-11">
              <h1 className="text-[#B1B1B1] text-[15px]">
                Visible to Customer
              </h1>
              <div className="relative inline-block w-12 h-6 ml-[6rem] mt-2">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-[#511992] w-full h-full rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-8 border-b pb-8 pt-7 border-[#DFDFDF]">
          <h1 className="text-[#B1B1B1] text-[13px]">18 hrs ago</h1>
          <div className="flex items-start gap-4 mt-5">
            <img src={photo} alt="" />
            <div>
              <h1>Abhishek Verma - Task Status Changed</h1>
              <h1 className="text-[#B1B1B1] mt-2 text-[13px]">
                REEL COVER FREELANCER - BEROZGAR(WHITE) -
              </h1>
            </div>
            <button className="border border-[#5D5757] text-[#0E2040] text-[10px] px-2 py-1 mt-7 rounded-md bg-[#ECECEC]">
              Approved
            </button>
            <div className=" absolute right-2 mr-11">
              <h1 className="text-[#B1B1B1] text-[15px]">
                Visible to Customer
              </h1>
              <div className="relative inline-block w-12 h-6 ml-[6rem] mt-2">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-[#511992] w-full h-full rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-8 pb-8 pt-7 ">
          <h1 className="text-[#B1B1B1] text-[13px]">18 hrs ago</h1>
          <div className="flex items-start gap-4 mt-5">
            <img src={photo} alt="" />
            <div>
              <h1>Abhishek Verma - Task Status Changed</h1>
              <h1 className="text-[#B1B1B1] mt-2 text-[13px]">
                REEL COVER FREELANCER - BEROZGAR(WHITE) -
              </h1>
            </div>
            <button className="border text-[#FF9F2D] border-[#FF9F2D] text-[10px] px-2 py-1 mt-7 rounded-md bg-[#ECECEC]">
            In Progress
            </button>
            <div className=" absolute right-2 mr-11">
              <h1 className="text-[#B1B1B1] text-[15px]">
                Visible to Customer
              </h1>
              <div className="relative inline-block w-12 h-6 ml-[6rem] mt-2">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-[#511992] w-full h-full rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
