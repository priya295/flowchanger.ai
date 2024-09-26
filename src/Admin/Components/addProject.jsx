import { BiChevronDown } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";


const AddProject = () =>{
 return (


    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex xs:w-[100%] md:w-[42%]  justify-between font-thin h-10 ">
        <h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400 ">Project</h2>
        <Link to = "/projectsettings"><h2 className="text-2xl font-normal text-gray-800 hover:text-blue-400">Project Settings</h2></Link>
        </div>
        <hr />
        <div className="space-y-4">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
            <input type="text" id="projectName" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>

          <div>
            <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer</label>
            <div className="mt-1 relative">
              <select id="customer" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none">
                <option>Select customer</option>
              </select>
              <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Progress</label>
            <div className="mt-1 w-full bg-gray-200 rounded h-4">
              <div className="bg-green-600 h-4 rounded" style={{ width: '10%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startingType" className="block text-sm font-medium text-gray-700">Billing Type</label>
              <select id="startingType" className="mt-1 block w-full rounded-md borderborder-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>fixed Rate</option>
              </select>
            </div>
            <div>
              <label htmlFor="inProgress" className="block text-sm font-medium text-gray-700">In progress</label>
              <select id="inProgress" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ">
                <option>In Progress</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Total Rate">Total Rate</label>
            <input type="text" id="Total Rate" className="h-5 border border-gray-300" />
           </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startingType" className="block text-sm font-medium text-gray-700">Estimated Hours</label>
              <input type="text" id="startingType" className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
          
              <label htmlFor="inProgress" className="block text-sm font-medium text-gray-700">members</label>
              <select id="inProgress" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>select members</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
              <div className="mt-1 relative">
                <input type="date" id="startDate" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-10" />
                <BiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
              <div className="mt-1 relative">
                <input type="date" id="deadline" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-10" />
                <BiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " size={20} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
            <input type="text" id="tags" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter tags" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <div className="flex flex-col border border-gray-300">
             <div className="w-[80%]  flex justify-evenly ">
              <span>file</span>
              <span>edit</span>
              <span>view</span>
              <span>insert</span>
              <span>Format</span>
              <span>Tools</span>
              <span>Table</span>
             </div>
             <div>
            <img src="./images/Toolbar.png" alt="" />
        </div>
             <div>
             <textarea id="description" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
             </div>
            </div>
          </div>
          <div className="flex items-center mb-3 border-t border-b border-gray-400 h-10">
            <input type="checkbox" id="emailCheckBox" className="mr-3"  />
            <label htmlFor="emailCheckBox" className="text-sm text-gray-700">send project created email</label>
          </div>
        </div>
       

        <div className="flex justify-end space-x-3">
          <button type="button" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};


 

export default AddProject;