import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WarningIcon from "@mui/icons-material/Warning";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../../../Context/GlobalContext";
const Attendence_summary = () => {
  const { baseUrl, openToast } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  // Function to open the modal 2
  const openModal2 = () => {
    setIsOpen2(true);
  };

  // Function to close the modal 2
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  //salary2 dropdown
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  //salary2 dropdown

  // Function to open the modal 6

  const [isOpen6, setIsOpen6] = useState(false);
  const openModal6 = () => {
    setIsOpen6(true);
  };

  // Function to close the modal 6
  const closeModal6 = () => {
    setIsOpen6(false);
  };

  //salary2 dropdown
  const [isOpen9, setIsOpen9] = useState(false);

  const toggleDropdown9 = () => {
    setIsOpen9(!isOpen9);
  };

  //salary2 dropdown

  // Function to open the modal 7

  const [isOpen0, setIsOpen0] = useState(false);
  const openModal0 = () => {
    setIsOpen0(true);
  };

  // Function to close the modal 7
  const closeModal0 = () => {
    setIsOpen0(false);
  };

  // Function to open the modal 12

  const [isOpen12, setIsOpen12] = useState(false);
  const openModal12 = () => {
    setIsOpen12(true);
  };

  // Function to close the modal 12
  const closeModal12 = () => {
    setIsOpen12(false);
  };

  // Function to open the modal 14

  const [isOpen14, setIsOpen14] = useState(false);
  const openModal14 = () => {
    setIsOpen14(true);
  };

  // Function to close the modal 14
  const closeModal14 = () => {
    setIsOpen14(false);
  };

  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summaryDate, setSummaryDate] = useState(null);

  const inputDate = summaryDate;

  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  console.log(formattedDate);

  async function fetchAttendanceDetail() {
    const inputDate = summaryDate;

    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    const result = await fetch(
      baseUrl + `attendance/summary?type=day&date=${formattedDate}`
    );
    console.log(result);
    if (result.status == 200) {
      const res = await result.json();
      console.log("------", res);
      setAttendance(res.records);
    }
  }
  useEffect(() => {
    if (summaryDate) {
      fetchAttendanceDetail();
    }
  }, [summaryDate]);
  const [selectedStatus, setSelectedStatus] = useState("");
  async function confirmation(item) {
    setLoading(true);
    try {
      if (selectedStatus == "") {
        openToast("Please Select Status", "error");
        return;
      }

      const result = await fetch(
        baseUrl + `attendance/status/${item.punchRecord.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ status: selectedStatus }),
        }
      );
      if (result.status == 200) {
        openToast("Updated Status Successfully", "success");
        fetchAttendanceDetail();
      } else {
        openToast("Something went wrong", "error");
      }
    } catch (error) {
      openToast("Something went wrong", "error");
    } finally {
      setLoading(false);
      closeModal(); // Close the modal after completion
    }
  }

  return (
    <div className="p-[20px] w-full work-fine">
      <div className="flex  justify-between satisfy-summary  ">
        <div className="flex gap-[10px] summary-bold">
          <h1 className="font-semibold">Attendence Summary</h1>
          <p className="bg-[#edd0ca] p-[5px] text-[12px] border border-b border-[#e07964] text-[black] rounded-md">
            {" "}
            <WarningIcon className="warning-icon text-[14px] text-[red] " />{" "}
            Approval pending for other{" "}
            <Link className="text-[blue] ml-[10px]" to="/">
              View
            </Link>{" "}
          </p>
        </div>
        <div className="flex gap-[10px] summary-bold2">
          <Link className="text-[blue] text-[14px] font-semibold" to="/">
            Unprocessed Logs <FilterListIcon className="icon-filter" />
          </Link>
          <Link className="text-[blue] text-[14px] font-semibold" to="/">
            Daily Report <DownloadIcon className="icon-filter" />
          </Link>
          <Link className="text-[blue] text-[14px] font-semibold " to="/">
            Setting <SettingsIcon className="icon-filter" />
          </Link>
        </div>
      </div>

      <div className="bg-[#fff] shadow-cs p-[20px] rounded-md mt-[24px] ">
        <div className="flex gap-[14px] justify-between items-center review-summary  ">
          <div className="flex ">
            <input
              className="bg-transparent font-medium text-[14px]"
              type="date"
              onChange={(e) => setSummaryDate(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-[14px] approval-new ">
            <h2 className="text-[14px] font-medium">
              Total Pending for Approval : 10
            </h2>
            <Link
              className="bg-[#27004a] text-[white] review-btn rounded-md"
              to="/"
            >
              Review
            </Link>
          </div>
        </div>
        <div className="mt-[16px] flex gap-[30px] summary-bold1">
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Total Staff
            </h2>
            <p className="text-[14px] font-semibold">13</p>
          </div>
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Present
            </h2>
            <p className="text-[14px] font-semibold">0(+ 10)</p>
          </div>
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">Absent</h2>
            <p className="text-[14px] font-semibold">1</p>
          </div>
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Half Day
            </h2>
            <p className="text-[14px] font-semibold">0</p>
          </div>
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Overtime Hours
            </h2>
            <p className="text-[14px] font-semibold">00.00</p>
          </div>
          <div className="total-staff w-[15%] new-staff3">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Fine Hours
            </h2>
            <p className="text-[14px] font-semibold">04.29</p>
          </div>
          <div className="total-staff1 w-[15%]">
            <h2 className="text-[14px] font-normal text-[#000000bf]">
              Paid Leave
            </h2>
            <p className="text-[14px] font-semibold">0</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ffff] shadow-cs p-[20px] rounded-md mt-[24px] flex gap-[10px] over-new">
        <Link
          to="/worktime"
          className="total-staff text-[blue]  text-[14px] font-medium"
        >
          Daily Work Entry
        </Link>
        <Link
          to="/reviewfine"
          className="total-staff text-[blue]  text-[14px] font-medium"
        >
          Fine
        </Link>
        <Link
          to="/overtime"
          className=" total-staff text-[blue] text-[14px] font-medium"
        >
          Overtime
        </Link>
      </div>
      <div className="relative">
        <SearchIcon className="absolute top-[34px] right-[7px]" />
        <input
          className="bg-[#ffff] shadow-cs w-full pr-[38px] mt-[24px] p-[10px] rounded-md search-staff "
          type="text"
          placeholder="Search Staff by Name , Phone Number or Employee ID"
        />
      </div>
      <div className="flex gap-[10px] items-center mt-[20px]">
        <h1>Creative Department</h1>
        <p className="bg-[#fff] shadow-cs four">4</p>
      </div>

      {!summaryDate && attendance.length === 0 && (
        <div className="text-center">
          <h2 className="text-[#ff0000] font-medium py-9 text-sm">
            Please Select Date
          </h2>
        </div>
      )}

      {attendance?.map((item, index) => {
        return (
          <>
            <div className="shadow p-[20px] mt-[18px] rounded-md shadow-cs">
              <div className="flex items-start justify-between  flex-col xl:flex-row lg:flex-row md:flex-row xl:items-center lg:items-center md:items-center gap-4 xl:gap-0 lg:gap-0 md:gap-0">
                <div>
                  <p className="text-[16px]">
                    {item?.punchRecord?.staff?.User?.name}
                  </p>
                  <p className="text-[16px]">
                    {item?.punchRecord?.staff?.User?.email}
                  </p>
                  <p className="text-[red] text-[14px]">
                    {item?.punchRecord.status}
                  </p>
                  <p className="text-[#27004a] font-medium text-[14px] mt-[10px] w-[150px]">
                    Add Note - Login
                  </p>
                </div>

                <div className="flex gap-[18px] xl:flex-col flex-row md:flex-col lg:flex-col set-workd w-full justify-between xl:justify-start md:justify-start lg:justify-start ">
                  <div className="flex gap-[20px] flex-col xl:flex-row lg:flex-row md:flex-row xl:justify-end lg:justify-end md:justify-end">
                    <div className="flex xl:justify-center justify-start items-center">
                      {/* Button to open modal */}
                      <button
                        onClick={() => {
                          setSelectedStatus("PRESENT");
                          openModal();
                        }}
                        className={`btns px-6 py-3 text-[14px]  font-medium rounded-md 
                                                    focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow-md 
                                                    ${
                                                      item?.punchRecord
                                                        .status === "PRESENT"
                                                        ? "bg-[#008000] text-white"
                                                        : "bg-[#fff] text-[#000]"
                                                    }`}
                      >
                        P I Present
                      </button>

                      {/* Modal overlay and content */}
                      {/* {isOpen6 && (
                                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[430px] p-6">
                                                    <div className='flex items-center justify-between'>
                                                        <div className='mb-[20px]'>
                                                            <h2 className="text-xl text-[18px] text-[black] font-semibold  ">Present Day </h2>
                                                            <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                                        </div>
                                                        <button className="px-4 py-2 bg-[#27004a] text-white rounded-md">Add Shift</button>

                                                    </div>

                                                    <div className='bg-[#ececec] p-[10px] rounded-md mb-[20px] '>
                                                        <div className='text-right'>
                                                            <DeleteIcon className='del-icon text-[#89868d]' />
                                                        </div>
                                                        <div className="w-[100%]" >
                                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Shift Time</label>    <br />
                                                            <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                                                <option>Daily Shift</option>
                                                                <option>Option 2</option>

                                                            </select>
                                                        </div>
                                                        <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                            <div className='w-[50%] relative'>
                                                                <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                                <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                                <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                            </div>
                                                            <div className='w-[50%] relative'>
                                                                <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                                <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                                <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-col gap-[10px] ">
                                                        <button

                                                            className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={closeModal6}
                                                            className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )} */}
                    </div>

                    <div className="flex justify-center items-center">
                      {/* Button to open modal */}
                      <button
                        onClick={() => {
                          setSelectedStatus("HALFDAY");
                          openModal();
                        }}
                        className={`btns px-6 py-3 text-[14px]  font-medium rounded-md 
                                                    focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow-md 
                                                    ${
                                                      item?.punchRecord
                                                        .status === "HALFDAY"
                                                        ? "bg-[#008000] text-white"
                                                        : "bg-[#fff] text-[#000]"
                                                    }`}
                      >
                        HD I HalfDay
                      </button>

                      {/* Modal overlay and content */}
                      {/* {isOpen2 && (
                                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[430px] p-6">
                                                    <div className='flex items-center justify-between'>
                                                        <div className='mb-[20px]'>
                                                            <h2 className="text-xl text-[18px] text-[black] font-semibold  ">Half Day </h2>
                                                            <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                                        </div>
                                                        <button className="px-4 py-2 bg-[#27004a] text-white rounded-md">Add Shift</button>

                                                    </div>

                                                    <div className='bg-[#ececec] p-[16px] rounded-md mb-[20px] '>
                                                        <div className='text-right'>
                                                            <DeleteIcon className='del-icon text-[#89868d]' />
                                                        </div>
                                                        <div className="w-[100%]" >
                                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Shift Time</label>    <br />
                                                            <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                                                <option>Daily Shift</option>
                                                                <option>Option 2</option>

                                                            </select>
                                                        </div>
                                                        <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                            <div className='w-[50%] relative'>
                                                                <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                                <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                                <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                            </div>
                                                            <div className='w-[50%] relative'>
                                                                <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                                <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                                <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-[10px] ">
                                                        <button

                                                            className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={closeModal2}
                                                            className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )} */}
                    </div>

                    <div className="flex xl:justify-center justify-start items-center">
                      {/* Button to open modal */}
                      <button
                        onClick={openModal0}
                        className=" btns px-6 py-3 text-[14px] text-[#27004a] font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow"
                      >
                        F I Fine
                      </button>

                      {/* Modal overlay and content */}
                      {isOpen0 && (
                        <div className="fixed inset-0 z-50 p-[10px] flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-scroll h-[100%] p-6">
                            <div className="">
                              <div className="mb-[20px]">
                                <h2 className="text-xl text-[18px] text-[black] font-semibold  ">
                                  {" "}
                                  Fine{" "}
                                </h2>
                                <p className=" text-[14px]">
                                  Name I 28 Sep, 2024
                                </p>
                              </div>

                              <div className="flex justify-between items-center mb-[10px]">
                                <p className="text-[16px]  font-medium">
                                  DAILY SHIFT
                                </p>
                                <DeleteIcon className="del-icon2 text-[#89868d]" />
                              </div>
                            </div>

                            <div className=" p-[10px]   ">
                              <div className="flex items-center justify-between mb-[5px]">
                                <p className="text-[14px] font-medium">
                                  Late Entry
                                </p>
                                <CloseIcon className="close-icon text-[#89868d]" />
                              </div>

                              <div className="flex items-center gap-[20px]">
                                <div>
                                  <p className="text-[12px]">Hours</p>
                                  <p className="text-[14px] select-pe  pl-[30px] pr-[30px] pt-[6px] pb-[6px]  rounded-md">
                                    00:41 hrs
                                  </p>
                                  <p className="text-[12px]">Amount $ 61.63</p>
                                </div>
                                <div className="flex gap-[28px] ">
                                  <div className="w-[100%]">
                                    <select className="border border-[#c9c9c9] rounded-md pl-[20px] pr-[20px] pt-[6px] pb-[6px]  w-[100%] bg-[#ececec]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                                      <option>1x Salary</option>
                                      <option>Option 2</option>
                                    </select>
                                  </div>
                                  <div className="">
                                    <p className="text-[14px]  rounded-md select-pe p-[6px] w-[124px]">
                                      00:00 Per Hours
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-[10px] ">
                              <div className="flex items-center justify-between mb-[5px]">
                                <p className="text-[14px] font-medium">
                                  Excess Breaks
                                </p>
                                <CloseIcon className="close-icon text-[#89868d]" />
                              </div>

                              <div className="flex items-center gap-[20px]">
                                <div>
                                  <p className="text-[12px]">Hours</p>
                                  <p className="text-[14px] select-pe  pl-[30px] pr-[30px] pt-[6px] pb-[6px]  rounded-md">
                                    00:41 hrs
                                  </p>
                                  <p className="text-[12px]">Amount $ 61.63</p>
                                </div>
                                <div className="flex gap-[28px] ">
                                  <div className="w-[100%]">
                                    <select className="border border-[#c9c9c9] rounded-md pl-[20px] pr-[20px] pt-[6px] pb-[6px]  w-[100%] bg-[#ececec]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                                      <option>1x Salary</option>
                                      <option>Option 2</option>
                                    </select>
                                  </div>
                                  <div className="">
                                    <p className="text-[14px]  rounded-md select-pe p-[6px] w-[124px]">
                                      00:00 Per Hours
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-[10px] ">
                              <div className="flex items-center justify-between mb-[5px]">
                                <p className="text-[14px] font-medium">
                                  Early Out
                                </p>
                                <CloseIcon className="close-icon text-[#89868d]" />
                              </div>

                              <div className="flex items-center gap-[20px]">
                                <div>
                                  <p className="text-[12px]">Hours</p>
                                  <p className="text-[14px] select-pe  pl-[30px] pr-[30px] pt-[6px] pb-[6px]  rounded-md">
                                    00:41 hrs
                                  </p>
                                  <p className="text-[12px]">Amount $ 61.63</p>
                                </div>
                                <div className="flex gap-[28px] ">
                                  <div className="w-[100%]">
                                    <select className="border border-[#c9c9c9] rounded-md pl-[20px] pr-[20px] pt-[6px] pb-[6px]  w-[100%] bg-[#ececec]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                                      <option>1x Salary</option>
                                      <option>Option 2</option>
                                    </select>
                                  </div>
                                  <div className="">
                                    <p className="text-[14px]  rounded-md select-pe p-[6px] w-[124px]">
                                      00:00 Per Hours
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[10px] mb-[10px]">
                              <span className="text-[12px]">Total Amount</span>
                              <p className="text-[14px]">$20.92</p>
                            </div>
                            <div className="flex items-center mb-[20px] gap-[4px] ">
                              <input type="checkbox" />
                              <p className="text-[14px]">Send SMS to Staff</p>
                            </div>

                            <div className="flex flex-col gap-[10px] ">
                              <button className="px-4 py-2 bg-[#27004a] text-white rounded-md">
                                Apply Fine
                              </button>
                              <button
                                onClick={closeModal0}
                                className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-[20px] flex-col xl:flex-row lg:flex-row md:flex-row xl:justify-end lg:justify-end md:justify-end">
                    <div className="flex justify-center items-center">
                      {/* Button to open modal */}
                      <button
                        onClick={openModal12}
                        className=" btns px-6 py-3 text-[14px] text-black font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow"
                      >
                        OT I Overtime
                      </button>

                      {/* Modal overlay and content */}
                      {isOpen12 && (
                        <div className="fixed inset-0 z-50 p-[10px] flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white rounded-lg shadow-lg max-w-lg overflow-scroll w-full h-[100%] p-6">
                            <div className="">
                              <div className="mb-[20px]">
                                <h2 className="text-xl text-[18px] text-[#27004a] font-semibold  ">
                                  {" "}
                                  Overtime Day{" "}
                                </h2>
                                <p className=" text-[14px]">
                                  Name I 28 Sep, 2024
                                </p>
                              </div>

                              <div className="flex justify-between items-center mb-[10px]">
                                <p className="text-[14px] font-medium">
                                  DAILY SHIFT
                                </p>
                                <DeleteIcon className="del-icon2 text-[#89868d]" />
                              </div>
                            </div>

                            <div className=" p-[10px]   ">
                              <div className="flex items-center justify-between mb-[5px]">
                                <p className="text-[14px] font-medium">
                                  Late Out
                                </p>
                                <CloseIcon className="close-icon text-[#89868d]" />
                              </div>

                              <div className="flex items-center gap-[20px]">
                                <div>
                                  <p className="text-[12px]">Hours</p>
                                  <p className="text-[14px] select-pe  pl-[30px] pr-[30px] pt-[6px] pb-[6px]  rounded-md">
                                    00:41 hrs
                                  </p>
                                  <p className="text-[12px]">Amount $ 61.63</p>
                                </div>
                                <div className="flex gap-[28px] ">
                                  <div className="w-[100%]">
                                    <select className="border border-[#c9c9c9] rounded-md pl-[20px] pr-[20px] pt-[6px] pb-[6px]  w-[100%] bg-[#ececec]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                                      <option>1x Salary</option>
                                      <option>Option 2</option>
                                    </select>
                                  </div>
                                  <div className="">
                                    <p className="text-[14px]  rounded-md select-pe p-[6px] w-[124px]">
                                      00:00 Per Hours
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="p-[10px] ">
                              <div className="flex items-center justify-between mb-[5px]">
                                <p className="text-[14px] font-medium">
                                  Early In
                                </p>
                                <CloseIcon className="close-icon text-[#89868d]" />
                              </div>

                              <div className="flex items-center gap-[20px]">
                                <div>
                                  <p className="text-[12px]">Hours</p>
                                  <p className="text-[14px] select-pe  pl-[30px] pr-[30px] pt-[6px] pb-[6px]  rounded-md">
                                    00:41 hrs
                                  </p>
                                  <p className="text-[12px]">Amount $ 61.63</p>
                                </div>
                                <div className="flex gap-[28px] ">
                                  <div className="w-[100%]">
                                    <select className="border border-[#c9c9c9] rounded-md pl-[20px] pr-[20px] pt-[6px] pb-[6px]  w-[100%] bg-[#ececec]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                                      <option>1x Salary</option>
                                      <option>Option 2</option>
                                    </select>
                                  </div>
                                  <div className="">
                                    <p className="text-[14px]  rounded-md select-pe p-[6px] w-[124px]">
                                      00:00 Per Hours
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[10px] mb-[10px]">
                              <span className="text-[12px]">Total Amount</span>
                              <p className="text-[14px]">$20.92</p>
                            </div>
                            <div className="flex items-center mb-[20px] gap-[4px] ">
                              <input type="checkbox" />
                              <p className="text-[14px]">Send SMS to Staff</p>
                            </div>

                            <div className="flex flex-col gap-[10px] ">
                              <button className="px-4 py-2 bg-[#27004a] text-white rounded-md">
                                Apply Overtime
                              </button>
                              <button
                                onClick={closeModal12}
                                className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      {/* Button to open modal */}
                      <button
                        onClick={() => {
                          setSelectedStatus("PAIDLEAVE");
                          openModal();
                        }}
                        className={`btns px-6 py-3 text-[14px]  font-medium rounded-md 
                                                    focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow-md 
                                                    ${
                                                      item?.punchRecord
                                                        .status === "PAIDLEAVE"
                                                        ? "bg-[#008000] text-white"
                                                        : "bg-[#fff] text-[#000]"
                                                    }`}
                      >
                        L I Paid Leave
                      </button>

                      {/* Modal overlay and content */}
                      {isOpen14 && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
                          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[200px] p-6">
                            <h2 className="text-xl text-center text-[18px] text-[black] font-semibold mt-[28px] mb-[6px] ">
                              Sure You Want To Accept ?{" "}
                            </h2>
                            <p className="text-center mb-[16px] text-[14px]">
                              Are you sure you want to accept this ??
                            </p>

                            <div className="flex justify-around ">
                              <button className="px-4 py-2 bg-[#27004a] text-white rounded-md">
                                Yes , Confirm
                              </button>
                              <button
                                onClick={closeModal14}
                                className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                              >
                                No , Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex xl:justify-center lg:justify-center md:justify-center items-center justify-end">
                      {/* Button to open modal */}
                      <button
                        onClick={() => {
                          setSelectedStatus("ABSENT");
                          openModal();
                        }}
                        className={`btns px-6 py-3 text-[14px]  font-medium rounded-md 
                                                    focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow-md 
                                                    ${
                                                      item?.punchRecord
                                                        .status === "ABSENT"
                                                        ? "bg-[#008000] text-white"
                                                        : "bg-[#fff] text-[#000]"
                                                    }`}
                      >
                        A I Absent
                      </button>

                      {/* Modal overlay and content */}
                      {isOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
                          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[200px] p-6">
                            <h2 className="text-xl text-center text-[18px] text-[black] font-semibold mt-[28px] mb-[6px] ">
                              Sure You Want To Accept ?{" "}
                            </h2>
                            <p className="text-center mb-[16px] text-[14px]">
                              Are you sure you want to accept this ??
                            </p>

                            <div className="flex justify-around ">
                              <button
                                onClick={() => {
                                  confirmation(item);
                                }}
                                disabled={loading}
                                className={`px-4 py-2 bg-[#27004a] text-white rounded-md ${
                                  loading ? "opacity-50" : ""
                                }`}
                              >
                                {loading ? "Confirming..." : " Yes , Confirm"}
                              </button>
                              <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-[#27004a] text-white rounded-md"
                              >
                                No , Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Attendence_summary;
