import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';





const Project_Progress = () => {
  const [departments, setDepartments] = useState([])
  const [rowsToShow, setRowsToShow] = useState(25);

  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle accordion toggling
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if clicked again
    } else {
      setOpenIndex(index); // Open the accordion
    }
  };
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
};
const [isOpen, setIsOpen] = useState(false);



  return (
    <div className='w-[100%] pl-[13px]'>
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

        <div className=" w-full absolute pl-[280px] top-[630px] right-[5px] ">

        <div className="p-[20px]  shadow-cs rounded-lg summary-border mb-[20px] mt-[10px] w-full">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Task Summary</h2>

                    <div className="flex items-center gap-[14px] mb-[20px]">
                        <Link to="/" className="  focus:outline-none allcrm-btn text-center">
                            <AddIcon className="newadd" />New Task</Link>
                        <div className='right-side relative  w-[160px]'>
                            <input type='text' placeholder='Search' className='border border-1  pl-3 h-[36px]  pr-7
] rounded-3xl focus:outline-none w-[100%] text-[15px] text-[#000]' />
                            <SearchIcon className='absolute right-[10px] search-icon top-[12px]    text-[#000]  font-thin text-[#dddddd;
]'/>
                        </div>

                    </div>
               

                    <div>
                        <div className="bg-white rounded-lg w-full shadow-cs border border-[#dcdbdb] overflow-x-auto">



                            <table className="w-full table-auto border border-[#dcdbdb] rounded-lg overflow-hidden border-collapse">
                                <thead
                                    className="cursor-pointer  border border-gray-300 shadow-md"
                                    onClick={toggleAccordion}
                                >
                                    <tr>
                                        <th className="border-r p-2 flex justify-center text-xs font-medium whitespace-nowrap text-center">
                                            <IoMdArrowDropright className={`text-[20px] transition-transform duration-200 ${isOpen ? "rotate-90 text-[black]" : "rotate-0"}`}
                                            />

                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            #
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Name
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Company
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Primary Contact
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Primary Email
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Phone
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Active
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Groups
                                        </th>
                                        <th className="border-r p-2 text-xs font-medium whitespace-nowrap text-center">
                                            Date Created
                                        </th>
                                        <th className="p-2 text-xs font-medium text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {isOpen && (
                                    <tbody>
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">Customer</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">Members</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                            <td className="text-center p-2 text-[12px]  whitespace-nowrap">karan</td>
                                        </tr>

                                        <tr className="h-[100px]">
                                            <td colSpan="9" className="text-center py-4">
                                                {/* <ClipLoader color="#4A90E2" size={50} /> */}
                                            </td>
                                        </tr>
                                        <tr className="h-[100px]">
                                            <td colSpan="12" className="text-center text-red-500 text-sm font-semibold py-4">
                                                No projects found.
                                            </td>
                                        </tr>
                                        {/* {
                                            isLoading && projectDetails?.length === 0 ? (

                                            ) : projectDetails?.length > 0 ? (
                                                projectDetails.map((project, index) => (
                                                    
                                                ))
                                            ) : (
)
                                        } */}
                                    </tbody>
                                )}
                            </table>




                        </div>
                    </div>

                    <div className='flex justify-between p-3 pt-5 w-[100%] items-center  flex-col gap-2  sm:flex-row sm:gap-0'>
                        <p className=' text-[#a5a1a1] text-[14px]'>Showing 1 to {rowsToShow} of {departments.length} entries</p>
                        <div className='pagination flex gap-2 border pt-0 pl-4 pb-0 pr-4 rounded-md'>
                            <Link to="#" className='text-[12px]  pt-2 pb-[8px]'>Previous</Link>
                            <span className='text-[12px] bg-[#27004a] flex items-center  text-white pl-3 pr-3 '>1</span>
                            <Link to="#" className='text-[12px]  pt-2 pb-[8px] '>Next</Link>

                        </div>
                    </div>




                </div>
        </div>




      </div>
    </div>
  )
}

export default Project_Progress