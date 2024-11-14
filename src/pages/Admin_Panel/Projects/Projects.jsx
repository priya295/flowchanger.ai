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
import ClipLoader from "react-spinners/ClipLoader";


const Projects = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [projectName , setProjectName] = useState("")
 

const toggleDropdown1 = () => setIsOpen1(!isOpen1);
const { baseUrl , openToast} = useGlobalContext();
const [isTableOpen, setIsTableOpen] = useState(false);
const [projectDetails, setProjectDetails] = useState([]);
const [departments, setDepartments] = useState([])
const [exportFormat, setExportFormat] = useState('');

const [rowsToShow, setRowsToShow] = useState(25);

const toggleTable = () => {
  setIsTableOpen(!isTableOpen);
};

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



const printDepartments = () => {
  const printContent = departments.map(dep => `${dep.department_name} (Total Users: 1)`).join('\n');
  const newWindow = window.open();
  newWindow.document.write(`<pre>${printContent}</pre>`);
  newWindow.document.close();
  newWindow.print();
};

async function fetchProjectDetails() {
  const result = await fetch(baseUrl + "project");
  if (result.status === 200) {
    const res = await result.json();
    setProjectDetails(res.data);
    if (res.data && res.data.length > 0) {
      setIsTableOpen(true);
    }
  } 
  else {
    openToast("An Error Occurred");
  }
}

useEffect(() => {
  fetchProjectDetails();
}, []);

// handle search projects
const handleSearchProject = async () => {
  const queryParams = new URLSearchParams({
  project_name : projectName
   
  }).toString();
  setIsLoading(true);
  try {
    const response = await fetch(`${baseUrl}project/search-projectByName?${queryParams}`);
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setProjectDetails(result);
    } else {
       console.log("error while fetching project")
    }
  } catch (error) {
    console.error('Error searching project:', error);
  }
  finally{
    setIsLoading(false);
  }
};

// Debounced search effect
useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    if (projectName.trim()) {
      handleSearchProject();
    } else {
      fetchProjectDetails(); // Fetch all projects if search input is cleared
    }
  }, 3000); 

  return () => clearTimeout(delayDebounceFn); // Cleanup function to clear the timeout
}, [projectName]);

return (
  <div className="p-4 bg-white shadow-lg rounded-md">
    <div className="mb-4">
    <Link
          to="/create-new-project"
          className="text-white text-sm bg-[#27004a] hover:bg-purple-700 rounded-lg px-4 py-2 flex items-center gap-2 w-[150px]"
        >
          <AddIcon /> New Project
        </Link>
    </div>

    <div className="p-4 border rounded-lg bg-white shadow-sm">
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

      <div className="w-full overflow-x-auto">
        <div className="min-w-full">
          <div className="mb-4 w-full">
            <div className="w-full">
              <table className="w-full border-collapse">
                <thead className="bg-gray-200 cursor-pointer" onClick={toggleTable}>
                  <tr>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[5%]whitespace-nowrap">#</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[20%]whitespace-nowrap">Project Name</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[15%]whitespace-nowrap">Customer</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[20%]">Tags</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[15%]whitespace-nowrap">Start Date</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[15%]whitespace-nowrap">Deadline</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[10%]whitespace-nowrap">Members</th>
                    <th className="text-[12px] text-center p-2 border-r font-medium w-[10%]whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                {isTableOpen && (
                  <tbody>
                    {
    isLoading && projectDetails?.length === 0 ? (
  
      <tr className="h-[100px]">
      <td colSpan="9" className="text-center py-4">
        <ClipLoader color="#4A90E2" size={50} />
      </td>
    </tr>
    ) : projectDetails?.length > 0 ? (
      projectDetails.map((project, index) => (
        <tr key={index} className="border-b hover:bg-gray-50">
          <td className="text-center p-2 text-[12px] w-[5%] whitespace-nowrap">{index + 1}</td>
          <td className="text-center p-2 text-[12px] w-[20%] whitespace-nowrap">{project.project_name}</td>
          <td className="text-center p-2 text-[12px] w-[15%] whitespace-nowrap">Customer</td>
          <td className="text-center p-2 text-[12px] w-[20%] whitespace-nowrap">
            {project.tags.map((tag, i) => (
              <span key={i} className="border rounded-md p-1 mr-2 text-[12px] inline-block">
                {tag}
              </span>
            ))}
          </td>
          <td className="text-center p-2 text-[12px] w-[15%] whitespace-nowrap">{project.start_date}</td>
          <td className="text-center p-2 text-[12px] w-[15%] whitespace-nowrap">{project.deadline}</td>
          <td className="text-center p-2 text-[12px] w-[10%] whitespace-nowrap">Members</td>
          <td className="text-center p-2 text-[12px] w-[10%] whitespace-nowrap">{project.status}</td>
        </tr>
      ))
    ) : (
      <tr className="h-[100px]">
        <td colSpan="8" className="text-center text-red-500 text-sm font-semibold py-4">
          No projects found.
        </td>
      </tr>)
      }
                  </tbody>
                )}
              </table>
            </div>
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
);
}
export default Projects;