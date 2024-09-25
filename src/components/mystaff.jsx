import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiFilter, FiMoreVertical } from 'react-icons/fi';

const MyStaff = ({ employeeData}) => {
  // const [activePopupId, setActivePopupId] = useState(null);
  // const [toggleStaffDropDown, setToggleStaffDropDown] = useState(false);

  const tabItems = ['Staff', 'Attendance', 'Bank Details', 'Salary Details', 'Leave Balances & Policy', 'Penalty & Overtime', 'Permissions'];
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6">My Staff</h1>

      <div className="overflow-x-auto mb-6">
        <div className="flex space-x-4 whitespace-nowrap">
          {tabItems.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${
                index === 0 ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500'
              } hover:text-purple-600`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <div className="relative flex-grow">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>All Departments</option>
          </select>
          <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="flex items-center space-x-2 bg-white border rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <FiFilter />
          <span>More Filters</span>
        </button>
        <button className="bg-purple-100 text-purple-600 rounded-lg px-4 py-2 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600">
          Update Staff
        </button>
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <span>Add Staff</span>
            <FiChevronDown />
          </button>
          {(
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-900"
                  role="menuitem">
                  Add One Staff
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-900"
                  role="menuitem"
                >
                  Add Multiple Staff
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['#', 'Name', 'Job Title', 'Employee ID', 'Employee Type', 'Date of Joining', 'Date Of Birth' , 'Action'].map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employeeData.map((employee, index) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.jobtitle}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.EmployeeType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.DateOfJoining}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.DateOfBirth}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-gray-600 hover:text-gray-900">
                    <FiMoreVertical />
                  </button>
                  {(
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Edit
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStaff;