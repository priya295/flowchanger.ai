import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const ProjectSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto min-h-screen border border-gray-300 ">
      <div className="flex items-center md:w-[35%] sm:w-[40%] justify-between mb-6">
       <Link to = "/addProject"> <h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400">Project</h2></Link>
       <span className="text-2xl font-normal text-gray-800 hover:text-blue-400">Project Settings</span>
      </div>
      <hr />
      <div className="mb-6">
        <h3 className="font-medium mb-2">Send contacts notifications</h3>
        <p className="text-gray-600 text-sm mb-2">To edit contacts with notifications for projects enabled</p>
        <div className="flex items-center justify-between border p-2 rounded">
          <span className="text-gray-700">Select contacts</span>
          <IoIosArrowDown className="text-gray-400" />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Visible Tabs</h3>
        <p className="text-gray-600 text-sm mb-2">Tasks, Timesheets, Milestones, Files, Discussions, Gantt, Tickets, Notes, Activity</p>
        <div className="flex items-center justify-between border p-2 rounded">
          <span className="text-gray-700">Select tabs</span>
          <IoIosArrowDown className="text-gray-400" />
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-4">Customer Permissions</h3>
        {[
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
        ].map((permission, index) => (
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