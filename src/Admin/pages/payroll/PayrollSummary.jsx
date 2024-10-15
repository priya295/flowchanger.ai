import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
const PayrollSummary = () => {

    const [toggleDrop, setToggleDrop] = useState(false);

    function handledrop() {
        setToggleDrop(!toggleDrop)
    }

    const [toggleDrop1, setToggleDrop1] = useState(false);

    function handledrop1() {
        setToggleDrop1(!toggleDrop1)
    }


    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleCollapse1 = () => {
        setIsOpen1(!isOpen1);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleCollapse2 = () => {
        setIsOpen2(!isOpen2);
    };

    const [isOpen3, setIsOpen3] = useState(false);

    const toggleCollapse3 = () => {
        setIsOpen3(!isOpen3);
    };
    return (
        <div className='mt-[20px]'>
            <div className='flex justify-between items-end flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
                <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>

                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px]'>Payroll Month</label>
                    <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />
                    </div>
                    <div className='xl:w-[240px]'>
                    <label htmlFor="" className='text-[14px]'>Company Branches</label>
                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Branches</option>
                        <option>Demo Main Branchs</option>

                    </select>
                    </div>

                    <div className='xl:w-[240px]'>
                    <label htmlFor="" className='text-[14px]'>Departments</label>
                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Departments</option>
                        <option>Website</option>

                    </select>
                    </div>


                </div>
                <div className=''>
                    <Link to="#" className='text-[#1890ff] font-normal'>Reset</Link>
                </div>
            </div>

            <div className='justify-between flex'>



                <div className='xl:w-[60%]'>
                    <div className='bg-white set-shadow mt-[20px] rounded-md p-[20px]'>
                        <Link to="/payroll-salary" className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                            <p className='text-[13px] w-[300px]'>Total Payroll <InfoIcon /> </p>
                            <p className='text-[13px]'>0 Staff</p>
                            <p className='text-[13px]'>₹ 0.00</p>
                        </Link>

                        <Link to="/payroll-salary" className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                            <p className='text-[13px] w-[300px]'>Paid <InfoIcon /> </p>
                            <p className='text-[13px]'>0 Staff</p>
                            <p className='text-[13px]'>₹ 0.00</p>
                        </Link>

                        <Link to="/payroll-salary" className='flex  pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                            <p className='text-[13px] w-[300px]'>Pending <InfoIcon /> </p>
                            <p className='text-[13px]'>0 Staff</p>
                            <p className='text-[13px]'>₹ 0.00</p>
                        </Link>

                    </div>

                    <div className='bg-white set-shadow mt-[20px] rounded-md mt-[20px]'>

                        <h2 className='p-[20px] border-b'>Earning Details</h2>
                        <div className='p-[20px]'>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Work Basis Payment </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Incentives </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Reimbursement                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Bonus                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Overtime Pay
                                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Other Earnings
                                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>

                        </div>



                    </div>




                    <div className='bg-white set-shadow mt-[20px] rounded-md mt-[20px]'>
                        <div className='flex justify-between p-[20px] border-b items-center'>
                            <h2 className=''>Statutory Compliance Details</h2>
                            <div className='relative'>
                                <button className='bg-[#e5e7eb] text-[#000] p-[3px] text-[16px] font-normal rounded-md' onClick={handledrop}><MoreVertIcon /></button>

                                {
                                    toggleDrop &&

                                    <div className="absolute w-[98%] xl:w-[300px] xl:left-[-270px]  lg:w-[200px] lg:left-[-100px]  md:w-[200px] md:left-[-100px] left-[4px] right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white set-shadow ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <NavLink to="/calender" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]' /> Provident Fund Challan Report</NavLink>
                                            <NavLink to="/day-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-0"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]' /> ESI Challan Report</NavLink>
                                            <NavLink to="/week-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]' /> Tax Deducated at Source Report</NavLink>

                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        <div className='p-[20px]'>
                            <div>
                                <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                    <p className='text-[13px] w-[300px]'>Total Provident Fund
                                    </p>
                                    <p className='text-[13px] pl-[31px]'>0 Staff</p>
                                    <p className='text-[13px] flex gap-[10px] relative right-[-23px] items-center'>₹ 0.00

                                        <KeyboardArrowDownIcon className='border rounded-full border-[#000] arrow-down' onClick={toggleCollapse} />

                                    </p>


                                </div>

                                <div
                                    className={`transition-all pl-[20px] pr-[20px] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"
                                        }`}
                                >
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employer Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employee Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            EDLI & Admin Charges
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                    <p className='text-[13px] w-[300px]'>Total Labour Welfare Fund Tax
                                    </p>
                                    <p className='text-[13px] pl-[31px]'>0 Staff</p>
                                    <p className='text-[13px] flex gap-[10px] relative right-[-23px] items-center'>₹ 0.00
                                        <KeyboardArrowDownIcon className='border rounded-full border-[#000] arrow-down' onClick={toggleCollapse2} />
                                    </p>


                                </div>

                                <div
                                    className={`transition-all pl-[20px] pr-[20px] duration-500 ease-in-out overflow-hidden ${isOpen2 ? "max-h-screen" : "max-h-0"
                                        }`}
                                >
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employer Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employee Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                    <p className='text-[13px] w-[300px]'>Total Employees' State Insurance

                                    </p>
                                    <p className='text-[13px] pl-[31px]'>0 Staff</p>
                                    <p className='text-[13px] flex gap-[10px] relative right-[-23px] items-center'>₹ 0.00
                                        <KeyboardArrowDownIcon className='border rounded-full border-[#000] arrow-down' onClick={toggleCollapse1} />
                                    </p>


                                </div>

                                <div
                                    className={`transition-all pl-[20px] pr-[20px] duration-500 ease-in-out overflow-hidden ${isOpen1 ? "max-h-screen" : "max-h-0"
                                        }`}
                                >
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employer Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>
                                    <div className=" p-[5px] flex justify-between">
                                        <p className='text-[13px]'>
                                            Employee Contribution
                                        </p>
                                        <p className='text-[13px]'>
                                            ₹ 0.00
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Bonus                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>

                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Total Professional Tax
                                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Total Tax Deducted at Source  <InfoIcon />

                                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>

                        </div>
                    </div>


                    <div className='bg-white set-shadow mt-[20px] rounded-md mt-[20px]'>
                        <div className='flex justify-between p-[20px] border-b '>
                            <h2 className=''>Total Loan Amount</h2>
                            <div className='relative'>
                                <button className='bg-[#e5e7eb] text-[#000] p-[3px] text-[16px] font-normal rounded-md' onClick={handledrop1}><MoreVertIcon /></button>

                                {
                                    toggleDrop1 &&

                                    <div className="absolute w-[98%] xl:w-[300px] xl:left-[-270px]  lg:w-[200px] lg:left-[-100px]  md:w-[200px] md:left-[-100px] left-[4px] right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white set-shadow ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <NavLink to="/calender" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]' /> Loan Report</NavLink>

                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        <div className='p-[20px]'>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Given </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Received </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>
                            <div className='flex  pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                                <p className='text-[13px] w-[300px]'>Pending Loan Amount
                                </p>
                                <p className='text-[13px]'>0 Staff</p>
                                <p className='text-[13px]'>₹ 0.00</p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='w-[35%]'>
                    <div className='bg-white set-shadow rounded-md  mt-[20px]'>
                        <h2 className='p-[20px] border-b font-normal '>Pending Actions</h2>
                        <Link to="#" className='flex gap-[5px] p-[20px] pt-[10px] pb-[10px] border-b text-[12px] flex items-center'>Verify Bank Account (1) <ArrowRightAltIcon /></Link>
                        <Link to="#" className='flex gap-[5px] p-[20px] pt-[10px] pb-[10px] border-b text-[12px]'>Finalize Payroll (0) </Link>
                        <Link to="#" className='flex gap-[5px] p-[20px] pt-[10px] pb-[10px] border-b text-[12px]'>Add Salary Details (0)</Link>
                        <Link to="#" className='flex gap-[5px] p-[20px] pt-[10px] pb-[10px] border-b text-[12px]'>Approve Leaves (0) </Link>


                    </div>

                    <div className='bg-white set-shadow rounded-md  mt-[20px]'>
                        <h2 className='flex justify-between p-[20px] border-b font-normal ' onClick={toggleCollapse3}  >Getting Started<KeyboardArrowDownIcon className='border rounded-full border-[#000] arrow-down' />
                        </h2>
                        <div
                            className={`transition-all pl-[20px] pr-[20px] duration-500 ease-in-out overflow-hidden ${isOpen3 ? "max-h-screen" : "max-h-0"
                                }`}
                        >

                            <div className=" p-[10px] flex justify-between">
                                <Link to="#" className='text-[13px] p-[10px] hover:bg-[#f4f5f9] w-full rounded-md transitionss'>
                                    <YouTubeIcon />    How to use SalaryBox Payroll?
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PayrollSummary