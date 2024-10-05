import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Early_Leaving_Policy from './Early_Leaving_Policy'
import Late_Coming_Policy from './Late_Coming_Policy';
import OverTime_Pay_Policy from './OverTime_Pay_Policy';


const Penalty_Overtime = () => {



  return (
    <div className="Penalty-Overtime-Tab mt-[20px]">
        <Tabs> 
        <TabList className="flex text-center flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]">       
            <Tab className="first-btn flex items-center">Early Leaving Policy</Tab>
            <Tab className="second-btn flex items-center">Late Coming Policy</Tab>
            <Tab className="second-btn flex items-center">Overtime Pay Policy</Tab>
        </TabList>

        <TabPanel><Early_Leaving_Policy/></TabPanel>
        <TabPanel><Late_Coming_Policy/></TabPanel>
        <TabPanel><OverTime_Pay_Policy/></TabPanel>
      </Tabs>
    </div>
  )
}

export default Penalty_Overtime