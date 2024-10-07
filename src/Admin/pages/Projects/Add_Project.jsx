import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Project_Setting from './Project_Setting'

const Add_Project = () => {
  return (
    <Tabs className="m-5 shadow rounded-lg">
      <TabList className="flex p-7 gap-4 text-[20px] font-medium border-b border-[#B1B1B1] cursor-pointer">
        <Tab className="hover:text-[#2568EC] hover:border-b pb-2 border-[#2568EC]">
          Project
        </Tab>
        <Tab className="hover:text-[#2568EC] hover:border-b  pb-2 border-[#2568EC]">
          Project Settings
        </Tab>
      </TabList>

      <TabPanel className="m-5">
        
        <div className="">
          <h1 className="font-medium">* Project Name</h1>
          <input className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md" type="text" />

          <h1 className="font-medium">* Customer</h1>
          <input className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md" type="text" />

          <div className="font-medium flex gap-4 items-center">
          <input type="checkbox" />
          <h1>Calculate progress through tasks</h1>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="m-5">
        <Project_Setting/>
      </TabPanel>
    </Tabs>
  );
};

export default Add_Project;
