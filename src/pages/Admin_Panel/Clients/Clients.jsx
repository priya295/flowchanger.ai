import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';

const Clients = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle accordion toggling
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if clicked again
        } else {
            setOpenIndex(index); // Open the accordion
        }
    };
    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    //salary dropdown

    //Toggle swich off on btn
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    //Toggle swich off on btn


    //Toggle swich off on btn
    const [isOn1, setIsOn1] = useState(false);

    const toggleSwitch1 = () => {
        setIsOn1(!isOn1);
    }

    //Toggle swich off on btn



    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div className="bg-[white] rounded-lg ">
                    <table className="w-full">
                        <thead className=" bg-white border border-[#e5e7eb] rounded-lg">
                            <tr>

                                <th className="border-r p-[10px] w-[30px] font-medium   whitespace-nowrap"><input className="text-[12px] h-[12px] " type="checkbox" /></th>





                                <th className="text-[11px] border-r w-[50px]  font-medium p-[10px] ">#</th>


                                <th className="text-[11px] w-[180px] p-[10px] border-r font-medium whitespace-nowrap">Company</th>


                                <th className="text-[11px] font-medium p-[10px] w-[130px] border-r whitespace-nowrap	">Primary Contact</th>


                                <th className="text-[11px] font-medium p-[10px] w-[130px] border-r whitespace-nowrap	">Primary Email</th>



                                <th className="text-[11px] font-medium p-[10px] w-[80px] border-r whitespace-nowrap	">Phone</th>
                                <th className="text-[11px] font-medium p-[10px] w-[80px] border-r whitespace-nowrap	">Active</th>

                                <th className="text-[11px] font-medium p-[10px] w-[150px] border-r whitespace-nowrap	">Groups</th>
                                <th className="text-[11px] font-medium p-[10px] w-[150px] border-r whitespace-nowrap	">Date Created</th>










                            </tr>
                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full " >
                    <tbody>
                        <tr className="border-b border-[#e5e7eb]">

                            <td className=" p-[10px] w-[30px] font-medium   whitespace-nowrap"><input className="text-[12px] h-[12px] " type="checkbox" /></td>





                            <td className="text-[11px]  w-[50px]  font-medium p-[10px] ">19</td>


                            <td className="text-[11px] w-[180px] p-[10px]  font-medium whitespace-nowrap">ABJEETGEE</td>

                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	">Primary Contact </td>


                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	">Primary Email</td>



                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	">Phone</td>
                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	"><div className="flex items-center justify-center gap-[6px]">
                                {/* Toggle Switch */}
                                <div
                                    className={`${isOn ? 'bg-[#8a25b0]' : 'bg-gray-300'
                                        } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
                                    onClick={toggleSwitch}
                                >
                                    <span
                                        className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                                            } inline-block w-6 h-6 bg-[#f3ecec] rounded-full transform transition-transform duration-300 ease-in-out`}
                                    />
                                </div>
                            </div></td>
                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	">Groups</td>
                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	">02-08-2024 <span>5:31 PM</span></td>










                        </tr>
                        <tr className="border-b border-[#e5e7eb]">

                            <td className=" p-[10px] w-[30px] font-medium   whitespace-nowrap"><input className="text-[12px] h-[12px] " type="checkbox" /></td>





                            <td className="text-[11px]  w-[50px]  font-medium p-[10px] ">19</td>


                            <td className="text-[11px] w-[180px] p-[10px]  font-medium whitespace-nowrap">ABJEETGEE</td>

                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	"></td>


                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	"></td>



                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	"></td>
                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	"><div className="flex items-center justify-center gap-[6px]">
                                {/* Toggle Switch */}
                                <div
                                    className={`${isOn1 ? 'bg-[#8a25b0]' : 'bg-gray-300'
                                        } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
                                    onClick={toggleSwitch1}
                                >
                                    <span
                                        className={`${isOn1 ? 'translate-x-6' : 'translate-x-0'
                                            } inline-block w-6 h-6 bg-[#f3ecec] rounded-full transform transition-transform duration-300 ease-in-out`}
                                    />
                                </div>
                            </div></td>
                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	"></td>
                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	">02-08-2024 <span>5:31 PM</span></td>










                        </tr>

                    </tbody>





                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className=" w-full  top-[95px] right-[5px] ">

            <div className="bg-[#fff] p-[10px] ml-[10px]">
                <div className="mb-[14px] flex gap-[10px] items-center import-customers">

                    <Link to="/" className="text-[#fff] client-add text-[14px] bg-[#8a25b0] newcustomers  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> New Customers</Link>
                    <Link to="/" className="text-[#fff] text-[14px] client-add bg-[#8a25b0]   focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> Import Clients</Link>
                    <Link to="/" className="text-[#000] text-[14px] client-add bg-[#f4f2f2]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <PersonIcon className="newadd mr-[5px]" />Contacts</Link>
                </div>

                <div className="p-[20px] summary-border w-full bg-white  rounded-lg">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Clients</h2>


                    <div className="flex justify-between items-center mb-[14px] betwe-cent">
                        <div className="flex gap-[10px] client-add">
                            <div className="relative inline-block text-left">
                                {/* Button to open/close the dropdown */}
                                <button
                                    className=" items-center p-[6px] text-left text-[12px] text-sm font-normal text-[black] select-pe  rounded-md  focus:outline-none"
                                    onClick={toggleDropdown1}
                                >
                                    25 <KeyboardArrowDownIcon className="newadd" />
                                </button>

                                {/* Dropdown menu */}
                                {isOpen1 && (
                                    <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-cs">
                                        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                30
                                            </a>
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                40
                                            </a>
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                50
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="  p-[7px] text-[12px] w-[55px] font-medium summary-border rounded-md  "> Export </p>

                            <p className=" relative p-[7px] text-[12px] w-[116px] font-medium summary-border rounded-md  "> Bulk Actions <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" /> </p>

                        </div>
                        <div className="relative client-add">
                            <input className="p-[6px] client-add rounded-2xl  summary-border text-[13px] " type="text" placeholder=" Search......." />
                            <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
                        </div>
                    </div>
                         
                    {accordionItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg  newsetup">
                        {/* Accordion Header */}
                        <button
                            onClick={() => handleToggle(index)}
                            className=" w-full text-left  focus:outline-none p-[7px]"
                        >
                            {item.title}

                        </button>

                        {/* Accordion Content */}
                        {openIndex === index && (
                            <div className="mb-[10px] text-gray-700">
                                {item.content}

                            </div>
                        )}
                    </div>
                ))}

                </div>


             


                </div>


             


         </div>
    );
};
export default Clients

