import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Attendance = () => {
  const [toggleButton, settoggleButton] = useState({
    updateTime: false,
    selectShift: false,
    addShift: false,
  });

  const selectOptions = Array(7).fill("");

  const toggleModal = (modalName, isOpen) => {
    settoggleButton((prev) => ({
      ...prev,
      [modalName]: isOpen,
    }));
  };

  return (
    <div>
      <div className="flex gap-6">
        <button className="text-[#511992] border border-[#511992] px-3 py-2 rounded-md font-medium">
          Work timings
        </button>
        <button className="text-white border bg-[#511992] border-[#511992] px-3 py-2 rounded-md font-medium">
          Attendance Modes
        </button>
        <button className="text-white border bg-[#511992] border-[#511992] px-3 py-2 rounded-md font-medium">
          Automation Rules
        </button>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search staff"
            className="w-[260px] px-4 py-2 border bg-[#F4F5F9] border-[#DBDCDE] rounded-md"
          />
        </div>

        <select className="px-4 py-2 border w-[260px] text-[#B1B1B1] border-[#DBDCDE] rounded-md bg-[#F4F5F9]">
          <option>All Departments</option>
        </select>

        <button className="p-4 rounded-full bg-[#F4F5F9] text-purple-600">
          <FaFilter />
        </button>
        <h1 className="text-[14px]">More Filter</h1>

        <button
          onClick={() => toggleModal("updateTime", true)}
          className="px-4 py-2 text-white bg-[#511992] rounded font-medium hover:bg-purple-700 absolute right-[30px]"
        >
          Update Work Timings
        </button>
      </div>

      {/* Update Time Modal */}
      {toggleButton.updateTime && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}

      {toggleButton.updateTime && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex justify-center items-center"
        >
          <div className="w-[50rem] bg-white rounded-lg shadow-lg">
            <h2 className="text-[16px] font-medium p-4 border-b border-[#B1B1B1]">
              Bulk Update Work Timings for All Staff
            </h2>
            <div className="p-12">
              <div className="bg-[#E2E5F3] px-2 py-3 mx-10 pl-8 border border-[#541A9740] rounded-md flex items-center text-[#B1B1B1] mb-8 gap-[8rem]">
                <label className="font-medium mr-4">Select Type</label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timing-type"
                    className="form-radio text-purple-600"
                  />
                  <span>Fixed</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="timing-type"
                    className="form-radio text-[#511992]"
                  />
                  <span>Flexible</span>
                </label>
              </div>

              <div className="flex text-[16px] gap-14 border-b border-[#B1B1B1] pb-6 font-semibold">
                <p>Day</p>
                <p>Weekoff</p>
                <p>Shifts</p>
              </div>

              <div className="grid grid-cols-3 gap-7 items-center justify-between pt-6">
                <div className="flex gap-[5rem] items-center">
                  <div className="flex flex-col gap-5">
                    <label htmlFor="">Mon</label>
                    <label htmlFor="">Tue</label>
                    <label htmlFor="">Wed</label>
                    <label htmlFor="">Thu</label>
                    <label htmlFor="">Fri</label>
                    <label htmlFor="">Sat</label>
                    <label htmlFor="">Sun</label>
                  </div>

                  <div className="flex flex-col gap-[30px]">
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                  </div>

                  <div className="flex flex-col gap-[14px]">
                    {selectOptions.map((_, index) => (
                      <select
                        key={index}
                        onClick={() => toggleModal("selectShift", true)}
                        className="px-2 py-1 pr-[10.5rem] text-[13px] rounded-md border border-[#DBDCDE] bg-[#F4F5F9] text-[#B1B1B1]"
                      >
                        <option value="">Select Shift</option>
                      </select>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6 border-t border-[#B1B1B1] space-x-4">
                <button
                  onClick={() => toggleModal("updateTime", false)}
                  className="border border-[#511992] mt-6 text-[#511992] text-[14px] py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button className="bg-[#511992] border border-[#511992] mt-6 text-white text-[14px] py-2 px-4 rounded">
                  Update Work Timings for All Staff
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Select Shift Modal */}
      {toggleButton.selectShift && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50"></div>
      )}

      {toggleButton.selectShift && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[110] flex justify-center items-center"
        >
          <div className="w-[35rem] h-auto bg-white border border-[#B1B1B1] rounded-lg shadow-lg p-4">
            <h2 className="text-[16px] font-medium p-4">Monday - Shifts</h2>
            <p className="mt-2 p-5 py-6 border-b border-t border-[#B1B1B1]">
              No options available...
            </p>

            <button
              onClick={() => toggleModal("addShift", true)}
              className="text-[16px] font-semibold mt-4 text-[#511992]"
            >
              + Add Shift
            </button>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => toggleModal("selectShift", false)}
                className=" bg-[#511992] text-white border border-[#511992] text-[14px] py-2 px-6 rounded-md"
              >
                Okay
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {toggleButton.addShift && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-[60]"></div>
      )}

      {toggleButton.addShift && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[110] flex justify-center items-center"
        >
          <div className="w-[658px] h-auto bg-white border border-[#B1B1B1] rounded-lg shadow-lg p-5">
            <h2 className="text-[16px] font-medium p-2 pb-9">Add New Shift</h2>

            <div className="p-12  border-t border-b border-[#B1B1B1] ">
              <div className="flex flex-col">
                <label className="text-[14px] text-[#2B2A2D]" htmlFor="">
                  Shift Name*
                  <input
                    className="border border-[#DBDCDE] h-[42px] w-[480px] rounded-md"
                    type="text"
                  />
                </label>

                <label className="text-[14px] mt-5 text-[#2B2A2D]" htmlFor="">
                  Shift Start Time*
                  <input
                    className="border border-[#DBDCDE] h-[42px] w-[480px] rounded-md"
                    type="text"
                  />
                </label>
              </div>

              <div className="flex space-x-4">
                {/*-- Anytime option --*/}
                <label
                  className="text-[14px] flex flex-col mt-5 text-[#2B2A2D]"
                  htmlFor=""
                >
                  Can Punch In*
                  <div className="border flex items-center gap-3 h-[46px] w-[230px] pl-2 rounded-md border-[#DBDCDE]">
                    <input
                      className=" h-[24px] w-[24px] rounded-md"
                      type="radio"
                    />

                    <h1>Anytime</h1>
                  </div>
                </label>
                <div className="border mt-10 flex items-center gap-3 h-[46px] w-[230px] pl-2 rounded-md border-[#DBDCDE]">
                  <input
                    className=" h-[24px] w-[24px] rounded-md"
                    type="radio"
                  />

                  <h1>Add Limit</h1>
                </div>
              </div>

              <div className="mt-5">
                <label
                  className="text-[14px] flex flex-col text-[#2B2A2D]"
                  htmlFor=""
                >
                  Shift End Time*
                  <input
                    className="border border-[#DBDCDE] h-[42px] w-[230px] rounded-md"
                    type="text"
                  />
                </label>
              </div>

              <div className="flex space-x-4">
                {/*-- Anytime option --*/}
                <label
                  className="text-[14px] flex flex-col mt-5 text-[#2B2A2D]"
                  htmlFor=""
                >
                  Can Punch Out*
                  <div className="border flex items-center gap-3 h-[46px] w-[230px] pl-2 rounded-md border-[#DBDCDE]">
                    <input
                      className=" h-[24px] w-[24px] rounded-md"
                      type="radio"
                    />

                    <h1>Anytime</h1>
                  </div>
                </label>
                <div className="border mt-10 flex items-center gap-3 h-[46px] w-[230px] pl-2 rounded-md border-[#DBDCDE]">
                  <input
                    className=" h-[24px] w-[24px] rounded-md"
                    type="radio"
                  />

                  <h1>Add Limit</h1>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => toggleModal("addShift", false)}
                className="border border-[#511992] mt-6 text-[#511992] text-[14px] py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button className="bg-[#511992] border border-[#511992] mt-6 text-white text-[14px] py-2 px-4 rounded">
                Add Shift
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full mt-8 bg-white">
          <thead>
            <tr>
              <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-start border-b border-t border-r border-[#DBDBDB]">
                #
              </th>
              <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-start border-b border border-[#DBDBDB]">
                Name
              </th>
              <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-start border-b border border-[#DBDBDB]">
                Job Title
              </th>
              <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px] text-start border-b border border-[#DBDBDB]">
                Schedule Type
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
