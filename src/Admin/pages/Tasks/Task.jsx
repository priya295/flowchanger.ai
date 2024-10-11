import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

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

    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
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
        <div className=" w-full absolute pl-[140px] top-[95px] right-[5px] ">

            <div className="bg-[#fff] p-[10px] pl-[100px]">
                <div className="mb-[14px]">

                    <Link to="/" className="text-[#fff] text-[14px] bg-[#8a25b0] mb-[10px]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon /> New Task</Link>
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