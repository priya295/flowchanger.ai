import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";

const ProjectSettings = () => {
  const [toggleContacts, setToggleContacts] = useState(false);
  const [activitiesTab, setActivitiesTab] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);

  const fields = [
    'Tasks', 'Timesheets', 'Milestones', 'Files', 'Discussions',
    'Gantt', 'Tickets', 'Contracts', 'Sales', 'Proposals', 'Estimates',
    'Invoices', 'Subscriptions', 'Expenses', 'Credit Notes', 'Notes', 'Activity'
  ];

  const permissions = [
    'Allow customer to view tasks', 'Allow customer to create tasks',
    'Allow customer to edit tasks (only tasks created from contact)',
    'Allow customer to comment on project tasks', 'Allow customer to view task comments',
    'Allow customer to view task attachments', 'Allow customer to view task checklist items',
    'Allow customer to upload attachments on tasks', 'Allow customer to view task total logged time',
    'Allow customer to view finance overview', 'Allow customer to upload files',
    'Allow customer to open discussions', 'Allow customer to view milestones',
    'Allow customer to view Gantt', 'Allow customer to view timesheets',
    'Allow customer to view activity log', 'Allow customer to view team members',
  ];

  // Toggle dropdown visibility
  const handleToggleDropdown = (setter) => {
    setter(prev => !prev);
  };

  // Select or deselect all fields
  const handleFieldSelection = (isSelectAll) => {
    setSelectedFields(isSelectAll ? fields : []);
    setSelectAll(isSelectAll);
  };

  // Toggle individual field
  const toggleField = (field) => {
    setSelectedFields((prevSelected) => 
      prevSelected.includes(field)
        ? prevSelected.filter(f => f !== field)
        : [...prevSelected, field]
    );
  };

  return (
    <div className="bg-white parent p-0 md:p-6 rounded-lg shadow-sm max-w-3xl mx-auto min-h-screen border border-gray-300 relative overflow-x-hidden">
      <div className="flex items-center w-full md:w-2/5 justify-between mb-6">
        <Link to="/addProject">
          <h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400">Project</h2>
        </Link>
        <h2 className="text-2xl font-normal text-gray-800">Project Settings</h2>
      </div>
      <hr />
      
      {/* Contacts Notifications Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Send contacts notifications</h3>
        <p className="text-gray-600 text-sm mb-2">To edit contacts with notifications for projects enabled</p>
        <div className="relative inline-block text-left w-full">
          <div className="flex items-center justify-between border p-2 rounded" onClick={() => handleToggleDropdown(setToggleContacts)}>
            <button className="text-gray-700">Select contacts</button>
            <IoIosArrowDown className="text-gray-400" />
          </div>
        
        {toggleContacts && (
          <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md px-3 py-1">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-300">To all contacts with notifications enabled</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-300">Specific contacts</a>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-300">Do not send notifications</button>
          </div>
        )}
      </div>
      </div>

      {/* Visible Tabs Section */}
      <div className="mb-6 w-full">
        <h3 className="font-medium mb-2">Visible Tabs</h3>
        <div className="relative inline-block text-left w-full">
          <div className="flex items-center justify-between border p-2 rounded" onClick={() => handleToggleDropdown(setActivitiesTab)}>
            <span className="text-gray-700">Tasks, Timesheets, Milestones, Files, Discussions, Gantt, Tickets, Notes, Activity</span>
            <IoIosArrowDown className="text-gray-400" />
          </div>
       
        {activitiesTab && (
          <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md">
          <div className="flex justify-between px-4 py-2 w-full">
            <button className="text-blue-600 hover:underline w-1/2" onClick={() => handleFieldSelection(true)}>Select All</button>
            <button className="text-blue-600 hover:underline w-1/2" onClick={() => handleFieldSelection(false)}>Deselect All</button>
          </div>
          {fields.map((field, index) => (
            <div key={index} className="flex items-center justify-between py-2 px-4 cursor-pointer" onClick={() => toggleField(field)}>
              <label className="text-gray-700 cursor-pointer">{field}</label>
              
              {/* Hidden checkbox for accessibility */}
              <input 
                type="checkbox" 
                className="hidden" 
                id={`field-${index}`} 
                checked={selectedFields.includes(field)} 
                onChange={() => toggleField(field)} 
              />
        
              {/* Display checkmark icon for selected fields */}
              <span className="mr-2">
                {selectedFields.includes(field) && <IoMdCheckmark className="text-black-500 text-xl" />}
              </span>
            </div>
          ))}
        </div>
         
        )}
      </div>
      </div>

      {/* Customer Permissions Section */}
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
