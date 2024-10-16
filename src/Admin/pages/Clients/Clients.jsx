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



    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>

                                <th className="border-r"><input className="text-[12px] h-[12px] font-medium p-[10px] w-[30px]  whitespace-nowrap" type="checkbox" /></th>
                               
                                
                                


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
                        <tr>

                            <td ><input className="text-[12px] h-[12px] font-medium p-[10px] w-[30px]  whitespace-nowrap" type="checkbox" /></td>
                         


                            <td className="text-[11px]  w-[50px]  font-medium p-[10px] ">19</td>


                            <td className="text-[11px] w-[180px] p-[10px]  font-medium whitespace-nowrap">ABJEETGE</td>


                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	"></td>


                            <td className="text-[11px] font-medium p-[10px] w-[130px]  whitespace-nowrap	"></td>



                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	"></td>
                            <td className="text-[11px] font-medium p-[10px] w-[80px]  whitespace-nowrap	">
                            <div className="flex items-center justify-center gap-[6px]">
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
                </div>
                            </td>

                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	"></td>
                            <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap	">02-08-2024 5:31 PM</td>










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

            <div className="bg-[#fff] p-[10px] ml-[40px]">
                <div className="mb-[14px] flex gap-[10px] items-center">

                    <Link to="/" className="text-[#fff] text-[14px] bg-[#8a25b0]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> New Client</Link>
                    <Link to="/" className="text-[#fff] text-[14px] bg-[#8a25b0]   focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> Import Clients</Link>
                    <Link to="/" className="text-[#000] text-[14px] bg-[#f4f2f2]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <PersonIcon className="newadd mr-[5px]" />Contacts</Link>
                </div>

                <div className="p-[20px] summary-border w-full">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Client Summary</h2>

                    <div className="flex items-center gap-[14px] mb-[10px]">
                        <Link to="/" className="text-[#fff]  text-[12px] bg-[#8a25b0]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <AddIcon className="newadd" /> Add New</Link>
                        <input className="p-[6px] rounded-2xl summary-border text-[13px] w-[140px]" type="text" placeholder="Search......." />

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[10px]">
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
                                    <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
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
                        <div className="relative">
                            <input className="p-[6px] rounded-2xl  summary-border text-[13px] " type="text" placeholder=" Search......." />
                            <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
                        </div>
                    </div>


                </div>
                {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                        {/* Accordion Header */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            <span>{item.title}</span>

                        </button>

                        {/* Accordion Content */}
                        {openIndex === index && (
                            <div className="mb-[10px] text-gray-700 bg-white">
                                {item.content}

                            </div>
                        )}
                    </div>
                ))}


            </div>
        </div>
    );
};
export default Clients