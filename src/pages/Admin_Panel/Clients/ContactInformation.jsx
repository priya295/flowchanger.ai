import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { useGlobalContext } from '../../../Context/GlobalContext';
import { Modal } from 'react-responsive-modal';
import Select from "react-select";



const ContactInformation = () => {
  
 const {openToast}  = useGlobalContext()

    const { openToast } = useGlobalContext();
    const toggleModal15 = () => {
        setIsOpen15(!isOpen15);
      };
      const [isOpen15, setIsOpen15] = useState(false);
    const [taskStatus, setTaskStatus] = useState({
        name: "",
        color: "#000000",
        order: "",
        isHiddenFor: [],
        canBeChangedTo: [],
      })

      const customStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: '#F4F5F9',
          borderColor: '#E2E8F0',
          minHeight: '38px',
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: '#E2E8F0',
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          fontSize: '14px',
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: '#4A5568',
          ':hover': {
            backgroundColor: '#CBD5E0',
            color: '#2D3748',
          },
        }),
      };
    
    const [allStaff, setAllStaff] = useState();

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleSelectChange = (event) => {
        setRowsToShow(Number(event.target.value));
      };
      const [rowsToShow, setRowsToShow] = useState(25);

      const [exportFormat, setExportFormat] = useState("");
      const [departments, setDepartments] = useState([])

      const handleExport = () => {
        if (exportFormat === "CSV") exportCSV();
        else if (exportFormat === "PDF") exportPDF();
        else if (exportFormat === "Print") printDepartments();
      };
    
      const exportCSV = () => {
        const csvData = departments
          .map((dep) => `${dep.department_name}, Total Users: 1`)
          .join("\n");
        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "departments.csv");
      };
    
      const exportPDF = () => {
        const doc = new jsPDF();
        doc.text("Department List", 20, 10);
        departments.forEach((dep, index) => {
          doc.text(
            `${index + 1}. ${dep.department_name} (Total Users: 1)`,
            10,
            20 + index * 10
          );
        });
        doc.save("departments.pdf");
      };
    
      const printDepartments = () => {
        const printContent = departments
          .map((dep) => `${dep.department_name} (Total Users: 1)`)
          .join("\n");
        const newWindow = window.open();
        newWindow.document.write(`<pre>${printContent}</pre>`);
        newWindow.document.close();
        newWindow.print();
      };

    const [clientData, setClientData] = useState([])
    const { baseUrl,openToast } = useGlobalContext()
    const fetchDetail = async () => {
        const result = await fetch(baseUrl + "client");
        if (result.status == 200) {
            const res = await result.json();
            console.log(res)
            setClientData(res)
        }
        else {
            openToast("An Error Occured")
        }
    }

    useEffect(() => {
        fetchDetail();
    }, [])
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }
    const [isOn2, setIsOn2] = useState(false);

    const toggleSwitch2 = () => {
        setIsOn2(!isOn2);
    }
    const [isOn3, setIsOn3] = useState(false);

    const toggleSwitch3 = () => {
        setIsOn3(!isOn3);
    }
    return (
        <div className='table-section mt-5 bg-white shadow-cs p-[20px] rounded-lg pr-0'>
            <div className='w-[100%] p-0 h-[auto]  rounded-md shadow  border border-1 mt-4 '>


                <div className="flex justify-between items-center  betwe-cent">
                    <div className="flex  justify-between p-3 flex-col gap-2  sm:flex-row sm:gap-0">
                        <div className="left-side ">
                            <select
                                onChange={handleSelectChange}
                                className=" border border-[#e5e7eb] p-[7px] text-[14px]  shadow-sm mr-2 rounded-md  focus:outline-none"
                            >
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="120">120</option>
                            </select>

                            <select
                                onChange={(e) => setExportFormat(e.target.value)}
                                className="border border-[#e5e7eb] p-[7px]  text-[14px] shadow-sm rounded-md  focus:outline-none"
                            >
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


                            <button className="border border-[#e5e7eb] text-[14px] ml-[10px] rounded-lg shadow-sm p-[7px] " onClick={onOpenModal} >Bulk Action  <CachedIcon className="newsidebar-icon" /> </button>
                            <Modal open={open} onClose={onCloseModal} center>
                                <div className="border-b border-[#dbdbdb] pb-[20px]">
                                    <h2>Bulk Actions</h2>
                                </div>
                                <div className="flex items-center gap-[8px] mt-[32px] mb-[32px]">
                                    <input type="checkbox" />
                                    <p className="text-[14px]">Mass Delete</p>
                                </div>
                                <div className="w-[100%]">





                                    <Select
                                        isMulti
                                        name="isHiddenFor"
                                        options={allStaff?.map(({ id, label }) => ({ label: label, value: id }))}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        value={taskStatus.isHiddenFor || []}
                                        onChange={(selectedOptions) =>
                                            setTaskStatus((prev) => ({
                                                ...prev,
                                                isHiddenFor: selectedOptions || [] // ensures an array even if no options are selected
                                            }))
                                        }
                                        styles={customStyles}
                                    />
                                </div>
                                <p className="text-[red] text-[14px] mt-[10px]">if you do not select any groups assigned to the selected customers will be removed.</p>

                                <div className='pr-[10px] pb-3 flex gap-[10px] justify-end mt-[24px]'>
                                    {/* Button to close the modal */}
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                        onClick={toggleModal15}
                                    >
                                        Close
                                    </button>
                                    <button className='second-btn'>Confirm </button>
                                </div>

                            </Modal>
                            {/* <button className="border border-[#e5e7eb] text-[14px] ml-[10px] rounded-lg shadow-sm p-[7px] " onClick={onOpenModal}>Bulk Action <CachedIcon className="newsidebar-icon" /> </button>
                                <Modal open={open} onClose={onCloseModal} center>
                                    <div className="border-b border-[#dbdbdb] pb-[20px]">
                                        <h2>Bulk Actions</h2>
                                    </div>
                                    <div className="flex items-center gap-[8px] mt-[32px] mb-[32px]">
                                        <input type="checkbox" />
                                        <p className="text-[14px]">Mass Delete</p>
                                    </div>
                                    <div className="w-[100%]">
                                    </div>
                                    <p className="text-[red] text-[14px]">if you do not select any groups assigned to the selected customers will be removed.</p>

                                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end mt-[24px]'>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                            onClick={toggleModal15}
                                        >
                                            Close
                                        </button>
                                        <button className='second-btn'>Confirm </button>
                                    </div>

                                </Modal> */}







                        </div>


                    </div>
                    <div className="relative client-add">
                        {/* <input
                            className="p-[6px] client-add rounded-2xl  summary-border text-[13px] "
                            type="text"
                            placeholder=" Search......."
                            value={companyName}
                            onChange={(e) => {
                                if (e.target.value === null) {
                                    setSearchClients(null);
                                }
                                else {
                                    setComapnyName(e.target.value);
                                }

                            }}

                        /> */}
                        <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
                    </div>
                </div>

                <div className='w-full rounded-xl'>
                    <div className='w-full overflow-x-auto  '>
                    <table className='table-section new-worth p-[10px]  w-full  !border-0 !border-spacing-0 '>
                        <thead className=' sticky bg-gray-200 set-shadow top-[-1px] !border-0'>
                            <th className='  p-2 text-xs font-medium text-center !border-0 !bg-white'>First Name</th>
                            <th className=' p-2 text-xs font-medium text-center !border-0 !bg-white'>Last Name </th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Email</th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Company</th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Phone</th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Positon</th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Last Login</th>
                            <th className='p-2 text-xs font-medium text-center !border-0 bg-white'>Active</th>

                        </thead>
                        <tbody>

                            {clientData?.map((client, index) => {
                                return <tr className='border'>

                                    <td>{client.name}</td>
                                    <td>pa</td>
                                    <td>{client.email}</td>
                                    <td>brandpa</td>
                                    <td>{client.mobile}</td>
                                    <td>Demo</td>
                                    <td>4 Weeks ago</td>
                                    <td>
                                        <div
                                            className={`${isOn3 ? 'bg-[#27004a]' : 'bg-[#e6e0e0]'
                                                } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
                                            onClick={toggleSwitch3}
                                        >
                                            <span
                                                className={`${isOn3 ? 'translate-x-6 mr-[21px] ' : 'translate-x-0 mr-[21px]'
                                                    } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className='flex justify-between p-3 pt-5 w-[100%] items-center  flex-col gap-2  sm:flex-row sm:gap-0'>
                <p className=' text-[#a5a1a1] text-[14px]'>Showing 1 to 7 of 7 entries </p>
                <div className='pagination flex gap-2 border pt-0 pl-4 pb-0 pr-4 rounded-md'>
                    <Link to="#" className='text-[12px]  pt-2 pb-[8px]'>Previous</Link>
                    <span className='text-[12px] bg-[#27004a] flex items-center  text-white pl-3 pr-3 '>1</span>
                    <Link to="#" className='text-[12px]  pt-2 pb-[8px] '>Next</Link>

                </div>
            </div>
        </div>
    )
}

export default ContactInformation