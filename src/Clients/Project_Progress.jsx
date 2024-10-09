import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Project_Progress = () => {

  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle accordion toggling
  const handleToggle = (index) => {
      if (openIndex === index) {
          setOpenIndex(null); // Close the accordion if clicked again
      } else {
          setOpenIndex(index); // Open the accordion
      }
  };
  const accordionItems = [
    {
        title:
            <div>
                <table className="w-full">
                    <tr>
                        <th className="w-[10px]" ></th>
                        <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap">Status(01)</th>


                        <th className="text-[12px] border-r w-[40px]  font-medium p-[8px] ">#</th>


                        <th className="text-[12px] w-[250px] p-[10px] border-r font-medium whitespace-nowrap">Task Name</th>






                        <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">Start Date</th>


                        <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">Due Date</th>
                        <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap	">End Date</th>


                        <th className="text-[12px] font-medium p-[10px] w-[120px] border-r whitespace-nowrap	">Assigned to</th>


                        <th className="text-[12px] w-[100px] font-medium p-[10px] border-r whitespace-nowrap	">Tags</th>


                        <th className="text-[12px] w=[90px] font-medium p-[10px]  whitespace-nowrap	">Priority</th>




                    </tr>
                </table>
            </div>,
        content: (
            <table className="w-full" >

                <tr>
                    <td className="flex p-[0]">

                        <td className="p-[10px] w-[103px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

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

                <tr>
                    <td className="flex p-[0]">

                        <td className="p-[10px] w-[103px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

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
    <div className='w-[100%]'>
         <h2 className='text-[20px] p-[20px] font-medium'>Projects / Addoble</h2>
        <div className='p-[20px] flex w-[34%] justify-between items-center'>
           <p>img</p>
           <button className='finish-btn p-[8px] rounded-lg bg-[#dcfce7] font-medium text-[#58ae71] '>Finished</button>
        </div>

        <div className=" bg-white  w-[100%] shadow rounded-lg p-6 max-[900px]:w-[100%] ">
          {/*-- Progress Bar -*/}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700 max-[1400px]:text-[14px]">
                Project Progress 100%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

          {/*-- Overview Section -*/}
          <div className="text-gray-600 space-y-2 max-[1400px]:text-[14px]">
            <span className="block font-semibold text-gray-700 ">Overview</span>
           
                <div className='flex customer-adoble '>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700 ">
                  Project #
                </span>
                <span className="text-[#B1B1B1]">29</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Customer
                </span>
                <span className="text-[#B1B1B1]">Addodle</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Status
                </span>
                <span className="text-[#B1B1B1]">Finished</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Date Created
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              </div>
               <div className='flex customer-adoble'>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Start Date
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Deadline
                </span>
                <span className="text-[#B1B1B1]">31-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Completed Date
                </span>
                <span className="text-[#81EF93]">02-09-2024 6:03 PM</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Total Logged Hours
                </span>
                <span className="text-[#B1B1B1]">03:55</span>
              </div>
              </div>
         
          </div>

          {/*-- Tags Section -*/}
          <div className="mt-4">
            <span className="block font-semibold text-gray-700">Tags</span>
            <div className="flex space-x-2 mt-2">
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Ads
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Graphic
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Reel
              </span>
            </div>
          </div>

          {/*-- Description Section --*/}
          <div className="mt-4 text-gray-700">
            <span className="font-semibold block mb-1">Description</span>
            <p className="text-[#B1B1B1] text-sm">
              SMM plan (12 Graphic + 10 Reels & Facebook ad management).
            </p>
          </div>

        {/* Task Section */}

        <div className=" w-full absolute pl-[145px] top-[630px] right-[5px] ">

<div className=" pl-[100px]">
    <div className="mb-[20px]">

        <h2 className="font-medium" >All Task</h2>
    </div>
    {accordionItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
            {/* Accordion Header */}
            <button

                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
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



          
        </div>
    </div>
  )
}

export default Project_Progress