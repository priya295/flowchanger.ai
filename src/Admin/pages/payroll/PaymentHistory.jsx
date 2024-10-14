import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';


const PaymentHistory = () => {
    let subtitle;

  

    const [toggleDrop, setToggleDrop] = useState(false);
    function handledrop() {
        setToggleDrop(!toggleDrop)
    }

    const [toggleDrop2, setToggleDrop2] = useState(false);

    function handledrop2() {
        setToggleDrop2(!toggleDrop2)
    }

    const [toggleDrop3, setToggleDrop3] = useState(false);

    function handledrop3() {
        setToggleDrop3(!toggleDrop3)
    }

    
    const [toggleDrop4, setToggleDrop4] = useState(false);

    function handledrop4() {
        setToggleDrop4(!toggleDrop4)
    }

    const [toggleDrop5, setToggleDrop5] = useState(false);

    function handledrop5() {
        setToggleDrop5(!toggleDrop5)
    }

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

            <div className='xl:w-[240px]'>
                <label htmlFor="" className='text-[14px]'>Payment Mode</label>
                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                    <option>All </option>
                    <option>Google Pay</option>

                </select>
            </div>


        </div>
      

    </div>

    <div className='mt-5'>
        <div className='flex  items-center gap-[10px]'>
            <div className='relative w-[240px]'>
                <input type="text" placeholder='Search' className='border rounded-md pr-[40px]  p-[8px] w-[100%]  focus-visible:outline-none' />
                <SearchIcon className='absolute right-[10px] top-[10px] ' />
            </div>



            <div className='flex gap-[10px]'>
                <button className='first-btn'>Refresh</button>
                <button className='second-btn'>Download Report</button>
            </div>


        </div>
    </div>

    <div className='text-end'>
        <button className='p-[10px] second-btn mt-[10px]' >
            <UploadFileIcon/>
            Import Reimbursements
        </button>
        </div>
    <div className='w-[1110px] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
        <table className='table-section mt-4 w-full'>
            <thead className='border border-1 '>
                <th className=''>
                    <div className='flex'>
                        Name
                        <div className='relative '>
                            <button onClick={handledrop}>
                                <FilterListIcon className='filter-icon' />
                            </button>

                            {
                                toggleDrop &&

                                <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Sort A to Z</Link>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Sort Z to A</Link>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </th>
                <th className=''>
                    <div className='flex'>
                        Payment Date
                        <div className='relative '>
                            <button onClick={handledrop2}>
                                <FilterListIcon className='filter-icon' />
                            </button>

                            {
                                toggleDrop2 &&

                                <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Sort A to Z</Link>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Sort Z to A</Link>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </th>
                <th className=''>
                    <div className='flex'>
                        Payment Type
                        <div className='relative '>
                            <button onClick={handledrop3}>
                                <FilterListIcon className='filter-icon' />
                            </button>

                            {
                                toggleDrop3 &&

                                <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Sort A to Z</Link>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Sort Z to A</Link>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </th>

                <th className=''>
                    <div className='flex'>
                        Status
                        <div className='relative '>
                            <button onClick={handledrop4}>
                                <FilterListIcon className='filter-icon' />
                            </button>

                            {
                                toggleDrop4 &&

                                <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Sort A to Z</Link>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Sort Z to A</Link>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </th>
                 
                <th className=''>
                    <div className='flex'>
                        Amount Paid
                        <div className='relative '>
                            <button onClick={handledrop5}>
                                <FilterListIcon className='filter-icon' />
                            </button>

                            {
                                toggleDrop5 &&

                                <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Sort A to Z</Link>
                                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Sort Z to A</Link>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </th>
                <th className=''>
                    <div className='flex'>
                        Transaction ID

                    </div>
                </th>

                <th className=''>
                    <div className='flex'>
                        UTR Number

                    </div>
                </th>

                <th className=''>
                    <div className='flex'>
                        Paid By

                    </div>
                </th>

                <th className=''>
                    <div className='flex'>
                        Notes

                    </div>
                </th>
            </thead>

            <tbody className='w-full'>

                <tr className='h-[300px]'>
                    Hello
                </tr>


            </tbody>

            <div className='w-full'>
                <h2 className='whitespace-nowrap p-[10px] text-center'>Grand Total</h2>
            </div>

        </table>
    </div>



 

</div>
  )
}

export default PaymentHistory