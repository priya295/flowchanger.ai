import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useGlobalContext } from "../../../Context/GlobalContext";
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

const Projects = () => {

    const handleSelectChange = (event) => {
        setRowsToShow(Number(event.target.value));
    };

    const handleExport = () => {
        if (exportFormat === 'CSV') exportCSV();
        else if (exportFormat === 'PDF') exportPDF();
        else if (exportFormat === 'Print') printDepartments();
    };

    const exportCSV = () => {
        const csvData = departments.map(dep => `${dep.department_name}, Total Users: 1`).join('\n');
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'departments.csv');
    };

    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text("Department List", 20, 10);
        departments.forEach((dep, index) => {
            doc.text(`${index + 1}. ${dep.department_name} (Total Users: 1)`, 10, 20 + index * 10);
        });
        doc.save('departments.pdf');
    };

    const [departments, setDepartments] = useState([])
    const [exportFormat, setExportFormat] = useState('');

    const [rowsToShow, setRowsToShow] = useState(25);

    const printDepartments = () => {
        const printContent = departments.map(dep => `${dep.department_name} (Total Users: 1)`).join('\n');
        const newWindow = window.open();
        newWindow.document.write(`<pre>${printContent}</pre>`);
        newWindow.document.close();
        newWindow.print();
    };

    const [openIndex, setOpenIndex] = useState(0);
    const { baseUrl } = useGlobalContext();
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
    const [projectDetails, setProjectDetails] = useState([]);
    async function fetchProjectDetails() {
        const result = await fetch(baseUrl + "project");
        console.log("---", result)
        if (result.status == 200) {
            const res = await result.json();
            console.log(res)
            setProjectDetails(res.data)
        }
        else {
            alert("An Error Occured")
        }
    }


    useEffect(() => {
        fetchProjectDetails();
    }, [])
    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
                        <thead className="tablehead">
                            <tr className="rounded-lg">
                                <th className="text-[12px] text-center border-r font-medium p-[10px] ">#</th>
                                <th className="text-[12px] text-center  p-[12px] border-r font-medium whitespace-nowrap">Project Name</th>
                                <th className="text-[12px] text-center  p-[12px] border-r font-medium whitespace-nowrap">Customer</th>
                                <th className="text-[12px] text-center  p-[12px] border-r font-medium whitespace-nowrap">Tags</th>
                                <th className="text-[12px] text-center font-medium p-[12px]  border-r whitespace-nowrap	">Start Date</th>
                                <th className="text-[12px] text-center font-medium p-[12px]  border-r whitespace-nowrap	">Deadline</th>
                                <th className="text-[12px] text-center font-medium p-[12px] border-r whitespace-nowrap	">Members</th>
                                <th className="text-[12px] text-center font-medium p-[12px] border-r whitespace-nowrap	">Status</th>
                            </tr>
                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full " >
                    <tbody>
                        {
                            projectDetails?.map((s, index) => {
                                return <tr className="">
                                    <td className="text-center p-2 text-[12px]">{index + 1}</td>
                                    <td className="text-center p-2 text-[12px]">{s.project_name}</td>
                                    <td className="text-center p-2 text-[12px]">Customer</td>
                                    <td className="text-center p-2 text-[12px]">{s.tags.map((s, index) => {
                                        return <span className="border rounded-md p-2 mr-2">{s}</span>
                                    })}</td>
                                    <td className="text-center p-2 text-[12px]">{s.start_date}</td>
                                    <td className="text-center p-2 text-[12px]">{s.deadline}</td>
                                    <td className="text-center p-2 text-[12px]">Members</td>
                                    <td className="text-center p-2 text-[12px]">{s.status}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className="">

            <div className="bg-[#fff] p-[10px] project-fear">
                <div className="mb-[14px]">

                    <Link to="/create-new-project " className="text-[#fff] text-[14px] bg-[#27004a] focus-visible:outline-none focus:shadow-none mb-[10px]  focus:outline-none  font-medium rounded-lg  p-[8px] text-center">
                        <AddIcon className="newadd" /> New Project</Link>
                </div>

                <div className="p-[20px] summary-border rounded-lg w-full  bg-white shadow-cs">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Projects</h2>


                    <div className='flex mb-4 justify-between p-3 flex-col gap-2  sm:flex-row sm:gap-0'>
                        <div className='left-side '>
                            <select
                                onChange={handleSelectChange}
                                className=' border border-[#e5e7eb] p-[7px] text-[14px]  shadow-sm mr-2 rounded-md  focus:outline-none'>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="120">120</option>

                            </select>

                            <select onChange={(e) => setExportFormat(e.target.value)}
                                className='border border-[#e5e7eb] p-[7px]  text-[14px] shadow-sm rounded-md  focus:outline-none'>
                                <option value="CSV">CSV</option>
                                <option value="PDF">PDF</option>
                                <option value="Print">Print</option>
                            </select>

                            <button
                                onClick={handleExport}
                                className='ml-2 bg-[#27004a] text-white p-[7px] text-[14px] rounded-md cursor-pointer'
                            >
                                Export File
                            </button>
                            <CachedIcon className='border  border-[#e5e7eb] cached-icon text-[14px] shadow-sm ml-2  rounded-md cursor-pointer refresh' />




                        </div>

                        <div className='right-side relative  w-[200px]'>
                            <input type='text' placeholder='Search' className='border border-1 pl-3 h-[43px] pr-7
    ] rounded-md focus:outline-none w-[100%] text-[15px] text-[#aeabab]' />
                            <SearchIcon className='absolute right-[10px] search-icon    text-[#aeabab]  font-thin text-[#dddddd;
    ]'/>
                        </div>
                    </div>


                    {accordionItems.map((item, index) => (
                        <div key={index} className="bg-white shadow-cs rounded-lg all-setup">
                            {/* Accordion Header */}
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            >
                                <span className="w-full">{item.title}</span>

                            </button>

                            {/* Accordion Content */}
                            {openIndex === index && (
                                <div className="mb-[10px] text-gray-700 bg-white">
                                    {item.content}

                                </div>
                            )}
                        </div>
                    ))}




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
    );

};
export default Projects



