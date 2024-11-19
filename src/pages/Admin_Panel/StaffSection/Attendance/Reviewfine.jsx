import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ReviewFine = () => {
  const [isOn, setIsOn] = useState(false);
  const [date, setDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  return (
    <div className="w-full p-5">
      {/* Back Link */}
      <div>
        <Link className="text-sm" to="/attendence_summary">
          <ArrowBackIcon className="text-blue-500" /> Back
        </Link>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mt-5 mb-5">
        <h2 className="font-medium">Daily Work Time</h2>
        <div className="flex items-center gap-2">
          <p>Send SMS to Staff</p>
          <div
            className={`${
              isOn ? 'bg-green-500' : 'bg-gray-300'
            } relative inline-block w-12 h-6 rounded-full cursor-pointer`}
            onClick={toggleSwitch}
          >
            <span
              className={`${
                isOn ? 'translate-x-6' : 'translate-x-0'
              } inline-block w-6 h-6 bg-gray-200 rounded-full transition-transform`}
            />
          </div>
        </div>
      </div>

      {/* Date and Approval Section */}
      <div className="p-2 shadow-md rounded-md flex justify-between mb-5">
        <input value={date} className="text-sm" type="date" />
        <p className="bg-red-100 p-1 text-xs border border-red-300 rounded-md">
          <WarningIcon className="text-red-500 text-sm" /> Approval pending for other
          <Link className="text-blue-500 ml-2" to="/">View</Link>
        </p>
      </div>

      {/* Fixed Amount Dropdown */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-2">
          <input value="Valid Content" type="checkbox" />
          <p className="text-sm">Select All</p>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-1 p-1 text-sm font-medium text-black rounded-md"
            onClick={toggleDropdown}
          >
            Fixed Amount <KeyboardArrowDownIcon />
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-56 bg-white border rounded-md shadow-md">
              <div className="py-1">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Option 1
                </a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Option 2
                </a>
              </div>
            </div>
          )}
        </div>
        <button className="bg-purple-800 text-white rounded-md p-1" type="submit">
          Apply
        </button>
      </div>

      {/* Staff Entries */}
      <div className="shadow-md rounded-md p-5 mb-5">
        <div className="flex items-center gap-4">
          <input value="Valid Content" type="checkbox" />
          <div>
            <h5 className="text-sm">Rishi Flowchanger</h5>
            <p className="text-xs text-gray-500">In 10:37 AM | Out 6:52 PM</p>
          </div>
          <div className="flex gap-4 ml-12">
            <div>
              <h5 className="text-xs font-medium">37 min late</h5>
              <p className="text-xs text-gray-500">37 min</p>
            </div>
            <div>
              <h5 className="text-xs font-medium">23 Sep, 2024</h5>
              <p className="text-xs text-gray-500">DAILY SHIFT</p>
            </div>
          </div>
        </div>
        {/* Details Section */}
        <div className="p-5 flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <input value="Valid Content" type="checkbox" />
              <p className="text-sm font-medium">Late Entry</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-xs">Hours</p>
                <p className="text-sm bg-gray-100 p-1 rounded-md">00:37 hrs</p>
                <p className="text-xs">$48.37</p>
              </div>
              <div>
                <p className="text-xs">Fine Amount</p>
                <button
                  className="w-40 p-1 text-left text-sm rounded-md bg-gray-200"
                  onClick={toggleDropdown1}
                >
                  1x Salary <KeyboardArrowDownIcon />
                </button>
                {isOpen1 && (
                  <div className="absolute z-10 mt-2 w-40 bg-white border rounded-md shadow-md">
                    <div className="py-1">
                      <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 1
                      </a>
                      <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 2
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="bg-purple-800 text-white rounded-md p-1" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFine;