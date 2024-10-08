import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";


const ProjectSettings = () => {

  const [toggleContacts , setToggleContacts] = useState(false);
  const [activitiesTab , setActivitiesTab] = useState(false);
  const [selectAll , setSelectAll] = useState(false);

  // create fields to add into Tasks and activities
  const fields = [
    'Tasks', 'Timesheets', 'Milestones', 'Files', 'Discussions',
    'Gantt', 'Tickets', 'Contracts', 'Sales' , 'Proposals', 'Estimates',
    'Invoices', 'Subscriptions', 'Expenses', 'Credit Notes', 'Notes', 'Activity'
  ];
  // state to track which field is selected

  const [selectedFields , setSelectedFields] = useState([]);

  // functions to toggle dropdown
  const handleActivitiesTab = () =>{
    setActivitiesTab(!activitiesTab)
  }
  
  const handleToggleContacts = () =>{
    setToggleContacts(!toggleContacts);
  }

  // select or deselect all fields
  const handleFieldSelection = () =>{
    if(selectAll){
      setSelectedFields(fields);
    }
    else{
      setSelectedFields([]);
    }
    setSelectAll(!selectAll);
  }

  // toggle individual fields
  const toggleField = (field) =>{
    if(selectedFields.includes(field)){
     selectedFields.filter(task => task !== field )
    }
    else {
      setSelectedFields ([...selectedFields , field])
    }
  }



  const permissions = [
    
      'Allow customer to view tasks',
      'Allow customer to create tasks',
      'Allow customer to edit tasks (only tasks created from contact)',
      'Allow customer to comment on project tasks',
      'Allow customer to view task comments',
      'Allow customer to view task attachments',
      'Allow customer to view task checklist items',
      'Allow customer to upload attachments on tasks',
      'Allow customer to view task total logged time',
      'Allow customer to view finance overview',
      'Allow customer to upload files',
      'Allow customer to open discussions',
      'Allow customer to view milestones',
      'Allow customer to view Gantt',
      'Allow customer to view timesheets',
      'Allow customer to view activity log',
      'Allow customer to view team members',
    ]
  
  return (
    <div className="bg-white p-0 md:p-6 rounded-lg shadow-sm max-w-3xl mx-auto min-h-screen border border-gray-300 relative overflow-x-hidden">
      <div className="flex items-center w-[100%] md:w-[40%]  justify-between mb-6">
       <Link to = "/addProject"> <h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400 mr-2">Project</h2></Link>
       <h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400">Project Settings</h2>
      </div>
      <hr />
      <div className="mb-6">
        <h3 className="font-medium mb-2">Send contacts notifications</h3>
        <p className="text-gray-600 text-sm mb-2">To edit contacts with notifications for projects enabled</p>
         <div className="relative inline-block text-left w-full">
        <div className="flex items-center justify-between border p-2 rounded">
          <button className="text-gray-700">Select contacts</button>
          <IoIosArrowDown className="text-gray-400" onClick={handleToggleContacts}/>
          </div>
        </div>
       {toggleContacts && <div class="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-3" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <a href="#" class="block px-4 py-2  text-gray-700 text-md hover:bg-purple-300" role="menuitem" tabIndex="-1" id="menu-item-0">To all contacts with notifications for project enabled</a>
      <a href="#" class="block px-4 py-2  text-gray-700 text-md hover:bg-purple-300" role="menuitem" tabIndex="-1" id="menu-item-1">Specific contacts</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="block w-full px-4 py-2 text-left text-md text-gray-700 hover:bg-purple-300" role="menuitem" tabindex="-1" id="menu-item-3">Do not send notifications</button>
      </form>
    </div>
  </div>
}
      </div>
      
      <div className="mb-6 w-full">
        <h3 className="font-medium mb-2">Visible Tabs</h3>
       {/* create drpdown for activity selection */}
       <div className="relative inline-block text-left w-full">
        <div className="flex items-center justify-between border p-2 rounded">
          <span className="text-gray-700">Tasks, TimeSheets , Milestones , Files , discussions,Gantt , Tickets , Notes , activity</span>
          <IoIosArrowDown className="text-gray-400" onClick={handleActivitiesTab}/>
        </div>
        </div>
        {activitiesTab && (
      <div className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1" role="none">
      <div className='flex w-full'>
        <button className='w-[50%] border border-gray-400 py-2 rounded' onClick={() =>{
          setSelectAll(true);
          handleFieldSelection()
          
        }}>Select All</button>
        <button className='w-[50%] border border-gray-400 py-2 rounded'  onClick={()=>{
          setSelectAll(false);
          handleFieldSelection() 
          
        }}>Deselect All</button>
      </div>
      {fields.map((field, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-4 cursor-pointer" onClick={() => toggleField(field)}>
                <label className="text-gray-700 text-md ">{field}</label>
                <span className="mr-2 font-bold text-xl">
                  {selectedFields.includes(field) && <IoMdCheckmark className='mr-2'/>  }
                </span>
              </div>
            ))}
    </div>
  </div>
)}

      </div>
      
      <div>
        <h3 className="font-medium mb-4">Customer Permissions</h3>
        {permissions.map((permission, index) => (
          <div key={index} className="flex items-center mb-3">
            <input type="checkbox" id={`permission-${index}`} className="mr-3" defaultChecked />
            <label htmlFor={`permission-${index}`} className="text-sm text-gray-700">{permission}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSettings;