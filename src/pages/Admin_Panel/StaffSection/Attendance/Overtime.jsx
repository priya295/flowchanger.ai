import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Overtime = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    const [isOpen, setIsOpen] = useState(false);



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    //salary dropdown

    //salary2 dropdown
    const [isOpen2, setIsOpen2] = useState(false);



    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    //salary2 dropdown

    return (
        <div className='w-full p-[20px]'>
            <div className=''>
                <Link className='text-[14px]' to="/attendence_summary"> <ArrowBackIcon className='arrow-back-icon' /> Back</Link>
            </div>
            <div className='flex justify-between items-center mt-[20px] mb-[20px]'>
                <h2 className='font-medium daily-heading'>Daily OverTime</h2>
                <div className="flex items-center justify-center gap-[6px]">
                    {/* Toggle Switch */}
                    <p className='daily-staff'>Send SMS to Staff</p>
                    <div
                        className={`${isOn ? 'bg-green-500' : 'bg-gray-300'
                            } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 toggle-btn ease-in-out cursor-pointer`}
                        onClick={toggleSwitch}
                    >
                        <span
                            className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                                } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
                        />
                    </div>
                </div>

            </div>
            <div className='p-[8px] shadow-md rounded-md flex items-center justify-between mb-[20px] approval-date'>
                <input className='text-[14px]' type="date" />
                <p className='bg-[#edd0ca] p-[5px] text-[12px] border border-b border-[#e07964] text-[black] rounded-md'> <WarningIcon className='warning-icon text-[14px] text-[red] ' /> Approval pending for other  <Link className='text-[blue] ml-[10px]' to="/">View</Link> </p>
            </div>
            <div className='flex items-center gap-[10px] mb-[20px] '>
                <div className='flex items-center gap-[10px]  rounded-md p-[6px] font-medium select-pe'>
                    <input type="checkbox" />
                    <p className='text-[14px] whitespace-nowrap'>Select All</p>


                </div>

                <div className="relative inline-block text-left">
                    <select className='select-pe rounded-md pl-[2px] text-[14px] p-[8px]'>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                    </select>
                </div>

                <div>
                    <button className='p-2 pl-[20px] pr-[20px] border transition duration-200 bg-[#27004a] rounded-md text-[white] hover:bg-[#fff] hover:text-[#27004a] hover:border-[#27004a] hover:border' type='submit'>Apply</button>
                </div>



            </div>
            <div className='flex gap-[10px] items-center mb-[20px] shift-daily '>
                <input type="checkbox" />
                <p className='text-[14px]'>DAILY SHIFT I 10:00 AM - 6:30 PM</p>
            </div>

            <div className='shadow-md rounded-md p-[20px]  mb-[20px]  '>
                <div className='flex items-center gap-[16px] w-full flowchange'>
                    <input className='h-[12px]' type="checkbox" />
                    <div>
                        <h5 className='text-[14px]'>Rishi Flowchanger</h5>
                        <p className='text-[12px] text-[#ad9f9f]' >in 10:41 AM I Out 7:35 PM</p>
                    </div>
                    <div className='flex gap-[20px] ml-[50px] overtime-sixty'>
                        <div>
                            <h5 className='text-[12px] font-medium'>65 min Overtime</h5>
                            <p className='text-[12px] text-[#ad9f9f]' >65 min</p>
                        </div>
                        <div>
                            <h5 className='text-[12px] font-medium'>23 Sep, 2024</h5>
                            <p className='text-[12px] text-[#ad9f9f]' >DAILY SHIFT</p>
                        </div>
                    </div>
                </div>

                <div className='pt-[30px] flex justify-between  mb-20px '>
                            <div className='flex gap-[50px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-medium'>Late Entry</p>

                                </div>
                                <div className='flex gap-[26px]'>
                                    <div>
                                        <p className='text-[12px]'>Hours</p>
                                        <p className='text-[14px] select-pe p-[5px] w-[124px] rounded-md'>00:37      hrs</p>
                                        <p className='text-[12px] mt-[8px]' >Amount $ 48.37</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Fine Amount</p>
                                        <div className="relative inline-block text-left">
                                            {/* Button to open/close the dropdown */}
                                            <select className='select-pe rounded-md pl-[2px] text-[12px] p-[8px]'>
                                                <option>Option1</option>
                                                <option>Option2</option>
                                                <option>Option3</option>
                                            </select>

                                            {/* Dropdown menu */}

                                        </div>



                                    </div>
                                    <div className=''>
                                        <p className='text-[12px] invisible'>Fine Amount</p>
                                        <p className='text-[14px] whitespace-nowrap select-pe p-[5px]  bg-[#eeeeee] rounded-md'>$ 78.44  Per Hour</p>
                                    </div>



                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button className='p-2 pl-[20px] pr-[20px] border transition duration-200 bg-[#27004a] rounded-md text-[white] hover:bg-[#fff] hover:text-[#27004a] hover:border-[#27004a] hover:border' type='submit'>Save</button>
                            </div>

                        </div>
            </div>
            <div>
            </div>
        </div>

    );


}

export default Overtime;