import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const NewTask = () => {
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
                        <tr>
                            <th className="w-[10px]" ></th>
                            <th className="border-r p-[8px] w-[40px]"><input type="checkbox" /></th>


                            <th className="text-[12px] border-r w-[40px]  font-medium p-[8px] ">#</th>

                            <th className="w-[80px]"></th>
                            <th className="text-[12px] w-[250px] border-r font-medium whitespace-nowrap">Name</th>

                            <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap">Status</th>




                            <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap	">Start Date</th>


                            <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap	">Due Date</th>


                            <th className="text-[12px] font-medium p-[8px] w-[120px] border-r whitespace-nowrap	">Assigned to</th>


                            <th className="text-[12px] w-[100px] font-medium p-[8px] border-r whitespace-nowrap	">Tags</th>


                            <th className="text-[12px] w=[90px] font-medium p-[8px] border-r whitespace-nowrap	">Priority</th>


                            <th className="text-[12px] p-[8px] font-medium   whitespace-nowrap	">Posting Date</th>

                        </tr>
                    </table>
                </div>,
            content: (
                <table className="w-full" >

                    <tr>
                        <td className="flex p-[0]">

                            <td className="w-[40px] p-[10px] "><input type="checkbox" /></td>

                            <td className="text-[12px] w-[40px] font-medium p-[8px] text-[#2563eb] hover:text-blue-950">43</td>
                            <td className="w-[80px]"></td>


                            <td className="flex flex-col w-[250px] break-words"><Link className="text-[11px] text-[#2563eb]" to="/">soul relation intro</Link> <Link className="text-[9px] text-[#000]" to="/">#12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING</Link></td>



                            <td className="p-[8px]"><Link className="text-[9px] p-[4px]   text-[#47cc00] rounded-md border border-3 border-[#47cc00]" to="/">Complete</Link></td>
                            <td className="w-[30px]"></td>
                            <td className="text-[12px] p-[8px] pl-[12px] w-[100px] whitespace-nowrap	">13-08-2024</td>

                            <td className="text-[12px] p-[8px] pl-[12px] w-[100px]   whitespace-nowrap	">13-08-2024</td>

                            <td className="w-[120px]"></td>

                            <td className="p-[8px] w-[100px] pl-[12px]"><Link className="text-[12px] pl-[7px] pr-[7px] pb-[5px] pt-[5px] text-[#000] rounded-md border border-3 border-[#e2e8f0]" to="/">Reel</Link></td>

                            <td className="text-[#ff6f00] p-[8px] w-[100px] pl-[12px] text-[12px] whitespace-nowrap	">High</td>



                        </td>


                    </tr>
                    <tr>
                    <td className="flex p-[0]">

<td className="w-[40px] p-[10px]"><input type="checkbox" /></td>

<td className="text-[12px] w-[40px] font-medium p-[8px] text-[#2563eb] hover:text-blue-950">140</td>
<td className="w-[80px]"></td>


<td className="flex flex-col w-[250px] break-words"><Link className="text-[11px] text-[#2563eb]" to="/">URBAN KHALSA REEL</Link> <Link className="text-[9px] text-[#000]" to="/">#8 - URBAN KHALSA - URBAN KHALSA</Link></td>



<td className="p-[8px]"><Link className="text-[9px] p-[4px]   text-[#47cc00] rounded-md border border-3 border-[#47cc00]" to="/">Complete</Link></td>
<td className="w-[30px]"></td>
<td className="text-[12px] p-[8px] pl-[12px] w-[100px] whitespace-nowrap	">13-08-2024</td>

<td className="text-[12px] p-[8px] pl-[12px] w-[100px]   whitespace-nowrap	">13-08-2024</td>

<td className="w-[120px]"></td>

<td className="p-[8px] w-[100px] pl-[12px]"><Link className="text-[12px] pl-[7px] pr-[7px] pb-[5px] pt-[5px] text-[#000] rounded-md border border-3 border-[#e2e8f0]" to="/">Reel</Link></td>
<td className="text-[#03a9f4] p-[8px] w-[100px] pl-[12px] text-[12px] whitespace-nowrap	">Medium</td>



</td>
                    
                    </tr>

                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className=" w-full absolute pl-[145px] top-[95px] right-[5px] ">

            <div className="bg-[#e1ebff] p-[10px]">
                <button type="button" class="text-[#959595] text-[14px] bg-[#f4f5f7] mb-[10px]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  > < AddIcon className="addicon" /> Default</button>
                {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                        {/* Accordion Header */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            <span>{item.title}</span>
                            <span>{openIndex === index ? "-" : "+"}</span>
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

export default NewTask