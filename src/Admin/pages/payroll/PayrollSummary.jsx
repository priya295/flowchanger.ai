import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';

const PayrollSummary = () => {

    const [toggleDrop, setToggleDrop] = useState(false);

    function handledrop() {
        setToggleDrop(!toggleDrop)
    }

    const [toggleDrop1, setToggleDrop1] = useState(false);

    function handledrop1() {
        setToggleDrop1(!toggleDrop1)
    }
    return (
        <div className='mt-[20px]'>
            <div className='flex justify-between items-center flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
                <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>

                    <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />

                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Branches</option>
                        <option>Demo Main Branchs</option>

                    </select>


                    <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                        <option>All Departments</option>
                        <option>Website</option>

                    </select>


                </div>
                <div className=''>
                    <Link to="#" className='text-[#1890ff] font-normal'>Reset</Link>
                </div>
            </div>

            <div className='bg-white set-shadow mt-[20px] rounded-md p-[20px]'>
                <Link to="#" className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                    <p className='text-[13px] w-[300px]'>Total Payroll <InfoIcon /> </p>
                    <p className='text-[13px]'>0 Staff</p>
                    <p className='text-[13px]'>₹ 0.00</p>
                </Link>

                <Link to="#" className='flex border-b pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
                    <p className='text-[13px] w-[300px]'>Paid <InfoIcon /> </p>
                    <p className='text-[13px]'>0 Staff</p>
                    <p className='text-[13px]'>₹ 0.00</p>
                </Link>

                <Link to="#" className='flex  pb-[10px] p-[10px] transition justify-between hover:bg-[#f4f5f9] hover:text-[#000]'>
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
                    <button className='bg-[#e5e7eb] text-[#000] p-[3px] text-[16px] font-normal rounded-md' onClick={handledrop}><MoreVertIcon/></button>

                    {
                    toggleDrop &&

                    <div className="absolute w-[98%] xl:w-[300px] xl:left-[-270px]  lg:w-[200px] lg:left-[-100px]  md:w-[200px] md:left-[-100px] left-[4px] right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white set-shadow ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                            <NavLink to="/calender" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]'/> Provident Fund Challan Report</NavLink>
                            <NavLink to="/day-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-0"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]'/> ESI Challan Report</NavLink>
                            <NavLink to="/week-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]'/> Tax Deducated at Source Report</NavLink>
                             
                        </div>

                    </div>
                }
                </div>
                </div>
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
                    <button className='bg-[#e5e7eb] text-[#000] p-[3px] text-[16px] font-normal rounded-md' onClick={handledrop1}><MoreVertIcon/></button>

                    {
                    toggleDrop1 &&

                    <div className="absolute w-[98%] xl:w-[300px] xl:left-[-270px]  lg:w-[200px] lg:left-[-100px]  md:w-[200px] md:left-[-100px] left-[4px] right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white set-shadow ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                            <NavLink to="/calender" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700 flex gap-[10px] items-center" role="menuitem" tabindex="-1" id="menu-item-1"><DownloadIcon className='text-[#5173ff] font-normal text-[18px]'/> Loan Report</NavLink>
                              
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
    )
}

export default PayrollSummary