
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
// import DescriptionEditer from './DescriptionEditer';
import RemoveIcon from '@mui/icons-material/Remove';
import SellIcon from '@mui/icons-material/Sell';
import { useGlobalContext } from "../../../Context/GlobalContext";
import Select from 'react-select';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const Task = () => {
  const { baseUrl,openToast} = useGlobalContext();
  const [isTableOpen, setIsTableOpen] = useState(false);
  // handle open the accordian
  const handleTableOpen = () => {
    setIsTableOpen((prevState) => !prevState);
  };

  //modal
  const [isOpen15, setIsOpen15] = useState(false);

  const toggleModal15 = () => {
    setIsOpen15(!isOpen15);
  };
  const addNewDiv = () => {
    setDivs([...divs, {}]); // Add a new empty object to the state array
  };

  // Function to add a new div

  // State to store the list of file input divs
  const [divs, setDivs] = useState([{}]); // Start with one empty object


  // Function to remove a specific div
  const removeDiv = (indexToRemove) => {
    setDivs(divs.filter((_, index) => index !== indexToRemove)); // Filter out the div with the given index
  };

  function closeModal15() {
    setIsOpen15(false);
  }
  //modal7


  // Array of accordion item
  const [allTaskStatus, setAllTaskStatus] = useState();
  const fetchAllTaskStatus = async () => {
    const response = await fetch(baseUrl + 'task/status');
    const data = await response.json();
    setAllTaskStatus(data)

  }

  const [departments, setDepartments] = useState([])
  const fetchDepartments = async () => {
    const result = await fetch(baseUrl + "department")

    if (result.status == 200) {
      const res = await result.json();
      setDepartments(res.data)

    }
    else {
      alert("An Error Occured")
    }

  }

  const [taskPriority, setTaskPriority] = useState([]);
  const fetchTaskPriority = async () => {
    const result = await fetch(baseUrl + "task/priority")

    if (result.status == 200) {
      const res = await result.json();
      setTaskPriority(res)

    }
    else {
      alert("An Error Occured")
    }

  }

  const [selectedTag, setSelectedTag] = useState([])
  const [staffDetail, setStaffDetail] = useState();
  const handleChange = (selectedOptions) => {
    setSelectedTag(selectedOptions);
  };
  const options = staffDetail?.map((staff) => ({
    value: staff.id,
    label: staff.name,
  }));

  const fetchStaffDetail = async () => {
    const result = await fetch(baseUrl + "staff")
    console.log("reuslt---", result)
    if (result.status == 200) {
      const res = await result.json();
      setStaffDetail(res)
    }
    else {
      alert("An Error Occured")
    }

  }

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


  let subtitle;
  const [taskName, setTaskName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [taskDescription, setTaskDescription] = useState();
  const [tag, setTag] = useState();
  const [attachFile, setAttachFile] = useState();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(""); // New state for selected department
  const [selectedProjectId, setSelectedProjectId] = useState(""); // New state for selected project
  const [selectedTaskStatusId, setSelectedTaskStatusId] = useState(""); // State for selected task status ID
  const [selectedTaskPriorityId, setSelectedTaskPriorityId] = useState(""); // Stores the selected priority ID as a string
  const [selectedStaffIds, setSelectedStaffIds] = useState([]); // Array to hold selected staff IDs


  async function submitTask() {
    console.log(selectedTaskStatusId)
    const result = await fetch(baseUrl + "task/detail", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ taskName: taskName, startDate: startDate, endDate: endDate, dueDate: dueDate, taskDescription: taskDescription, attachFile: attachFile, taskStatusId: selectedTaskStatusId, selectDepartmentId: selectedDepartmentId, taskPriorityId: selectedTaskPriorityId, selectProjectId: selectedProjectId, taskAssign: selectedStaffIds, taskTag: tag })
    })
    if (result.status === 201) {
      const data = await result.json();
      openToast("Add Task Successfully", "success")
    }
    else {
      openToast("Internal Server Error", "error")
    }
  }


  const [fetchTaskData, setFetchTaskData] = useState([]);
  async function fetchTaskDetails() {
    const result = await fetch(baseUrl + "/task/detail")
    if (result.status === 200) {
      const data = await result.json();
      console.log(data)
      setFetchTaskData(data)
      setIsTableOpen(true);
    }
    else {
      openToast("Internal Server Error", "error")
    }
  }

  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';

  }

  function closeModal2() {
    setIsOpen2(false);
  }
  const [selectedTaskData, setSelectedTaskData] = useState();
  console.log("task all data", selectedTaskData)
  const [updateData, setUpdateData] = useState();
  console.log("Updated Data", updateData)

  useEffect(() => {
    if (selectedTaskData) {
      setUpdateData(selectedTaskData);  // Automatically copy the data to updateData
    }
  }, [selectedTaskData])

  

  const [updateTaskName, setUpdateTaskName] = useState();
  const [updateTaskStatus, setUpdateTaskStatus] = useState(selectedTaskData?.taskStatusId || "");
  const [updateStartDate, setUpdateStartDate] = useState();
  const [updateEndDate, setUpdateEndDate] = useState();
  const [updateDueDate, setUpdateDueDate] = useState();
  const [updateSelectProject, setUpdateSelectProject] = useState(selectedTaskData?.selectProjectId || "");
  const [updateDepartment, setUpdateDepartment] = useState();
  const [updateTaskPriority, setUpdateTaskPriority] = useState(selectedTaskData?.taskPriorityId || "");
  const [updateTaskAssigne, setUpdateTaskAssigne] = useState([]);
  const [updateTaskDescription, setUpdateTaskDescription] = useState();
  const [updateTaskTag, setUpdateTaskTag] = useState();
  const [updateTaskAttachFile, setUpdateTaskAttachFile] = useState();




  useEffect(() => {
    setUpdateTaskStatus(selectedTaskData?.taskStatusId || "");
    setUpdateSelectProject(selectedTaskData?.selectProjectId || "");
    setUpdateTaskPriority(selectedTaskData?.taskPriorityId || "");
  }, [selectedTaskData]);



  async function updateDataTaskDetails() {
    const taskId = selectedTaskData?.id; // Get the task ID dynamically from `selectedTaskData`
    const result = await fetch(baseUrl + `task/detail/${taskId}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/form-data"
      },
      body: JSON.stringify({ taskName: updateTaskName, startDate: updateStartDate, endDate: updateEndDate, dueDate: updateDueDate, selectProjectId: updateSelectProject, taskDescription: updateTaskDescription, taskTag: updateTaskTag, attachFile: updateTaskAttachFile, selectDepartmentId: updateDepartment, taskStatusId: updateTaskStatus, taskPriorityId: updateTaskPriority, taskAssign: updateTaskAssigne })
    })
    if (result.status = 200) {
      const data = await result.json();
      console.log(data)
      openToast("Add Task Successfully", "success")
    }
    else {
      openToast("Internal Server Error", "error")
    }
  }

  useEffect(() => {
    fetchStaffDetail();
    fetchAllTaskStatus();
    fetchDepartments();
    fetchTaskPriority();
    fetchProjectDetails();
    fetchTaskDetails();
  }, [])
  return (
    <div className="w-full px-4 py-6 overflow-x-auto">
      <div className=" h-[30px] mb-5">
        {/* Button to open the modal */}
        <button
          className="bg-[#27004a] p-[8px] text-white flex items-center text-[12px] focus-visible:outline-none  rounded-md "
          onClick={toggleModal15}
        >
          <AddIcon className="newadd" /> New Task
        </button>

        {/* Modal */}
        {isOpen15 && (
          <div className="fixed inset-0 flex items-center justify-center p-[14px] z-50 bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-cs w-[550px] relative h-[100%] overflow-scroll">
              <h2 className="text-lg font-semibold mb-[16px]">Add new Task</h2>
              <div className="w-[100%]">

                <div className="w-[100%]">

                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Name</label><br />
                  <input type='text' onChange={(e) => setTaskName(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                </div>
                <div className="flex gap-[8px]">

                  <div className="w-[100%]" >
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Status</label>    <br />
                    <select
                      onChange={(e) => setSelectedTaskStatusId(e.target.value)} // Store only the selected ID as a string
                      className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                    >
                      <option value="">Please Select Task Status</option>
                      {allTaskStatus?.map((status) => (

                        <option key={status.id} value={status.id}>
                          {status.taskStatusName}
                        </option>
                      ))}
                    </select>


                  </div>

                </div>
                <div className="flex gap-[8px]">
                  <div className="w-[50%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Start Date</label>    <br />
                    <input type='date' onChange={(e) => setStartDate(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                  </div>
                  <div className="w-[50%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>End Date</label>    <br />
                    <input type='date' onChange={(e) => setEndDate(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                  </div>
                </div>
                <div className="flex gap-[8px]">
                  <div className="w-[50%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Due Date</label>    <br />
                    <input type='date' onChange={(e) => setUpdateDueDate(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                  </div>
                  <div className="w-[50%]">

                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Project</label>    <br />
                    <select
                      onChange={(e) => setSelectedProjectId(e.target.value)}
                      className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                    >
                      <option value="">- Select Project -</option> {/* Placeholder option */}
                      {projectDetails.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.project_name}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>
                <div className="w-[100%] flex gap-[10px]">
                  <div className="w-[50%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Department</label>    <br />
                    <select onChange={(e) => setSelectedDepartmentId(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                      <option>Select Department</option>
                      {departments.map(department => (
                        <option key={department.id} value={department.id}>
                          {department.department_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-[50%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Priority</label>    <br />
                    <select
                      onChange={(e) => setSelectedTaskPriorityId(e.target.value)} // Set only the selected ID
                      className="border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] hover:bg-[#fff]"
                    >
                      <option value="">Select Task Priority</option> {/* Placeholder option */}
                      {taskPriority?.map((priority) => (
                        <option key={priority.id} value={priority.id}>
                          {priority.taskPriorityName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="">


                  <div className="w-[100%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Assignee</label>    <br />
                    <Select
                      isMulti
                      options={staffDetail?.map(staff => ({
                        value: staff.id,
                        label: staff.name,
                      }))}
                      onChange={(selectedOptions) => {
                        const selectedIds = selectedOptions?.map(option => option.value) || [];
                        console.log("Selected IDs:", selectedIds);
                        setUpdateTaskAssigne(selectedIds);
                      }}
                      placeholder="Select Members..."
                      className="w-full"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: '46px',
                          border: '1px solid #DBDCDE',
                        }),
                        multiValue: (provided) => ({
                          ...provided,
                          backgroundColor: '#e5e7eb',
                          borderRadius: '4px',
                        }),
                        multiValueLabel: (provided) => ({
                          ...provided,
                          fontSize: '0.875rem',
                        }),
                        multiValueRemove: (provided) => ({
                          ...provided,
                          color: '#4b5563',
                          cursor: 'pointer',
                        }),
                      }}
                    />

                  </div>
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Description</label><br />
                  <textarea type='text' onChange={(e) => setTaskDescription(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                  <div className="w-[100%]">
                    <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium mb-3'><SellIcon className='sell-icon' />Task Tag</label><br />
                    <input type='text' onChange={(e) => setTag(e.target.value)} className=' mb-[10px]  pr-2 focus:outline-none tag-input mt-2' placeholder='Tag' />    <br />
                  </div>


                </div>




                <div>
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Attach File</label><br />
                  <div className='relative'>
                    <input type='file' onChange={(e) => setAttachFile(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
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
                {/* <DescriptionEditer /> */}

                <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                  {/* Button to close the modal */}
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={toggleModal15}
                  >
                    Close
                  </button>
                  <button className='second-btn' onClick={submitTask}>Save </button>
                </div>
              </div>


            </div>
          </div>
        )}
      </div>

   
       <div className="bg-white shadow-cs rounded-lg keyframe1">
       <div className="overflow-x-auto">
         <table className="w-full min-w-max">
           {/* Table Header - Acts as Toggle Button */ }          
           <thead className="tablehead cursor-pointer " onClick={handleTableOpen}>
             <tr className="rounded-lg bg-gray-300">
               <th className="text-[12px] font-medium p-2 min-w-[100px]  whitespace-nowrap">
                 <button className="p-[6px] rounded-lg bg-[orange] mr-2 text-white">                   To Do
                 </button>
                 <span className="six-north">6</span>
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[60px]  text-left">#</th>
               <th className="text-[12px] font-medium p-2 min-w-[150px]  text-left">
                 Task Name
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[120px]  text-left">
                 Start Date
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[120px]  text-left">
                 Due Date
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[120px]  text-left">
                 End Date
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[100px]  text-left">
                 Assigned to
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[80px]  text-left">
                 Tags
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[100px] text-left">
                 Priority
               </th>
               <th className="text-[12px] font-medium p-2 min-w-[100px] text-center">
                 Actions
               </th>
             </tr>
           </thead>

          {/* Table Body - Collapsible Content */}
          {isTableOpen && (
            <tbody>
              {fetchTaskData?.map((s, index) => (
                <tr key={index} className="rounded-lg border-b border-[#e5e7eb]">
                  <td className="text-[12px] font-medium p-2 min-w-[100px] text-left whitespace-nowrap">
                    <Link className="textcomplete">N/A</Link>
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[60px] text-left">{index + 1}</td>
                  <td className="text-[12px] font-medium p-2 min-w-[150px] text-left whitespace-nowrap">
                    <Link to="/taskview" className="textcomplete">{s.taskName}</Link>
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[120px] text-left whitespace-nowrap">
                  {s.startDate}
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[120px] text-left whitespace-nowrap">
                  {s.endDate}
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[120px] text-left whitespace-nowrap">
                    13-08-2024
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[100px] text-left whitespace-nowrap">
                    <button className="bg-[#c4bfbf] text-white rounded-lg p-[6px]">N/A</button>
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[80px] text-left">N/A</td>
                  <td className="text-[12px] font-medium p-2 min-w-[100px] text-left whitespace-nowrap">
                    <Link className="highred">
                    N/A
                    </Link>
                  </td>
                  <td className="text-[12px] font-medium p-2 min-w-[100px] text-left whitespace-nowrap">
                  <div className="flexjustify-center">
                  <button onClick={() => {
                      setSelectedTaskData(s);
                      openModal2(); // Call the function here
                    }}><BorderColorIcon /></button>
                    <button className="text-red-600"><DeleteOutlineIcon /></button>
                        </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div> 

      {/* onclick Update task */}
      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        // style={customStyles}
        contentLabel="Example Modal"
        className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 shadow p-3 text-[13px] xl:text-[15px] '>Update Task</h2>
        <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
        <div className=''>
          <div className="bg-white p-6    relative h-[400px]  overflow-y-scroll">
            <div className="w-[100%]">

              <div className="w-[100%]">

                <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Name</label><br />
                <input type='text' onChange={(e) => setUpdateTaskName(e.target.value)} defaultValue={updateData?.taskName} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
              </div>
              <div className="flex gap-[8px]">

                <div className="w-[100%]" >
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Status</label>    <br />
                  <select
                    onChange={(e) => setUpdateTaskStatus(e.target.value)} // Set the selected task status ID
                    value={updateTaskStatus}  // Set current state as the value to stay in sync
                    className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                  >
                    <option value="">Please Select Task Status</option>
                    {allTaskStatus?.map((status) => (
                      <option key={status.id} value={status.id}>
                        {status.taskStatusName}
                      </option>
                    ))}
                  </select>



                </div>

              </div>
              <div className="flex gap-[8px]">
                <div className="w-[50%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Start Date</label>    <br />
                  <input type='date' onChange={(e) => setUpdateStartDate(e.target.value)} defaultValue={updateData?.startDate} className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                </div>
                <div className="w-[50%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>End Date</label>    <br />
                  <input type='date' onChange={(e) => setUpdateEndDate(e.target.value)} defaultValue={updateData?.endDate} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                </div>
              </div>
              <div className="flex gap-[8px]">
                <div className="w-[50%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Due Date</label>    <br />
                  <input type='date' onChange={(e) => setUpdateDueDate(e.target.value)} defaultValue={updateData?.dueDate} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                </div>
                <div className="w-[50%]">

                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Project</label>    <br />
                  <select
                    onChange={(e) => setUpdateSelectProject(e.target.value)} // Update `updateSelectProject` when the selection changes
                    value={updateSelectProject}  // Use `updateSelectProject` as the value to stay in sync
                    className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                  >
                    <option value="">- Select Project -</option>
                    {projectDetails.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.project_name}
                      </option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="w-[100%] flex gap-[10px]">
                <div className="w-[50%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Department</label>    <br />
                  <select onChange={(e) => setUpdateDepartment(e.target.value)} defaultValue={updateData?.selectDepartmentId} className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                    <option>Select Department</option>
                    {departments.map(department => (
                      <option key={department.id} value={department.id}>
                        {department.department_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[50%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Priority</label>    <br />
                  <select
                    onChange={(e) => setUpdateTaskPriority(e.target.value)} // Update `updateTaskPriority` on selection change
                    value={updateTaskPriority}  // Use `updateTaskPriority` as the value to stay in sync
                    className="border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] hover:bg-[#fff]"
                  >
                    <option value="">Select Task Priority</option>
                    {taskPriority?.map((priority) => (
                      <option key={priority.id} value={priority.id}>
                        {priority.taskPriorityName}
                      </option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="">


                <div className="w-[100%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Assignee</label>    <br />
                  <Select
                    isMulti
                    options={staffDetail?.map(staff => ({
                      value: staff.id,
                      label: staff.name
                    }))}
                    defaultValue={staffDetail
                      ?.filter(staff => selectedTaskData?.taskAssign?.includes(staff.id))
                      .map(staff => ({
                        value: staff.id,
                        label: staff.name
                      }))
                    }
                    onChange={(selectedOptions) => {
                      const selectedIds = selectedOptions?.map(option => option.value) || [];
                      setUpdateTaskAssigne(selectedIds);  // Update `updateTaskAssigne` with selected IDs
                    }}
                    placeholder="Select Members..."
                    className="w-full"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        minHeight: '46px',
                        border: '1px solid #DBDCDE',
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: '#e5e7eb',
                        borderRadius: '4px',
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        fontSize: '0.875rem',
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: '#4b5563',
                        cursor: 'pointer',
                      }),
                    }}
                  />


                </div>
                <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Description</label><br />
                <textarea type='text' onChange={(e) => { setUpdateTaskDescription(e.target.value) }} defaultValue={updateData?.taskDescription} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                <div className="w-[100%]">
                  <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium mb-3'><SellIcon className='sell-icon' />Task Tag</label><br />
                  <input type='text' onChange={(e) => { setUpdateTaskTag(e.target.value) }} defaultValue={updateData?.taskTag} className=' mb-[10px]  pr-2 focus:outline-none tag-input mt-2' placeholder='Tag' />    <br />
                </div>
              </div>




              <div>
                <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Attach File</label><br />
                <div className='relative'>
                  <input type='file' onChange={(e) => setUpdateTaskAttachFile(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
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
            </div>


          </div>

          <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
            <button className='first-btn' onClick={closeModal2}>Cancel</button>
            <button className='second-btn' onClick={updateDataTaskDetails}>Confirm</button>
          </div>
        </div>
      </Modal>
      {/* onclick Update task */}


    </div>
  );
};

export default Task;

