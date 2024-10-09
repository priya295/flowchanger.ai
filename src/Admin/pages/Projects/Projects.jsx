import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const Projects = () => {
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

  // Array of accordion items
  const accordionItems = [
    {
      title: (
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap">
                  Status(01)
                </th>

                <th className="text-[12px] border-r w-[100px]  font-medium p-[10px] ">
                  #
                </th>

                <th className="text-[12px] w-[250px] p-[10px] border-r font-medium whitespace-nowrap">
                  Project Name
                </th>

                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">
                  Start Date
                </th>

                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">
                  Deadline
                </th>

                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">
                  Members
                </th>
              </tr>
            </thead>
          </table>
        </div>
      ),
      content: (
        <table className="w-full ">
          <tbody>
            <tr>
              <td className="flex p-[0]">
                <td className="p-[10px] w-[100px]">
                  <Link className="text-[10px]  text-[#47cc00] " to="/">
                    Complete
                  </Link>
                </td>

                <td className="text-[12px] w-[90px] font-medium p-[10px] text-[#2563eb] hover:text-blue-950">
                  43
                </td>

                <td className="flex flex-col w-[226px] p-[10px] break-words">
                  <Link className="text-[11px] text-[#2563eb]" to="/">
                    soul relation intro
                  </Link>{" "}
                  <Link className="text-[9px] text-[#000]" to="/">
                    #12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING
                  </Link>
                </td>

                <td className="text-[12px] p-[10px] w-[182px] whitespace-nowrap	">
                  13-08-2024
                </td>

                <td className="text-[12px] p-[10px]  w-[180px]   whitespace-nowrap	">
                  13-08-2024
                </td>
                <td className="text-[12px] p-[10px] w-[180px] whitespace-nowrap	">
                  19-08-2024
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    },

    //   { title: "2", content: "This is the content for item 2" },
    //     { title: "3", content: "This is the content for item 3" },
  ];
  return (
    <div className=" w-full absolute pl-[145px] top-[95px] right-[5px] ">
      <div className="bg-[#fff] p-[10px] ml-[140px]">
        <div className="mb-[14px]">
          <Link
            to="/"
            className="text-[#fff] text-[14px] bg-[#511992] mb-[10px] "
          >
            <AddIcon className="newadd" /> New Project
          </Link>
        </div>

        <div className="p-[20px] summary-border w-full">
          <h2 className="font-medium mb-[10px] flex gap-[6px] items-center">
            {" "}
            <LibraryBooksIcon />
            Project Summary
          </h2>

          <div className="flex items-center gap-[14px] mb-[10px]">
            <Link
              to="/"
              className="text-[#fff] text-[12px] bg-[#8a25b0]  focus:outline-none focus:ring-4 font-medium rounded-2xl p-[8px] text-center"
            >
              <AddIcon className="newadd" /> Add New
            </Link>
            <input
              className="p-[6px] rounded-2xl summary-border text-[13px] w-[140px]"
              type="text"
              placeholder="Search......."
            />
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
                    <div
                      className=""
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
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
              <p className=" relative p-[7px] text-[12px] w-[88px] font-medium summary-border rounded-md  ">
                {" "}
                Export{" "}
                <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" />{" "}
              </p>
            </div>
            <div className="relative">
              <input
                className="p-[6px] rounded-2xl  summary-border text-[13px] "
                type="text"
                placeholder=" Search......."
              />
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
export default Projects;
