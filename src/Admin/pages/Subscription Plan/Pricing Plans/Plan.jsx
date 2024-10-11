import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Monthly from "./Monthly";

const Plan = () => {
  return (
    <div className="buy-plans">
      <div className="text-center text-[#566a7f]">
        <h1 className="text-[35px]">Pricing Plans</h1>
        <p>
          All plans include advanced tools and features to boost your
          productivityChoose the best plan to fit your needs.
        </p>
      </div>

      <div className="tab-section ">
        <Tabs>
          <TabList className="flex items-center justify-center mt-7">
            <Tab className= "hover:bg-[#27004a] hover:text-white text-[#27004a] px-4 py-2 border border-[#27004a] rounded-l-md">Monthly</Tab>
            <Tab className="hover:bg-[#27004a] hover:text-white text-[#27004a] px-3 py-2 border-t border-b border-[#27004a]" >Yearly</Tab>
            <Tab className="hover:bg-[#27004a] hover:text-white text-[#27004a] px-4 py-2 border border-[#27004a] rounded-r-md">Lifetime</Tab>
          </TabList>

          <TabPanel>
            <Monthly/>
          </TabPanel>
          
          <TabPanel>
            
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Plan;
