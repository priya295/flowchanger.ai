import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
// import DescriptionEditer from './DescriptionEditer';
import RemoveIcon from '@mui/icons-material/Remove';
import SellIcon from '@mui/icons-material/Sell';

const Task = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle accordion toggling
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if clicked again
        } else {
            setOpenIndex(index); // Open the accordion
        }
    };
    //modal
    const [isOpen15, setIsOpen15] = useState(false);

    const toggleModal15 = () => {
        setIsOpen15(!isOpen15);
    };

    function closeModal15() {
        setIsOpen15(false);
    }
    //modal

    // Function to add a new div
    const addNewDiv = () => {
        setDivs([...divs, {}]); // Add a new empty object to the state array
    };

    // Function to add a new div

    // State to store the list of file input divs
    const [divs, setDivs] = useState([{}]); // Start with one empty object


    // Function to remove a specific div
    const removeDiv = (indexToRemove) => {
        setDivs(divs.filter((_, index) => index !== indexToRemove)); // Filter out the div with the given index
    };

    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full mt-[10px]">
                        <thead>
                            <tr>

                                <th className="text-[12px] flex items-center gap-[10px] font-medium p-[10px] w-[116px] border-r whitespace-nowrap"><span className="todo-btn">To Do</span><span className="six-tasks bg-[red]">6</span></th>


                                <th className="text-[12px] border-r w-[40px]  font-medium p-[8px] ">#</th>


                                <th className="text-[12px] w-[250px] p-[10px] border-r font-medium whitespace-nowrap">Task Name</th>








                                <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">Start Date</th>


                                <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">Due Date</th>
                                <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">End Date</th>


                                <th className="text-[12px] font-medium p-[10px] w-[120px] border-r whitespace-nowrap	">Assigned to</th>


                                <th className="text-[12px] w-[100px] font-medium p-[10px] border-r whitespace-nowrap	">Tags</th>


                                <th className="text-[12px] w=[90px] font-medium p-[10px]  whitespace-nowrap	">Priority</th>







                            </tr>

                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full" >
                    <tbody>

                        <tr>
                            <td className="flex p-[0]">

                                <td className="p-[10px] w-[108px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

                                <td className="text-[12px] w-[40px] font-medium p-[10px] text-[#2563eb] hover:text-blue-950">43</td>



                                <td className="flex flex-col w-[250px] p-[10px] break-words"><Link className="text-[11px] text-[#2563eb]" to="/">soul relation intro</Link> <Link className="text-[9px] text-[#000]" to="/">#12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING</Link></td>




                                <td className="text-[12px] p-[10px] w-[100px] whitespace-nowrap	">13-08-2024</td>

                                <td className="text-[12px] p-[10px]  w-[100px]   whitespace-nowrap	">13-08-2024</td>
                                <td className="text-[12px] p-[10px] w-[100px] whitespace-nowrap	">19-08-2024</td>

                                <td className="w-[120px]"></td>

                                <td className="p-[10px] w-[100px]"><Link className="text-[12px] pl-[7px] pr-[7px] pb-[5px] pt-[5px] text-[#000] rounded-md border border-3 border-[#e2e8f0]" to="/">Ads</Link></td>

                                <td className="text-[#ff6f00] p-[10px] w-[100px]  text-[12px] whitespace-nowrap	">High</td>



                            </td>


                        </tr>
                    </tbody>

                    <tr>
                        <td className="flex p-[0]">

                            <td className="p-[10px] w-[108px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

                            <td className="text-[12px] w-[40px] font-medium p-[10px] text-[#2563eb] hover:text-blue-950">143</td>



                            <td className="flex flex-col w-[250px] p-[10px] break-words"><Link className="text-[11px] text-[#2563eb]" to="/">URBAN KHALSA REEL</Link> <Link className="text-[9px] text-[#000]" to="/">#8 - URBAN KHALSA - URBAN KHALSA</Link></td>




                            <td className="text-[12px] p-[10px] w-[100px] whitespace-nowrap	">16-08-2024</td>

                            <td className="text-[12px] p-[10px]  w-[100px]   whitespace-nowrap	">18-08-2024</td>
                            <td className="text-[12px] p-[10px] w-[100px] whitespace-nowrap	">20-08-2024</td>

                            <td className="w-[120px]"></td>

                            <td className="p-[10px] w-[100px]"><Link className="text-[12px] pl-[7px] pr-[7px] pb-[5px] pt-[5px] text-[#000] rounded-md border border-3 border-[#e2e8f0]" to="/">Ads</Link></td>

                            <td className="text-[#2563eb] p-[10px] w-[100px]  text-[12px] whitespace-nowrap	">Medium</td>



                        </td>


                    </tr>



                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className=" w-full absolute pl-[140px] top-[95px] z-[-1] right-[5px] ">

            <div className=" p-[10px] pl-[100px]">
                <div className="mb-[14px]">

                    <div className=" h-[30px]">
                        {/* Button to open the modal */}
                        <button
                            className="bg-[#8a25b0] p-[8px] text-white focus-visible:outline-none  rounded-md"
                            onClick={toggleModal15}
                        >
                            <AddIcon className="newadd" /> New Task
                        </button>

                        {/* Modal */}
                        {isOpen15 && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                                <div className="bg-white p-6 rounded shadow-lg w-[550px] relative h-[100%] overflow-scroll">
                                    <h2 className="text-lg font-semibold mb-[16px]">Add new Task</h2>
                                    <div className="w-[100%]">

                                        <div className="w-[100%]">

                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Name</label><br />
                                            <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="flex gap-[8px]">

                                        <div className="w-[50%]" >
                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Status</label>    <br />
                                            <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Type</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        </div>
                                        </div>
                                        <div className="flex gap-[8px]">
                                         <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Start Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>End Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>
                                        <div className="flex gap-[8px]">
                                            <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Due Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Project</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        </div>
                                        </div>

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Department</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        <div className="flex gap-[8px]">
                                           <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Assignee</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Discription</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>

                                        <div className="flex gap-[8px]">
                                            <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium mb-3'><SellIcon className='sell-icon' />Task Tag</label><br />
                                        <input type='text' className=' mb-[10px]  pr-2 focus:outline-none tag-input mt-2' placeholder='Tag' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Priority</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Reminder</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                        <div>
                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Attach File</label><br />
                                            <div className='relative'>
                                                <input type='file' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                                <button onClick={addNewDiv} >
                                                    <AddIcon className='plus-icon' />
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            {/* Dynamically render each div */}
                                            {divs.map((_, index) => (
                                                <div key={index} className='mb-[10px]'>
                                                    <label className='text-[13px] xl:text-[14px] font-medium'>Attach File {index + 1}</label><br />
                                                    <div className='relative'>
                                                        <input
                                                            type='file'
                                                            className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                                                        />

                                                        {/* Remove Button for every div */}
                                                        <button onClick={() => removeDiv(index)} className='  rounded plus-icon'>
                                                            <RemoveIcon />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>
                                        {/* <div className='flex'>
                                    <input type='number' placeholder='22' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                    <select className='border border-1 rounded-md p-[5px] mt-1 w-[94%]   focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        <option>Months</option>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                    </select>
                                </div> */}


                                        {/* <DescriptionEditer /> */}

                                        <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                                            {/* Button to close the modal */}
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={toggleModal15}
                                            >
                                                Close Modal
                                            </button>
                                            <button className='second-btn'>Save </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {accordionItems.map((item, index) => (
                    <div key={index} className="">
                        {/* Accordion Header */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-center w-full text-left text-gray-800 shadow-lg  rounded-lg focus:outline-none"
                        >
                            <span>{item.title}</span>
                            <span>{openIndex === index ? "" : ""}</span>
                        </button>

                        {/* Accordion Content */}
                        {openIndex === index && (
                            <div className="p-[8px] mb-[10px] text-gray-700 bg-white">
                                {item.content}

                            </div>
                        )}
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Task