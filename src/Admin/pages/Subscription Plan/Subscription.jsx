import React from "react";
import man_laptop from "../../../Assets/Images/man-laptop.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaidIcon from '@mui/icons-material/Paid';
import Subscription_History from "./Subscription_History";
import Transctions from "./Transctions";

const Subscription = () => {
  return (
    <div className="subscription-panel space-y-8 ">
      <h1 className="font-medium text-[22px]">Subscription Plan</h1>
      <div className="left-card  w-[100%] flex gap-8 h-[220px] max-[1100px]:block max-[1100px]:w-[166%]  ">
        <div className="shadow w-[60%] flex items-center justify-between border rounded-lg ">
          <div className="m-5 space-y-4">
            <h1 className="text-[#8A25B0] font-medium">
              Congratulations Sid Gor! 🎉
            </h1>
            <h1 className="text-[#a1acb8] text-[14px]">
              Here's an overview of your active subscription:
            </h1>
            <p className="text-[#a1acb8] text-[14px]">
              Your subscription plan, <b>Standard Plan</b> will expire on
              2024-05-05. Don't miss out <br /> on our exclusive features and
              benefits. Renew or upgrade your plan today!{" "}
            </p>
            <button className="border border-[#8A25B0] text-[12px] text-[#8A25B0] px-3 py-1 rounded-md">
              Renew Or Manage Plan
            </button>
          </div>

          <div>
            <img
              className="h-[150px] mr-8 mt-[69px]"
              src={man_laptop}
              alt="man_laptop"
            />
          </div>
        </div>

        <div className="right-card w-[40%] shadow border rounded-lg max-[1100px]:w-[166%] max-[1100px]:mt-[25px]  ">
          <div className="m-5 space-y-3">
            <h1 className="text-[#8A25B0] font-medium">Active Subscription</h1>
            <div className="flex gap-1">
              <h1 className="text-[#8794a3]">Plan Name :</h1>
              <span>Standard Plan </span>
            </div>

            <div className="flex gap-1">
              <h1 className="text-[#8794a3]">Tenure :</h1>
              <span>Monthly </span>
            </div>

            <div className="flex gap-3">
              <h1 className="text-[#8794a3]">Remaining Days :</h1>
              <span className="text-white bg-[#8A25B0] text-[13px] text-center px-3 py-1 rounded-md">
                157 Days
              </span>
            </div>
          </div>
        </div>
      </div>

      <Tabs className= "shadow p-5 h-screen border rounded-lg subscription-tab">
        <TabList className="flex items-center text-[15px] font-medium text-[#566a7f] gap-4 rounded-md m-2">
            <Tab className="hover:bg-[#eceef1] cursor-pointer  px-3 py-2 rounded-lg"><AssignmentIcon className="mr-1"/>Subscription History</Tab>
            <Tab className="hover:bg-[#eceef1] cursor-pointer  px-3 py-2 rounded-lg"><PaidIcon className="mr-1"/>Transactions</Tab>
        </TabList>

        <TabPanel><Subscription_History/></TabPanel>
        <TabPanel><Transctions/></TabPanel>
      </Tabs> 
    </div>
  );
};

export default Subscription;
