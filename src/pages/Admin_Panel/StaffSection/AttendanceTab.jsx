import React, { useEffect, useState } from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/bi_filter.svg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddIcon from '@mui/icons-material/Add';
import selfie from '../../../Assets/Images/selfie-img.svg'
import qr from '../../../Assets/Images/qr-code.svg'
import gps from '../../../Assets/Images/gps.svg'
import biometric from '../../../Assets/Images/biometric.svg'
import rightimg from '../../../Assets/Images/right.svg'
import { useGlobalContext } from '../../../Context/GlobalContext';
import Select from 'react-select';

const AttendanceTab = () => {
    const { baseUrl, openToast, fetchStaff, staffDetail } = useGlobalContext();
    console.log(staffDetail)

    useEffect(() => {
        fetchStaff();
    }, [])

    const customStyles = {
        content: {
            top: '50%',
            left: '55%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "40%",
            padding: "0",
            borderRadius: '10px',

        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
    }
    function afterOpenModal1() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal1() {
        setIsOpen1(false);
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


    // onclick start timing

    const [modalIsOpen3, setIsOpen3] = React.useState(false);
    function openModal3() {
        setIsOpen3(true);
    }
    function afterOpenModal3() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal3() {
        setIsOpen3(false);
    }
    // onclick start timing


    // onclick end timing

    const [modalIsOpen4, setIsOpen4] = React.useState(false);
    function openModal4() {
        setIsOpen4(true);
    }
    function afterOpenModal4() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal4() {
        setIsOpen4(false);
    }
    // onclick end timing

    //  onclick auto half day button

    const [modalIsOpen16, setIsOpen16] = React.useState(false);
    function openModal16() {
        setIsOpen16(true);
    }
    function afterOpenModal16() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal16() {
        setIsOpen16(false);
    }
    // onclick auto half day button



    // onclick mandatory half day button
    const [modalIsOpen17, setIsOpen17] = React.useState(false);
    function openModal17() {
        setIsOpen17(true);
    }
    function afterOpenModal17() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal17() {
        setIsOpen17(false);
    }
    // onclick mandatory half day button

    // onclick mandatory full day button
    const [modalIsOpen18, setIsOpen18] = React.useState(false);
    function openModal18() {
        setIsOpen18(true);
    }
    function afterOpenModal18() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal18() {
        setIsOpen18(false);
    }
    // onclick mandatory half day button

    // onclick update attendance 
    const [modalIsOpen5, setIsOpen5] = React.useState(false);
    function openModal5() {
        setIsOpen5(true);
    }
    function afterOpenModal5() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal5() {
        setIsOpen5(false);
    }

    // onclick update attendance



    // toggle switch
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
    // toggle switch
    const [isOnSelfie, setIsOnSelfie] = useState(false);
    const selfieAttendance = () => {
        setIsOnSelfie(!isOnSelfie);
    };
    const [qrCode, setQrCode] = useState(false);
    const qrAttendance = () => {
        setQrCode(!qrCode);
    };
    const [gpsCode, setGpsCode] = useState(false);
    const gpsAttendance = () => {
        setGpsCode(!gpsCode);
    };

    const [autoPresent, setAutoPresent] = useState(false);
    const autoPresentFn = () => {
        setAutoPresent(!autoPresent);
    };
    const [presentPunch, setPresentPunch] = useState(false);
    const PresentPunchFn = () => {
        setPresentPunch(!presentPunch);
    };



    // toggle switch


    {/* when onclick update attendance modes for all staff */ }
    const [modalIsOpen6, setIsOpen6] = React.useState(false);
    function openModal6() {
        setIsOpen6(true);
    }
    function afterOpenModal6() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal6() {
        setIsOpen6(false);
    }

    {/* when onclick update attendance modes for all staff */ }

    {/* when onclick update automation rule for all staff */ }
    const [modalIsOpen7, setIsOpen7] = React.useState(false);
    function openModal7() {
        setIsOpen7(true);
    }
    function afterOpenModal7() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal7() {
        setIsOpen7(false);
    }

    {/* when onclick update automation rule for all staff */ }




    {/* when onclick update attendance modes  rule for all staff  successfull message*/ }

    const [modalIsOpen8, setIsOpen8] = React.useState(false);
    function openModal8() {
        setIsOpen8(true);
    }
    function afterOpenModal8() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal8() {
        setIsOpen8(false);
    }

    {/* when onclick update attendance modes  rule for all staff  successfull message*/ }
    const [shiftName, setShiftName] = useState();
    const [shiftStartTime, setShiftStartTime] = useState();
    const [shiftEndTime, setShiftEndTime] = useState();
    const [punchInType, setPunchInType] = useState("ANYTIME");
    const [punchOutType, setPunchOutType] = useState("ANYTIME");
    const [allowPunchInHour, setAllowPunchInHour] = useState();
    const [allowPunchInMinutes, setAllowPunchInMinutes] = useState();
    const [allowPunchOutMinutes, setAllowPunchOutMinutes] = useState();
    const [allowPunchOutHour, setAllowPunchOutHour] = useState();




    const handleTimeChange = (value) => {

        const [hours, minutes] = value.split(":").map(Number);

        // Determine AM or PM
        const period = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        const adjustedHours = hours % 12 || 12; // `12` for midnight and noon
        const formattedTime = `${adjustedHours}:${minutes < 10 ? `0${minutes}` : minutes} ${period}`;

        return formattedTime
    };


    async function submitShift() {
        const result = await fetch(baseUrl + "shift", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ shiftName: shiftName, shiftStartTime: shiftStartTime, shiftEndTime: shiftEndTime, punchInType: punchInType, punchOutType: punchOutType, allowPunchInHours: allowPunchInHour, allowPunchInMinutes: allowPunchInMinutes, allowPunchOutHours: allowPunchOutHour, allowPunchOutMinutes: allowPunchOutMinutes })
        })
        if (result.status == 201) {
            const data = await result.json();
            openToast("Add Shift Successfully", "success")

        }
        else {
            openToast("An Error Occured", "error")
        }
    }


    const [shiftDetails, setShiftDetails] = useState();
    console.log("shiftDetails", shiftDetails);

    async function fetchShiftDetails() {
        const result = await fetch(baseUrl + "shift");
        if (result.status == 200) {
            const data = await result.json();
            setShiftDetails(data)
        }
        else {
            openToast("No Record Found")
        }

    }


    const [selectedShift, setSelectedShift] = useState([]);
    console.log("selectedShift", selectedShift)

    const isSelected = (shiftId) => selectedShift.some((s) => s.id === shiftId);

    // Handle checkbox change
    const handleCheckboxChange = (shift) => {
        setSelectedShift((prevSelected) => {
            if (isSelected(shift.id)) {
                // If already selected, remove from selectedShift
                return prevSelected.filter((s) => s.id !== shift.id);
            } else {
                // Otherwise, add to selectedShift
                return [...prevSelected, shift];
            }
        });
    };


    useEffect(() => {
        fetchShiftDetails();
    }, [])


    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = selectedShift.map((seo) => ({
        value: seo.shiftName,
        label: `${seo.shiftName} | ${seo.shiftStartTime} - ${seo.shiftEndTime}`
    }));
    const [selectedId, setSelectedId] = useState([]);
    console.log("selectedId", selectedId)


    const handleUpdate = () => {
        console.log(selectedId)
        // setSelectedId([]); // Call the first function
        openModal5(); // Call the second function
    };

    const [markAttendanceOffice, setMarkAttendanceOffice] = useState();
    async function updateDetails() {

        const data = {
            staff_ids: [
                ...selectedId
            ],
            attendence_mode: {
                "selfie_attendance": isOnSelfie,
                "qr_attendance": qrCode,
                "gps_attendance": gpsCode,
                "mark_attendance": markAttendanceOffice,
                "allow_punch_in_for_mobile": isOn
            }
        };

        const result = await fetch(baseUrl + "attendance/mode", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (result.status == 200) {
            openToast("Update Details Successfully", "success");
            openModal6()
        }
        else {
            openToast("Internal Server Error", "error")
        }
    }


    const handleUpdateAutoMation = () => {
        console.log(selectedId)
        // setSelectedId([]); // Call the first function
        openModal7(); // Call the second function
    };

    const [time, setTime] = useState({ hours: '', minutes: '' });
    const [confirmedTime, setConfirmedTime] = useState(null); // Holds confirmed time values

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTime(prevTime => ({
            ...prevTime,
            [name]: value,
        }));
    };


    const handleConfirm = () => {
        setConfirmedTime(time); // Set the confirmed values
        closeModal16(); // Open modal or any other action needed
    };

    const [duration, setDuration] = useState({ hrs: '', mins: '' }); // Renamed state
    const [savedDuration, setSavedDuration] = useState(null); // Renamed confirmed state

    const handleDurationChange = (e) => {
        const { name, value } = e.target;
        setDuration(prevDuration => ({
            ...prevDuration,
            [name]: value,
        }));
    };

    const handleSaveDuration = () => {
        setSavedDuration(duration); // Save current values
        closeModal17(); // Open modal or any other action needed
    };

    const [selectedTime, setSelectedTime] = useState({ hourValue: '', minuteValue: '' }); // New state names
    const [confirmedSelection, setConfirmedSelection] = useState(null); // New confirmed state name


    const handleTimeChangeSet = (e) => {
        const { name, value } = e.target;
        setSelectedTime(prevSelectedTime => ({
            ...prevSelectedTime,
            [name]: value,
        }));
    };

    const handleSaveSelection = () => {
        setConfirmedSelection(selectedTime); // Save current values to confirmed selection
        closeModal18(); // Open the modal for showing confirmed time
    };


    async function updateAutomationDetail() {

        const data = {
            staff_ids: [
                ...selectedId
            ],
            automation_rules : {
                "auto_absent": autoPresent,
                "present_on_punch": presentPunch,
                "auto_half_day": `${confirmedTime?.hours} hours, ${confirmedTime?.minutes} minutes`,
                "mandatory_half_day": `${savedDuration?.hours} hours, ${savedDuration?.minutes} minutes`,
                "mandatory_full_day": `${confirmedSelection?.hours} hours, ${confirmedSelection?.minutes} minutes`
            }
        };

        const result = await fetch(baseUrl + "attendance/automation", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (result.status == 200) {
            openToast("Update Details Successfully", "success");
            openModal6()
        }
        else {
            openToast("Internal Server Error", "error")
        }
    }

    return (
        <div className='attendance-tab mt-[20px]'>

            <div className='tabs-attendance'>

                <Tabs>
                    <TabList className="flex flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]">
                        <Tab><button >Work Timings</button></Tab>
                        <Tab> <button >Attendance Modes</button></Tab>
                        <Tab> <button >Automation Rules</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
                            <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
                                <div className='searching-input relative'>
                                    <img src={Search} className='absolute left-2 top-3' />
                                    <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

                                </div>

                                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                                    <option>All Departments</option>
                                </select>

                                <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
                                    <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
                                    <h2 className='text-[14px] font-normal	'>More Filters</h2>
                                </div>

                            </div>
                            <div className='flex gap-[15px] justify-between lg:justify-start'>
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={openModal} className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Work Timings

                                            </button>
                                        </div>






                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section w-full'>
                                    <thead className='border border-1 sticky bg-[#fff] set-shadow top-[-1px]'>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job Title</th>
                                        <th>Schedule Type</th>


                                    </thead>
                                    <tbody>
                                        <tr className='border'>
                                            <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                            <td>Demo</td>
                                            <td>Demo</td>
                                            <td>Demo</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
                            <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
                                <div className='searching-input relative'>
                                    <img src={Search} className='absolute left-2 top-3' />
                                    <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />
                                </div>

                                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                                    <option>All Departments</option>
                                </select>

                                <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
                                    <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
                                    <h2 className='text-[14px] font-normal	'>More Filters</h2>
                                </div>

                            </div>
                            <div className='flex gap-[15px] justify-between lg:justify-start'>
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={handleUpdate}
                                                className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Attendance Modes

                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section  w-full'>
                                    <thead className='border border-1 '>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job Title</th>
                                        <th>SmartPhone Attendance</th>
                                        <th>Selfie</th>
                                        <th>QR</th>
                                        <th>Mark Attendance From</th>
                                        {/* <th>Biometric</th> */}



                                    </thead>
                                    <tbody className=''>

                                        {
                                            staffDetail?.map((item, index) => {
                                                return <> <tr className='border'>
                                                    <td><input onChange={(e) => setSelectedId([...selectedId, item.staffDetails.id])}
                                                        type='checkbox' className='border border-1 rounded-md ' /></td>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.staffDetails?.job_title}</td>
                                                    <td>{item?.staffDetails?.AttendenceMode?.allow_punch_in_for_mobile ? "Active" : "InActive"}</td>
                                                    <td>{item?.staffDetails?.AttendenceMode?.selfie_attendance ? "Active" : "InActive"}</td>
                                                    <td>{item?.staffDetails?.AttendenceMode?.qr_attendance ? "Active" : "InActive"}</td>
                                                    <td>{item?.staffDetails?.AttendenceMode?.mark_attendance}</td>

                                                </tr>
                                                </>


                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>






                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
                            <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
                                <div className='searching-input relative'>
                                    <img src={Search} className='absolute left-2 top-3' />
                                    <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

                                </div>

                                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                                    <option>All Departments</option>
                                </select>

                                <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
                                    <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
                                    <h2 className='text-[14px] font-normal	'>More Filters</h2>
                                </div>

                            </div>
                            <div className='flex gap-[15px] justify-between lg:justify-start'>
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={handleUpdateAutoMation} className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Automation Rules

                                            </button>
                                        </div>






                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section  w-full'>
                                    <thead className='border border-1 '>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job Title</th>
                                        <th>Auto Present</th>
                                        <th>Present On Punch In</th>
                                        <th>Auto Half Day</th>
                                        <th>Mandatory Half Day Hours</th>
                                        <th>Mandatory Full Day Hours</th>



                                    </thead>
                                    <tbody className=''>



                                        {
                                            staffDetail?.map((item, index) => {
                                                return <> <tr className='border'>
                                                    <td><input onChange={(e) => setSelectedId([...selectedId, item.staffDetails.id])}
                                                        type='checkbox' className='border border-1 rounded-md ' /></td>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.staffDetails?.job_title}</td>
                                                    <td>{item?.staffDetails?.attendanceAutomationRule?.auto_absent ? "Active" : "InActive"}</td>
                                                    <td>{item?.staffDetails?.attendanceAutomationRule?.present_on_punch ? "Active" : "InActive"}</td>
                                                    <td>{item?.staffDetails?.attendanceAutomationRule?.auto_half_day}</td>
                                                    <td>{item?.staffDetails?.attendanceAutomationRule?.manadatory_half_day ? "" : "N/A"}</td>
                                                    <td>{item?.staffDetails?.attendanceAutomationRule?.manadatory_full_day ? "" : "N/A"}</td>


                                                </tr>
                                                </>


                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>






                        </div>
                    </TabPanel>
                </Tabs>




            </div>



            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <Tabs className="p-[s0px] fixed-tab-section">
                    <TabList className="flex justify-around items-center mt-3 m-2 xl:m-2 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px] rounded-md">
                        <label className='text-[14px]'>Select Type</label>
                        <Tab className="cursor-pointer flex items-center gap-[10px]">
                            <input type="radio" id="fixed" name='fixed' className='rounded-full ' />
                            <label for="fixed" className='text-[14px]'> Fixed</label><br />
                        </Tab>
                        <Tab className="cursor-pointer flex items-center gap-[10px]">
                            <input type="radio" id="flexible" name='fixed' className='rounded-full ' />
                            <label for="flexible" className='text-[14px]'> Flexible</label><br />
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className='first-panel'>
                            <table className='w-full'>
                                <thead className='border-b border-[#000] '>
                                    <th className='p-3 text-[13px] font-medium'>Day </th>
                                    <th className='p-3 text-[13px] font-medium w-[45px]'>Weekoff </th>
                                    <th className='p-3 text-[13px] font-medium text-left'>Shifts</th>

                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Mon</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td
                                            className='pr-5 flex items-center'>
                                            <Select
                                                options={options}
                                                isMulti
                                                placeholder="Select Shift"
                                                value={selectedOptions}
                                                onChange={(selected) => setSelectedOptions(selected)}
                                                onMenuOpen={() => selectedShift.length === 0 && openModal1()}
                                                className="w-[94%] bg-[#F4F5F9] border border-1 rounded-md p-[5px] mt-1 focus:outline-none text-[#000] xl:text-[14px] text-[12px] mr-[0px] ml-[7px]"
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        minHeight: '40px',
                                                    }),
                                                    multiValue: (base) => ({
                                                        ...base,
                                                        backgroundColor: '#e5e7eb',
                                                    }),
                                                    multiValueLabel: (base) => ({
                                                        ...base,
                                                        color: '#000',
                                                    }),
                                                    multiValueRemove: (base) => ({
                                                        ...base,
                                                        color: '#ff0000',
                                                        cursor: 'pointer',
                                                    }),
                                                }}
                                            />
                                            <button className='bg-[#27004a] rounded-full ml-4'>
                                                <AddIcon className="text-white" onClick={openModal1} />
                                            </button>
                                        </td>
                                    </tr>




                                </tbody>
                            </table>

                            <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal}>Cancel</button>
                                <button className="second-btn">Confirm</button>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='first-panel'>
                            <div className='flex justify-center gap-4 items-center'>
                                <h2>Select Month</h2>
                                <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />
                            </div>
                            <table className='w-full'>
                                <thead className='border-b border-[#000] '>
                                    <th className='p-3 text-[13px]  font-medium'>Day </th>
                                    <th className='p-3 text-[13px] font-medium w-[45px]'>Weekoff </th>
                                    <th className='p-3 text-[13px] font-medium text-left pl-[8px]'>Shifts</th>

                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Mon</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Tue</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Wed</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Thu</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Fri</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Sat</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Sun</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal}>Cancel</button>
                                <button className="second-btn">Update Work Timings for All Staff</button></div>
                        </div>
                    </TabPanel>

                </Tabs>
            </Modal>



            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Monday - Shifts</h2>
                <button onClick={closeModal1} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='h-[400px] overflow-scroll'>

                    {/* {
                        shiftDetails?.map((op,index)=>{
                            return  <div className='flex justify-between items-center border-b py-3 px-3'>
                            <h3 className='text-[13px]'>{op.shiftName} | {op.shiftStartTime} - {op.shiftEndTime} </h3>
                            <input type="checkbox" value={selectedShift.filter(s=>s.id == op.id)[0]??false} onChange={(e)=>setSelectedShift((prev)=>{
                                return [...prev , ...shiftDetails?.filter((opt)=>opt.id===op.id)]
                            })}/>
                        </div>
                        })
                    } */}
                    {shiftDetails?.map((op) => (
                        <div key={op.id} className="flex justify-between items-center border-b py-3 px-3">
                            <h3 className="text-[13px]">
                                {op.shiftName} | {op.shiftStartTime} - {op.shiftEndTime}
                            </h3>
                            <input
                                type="checkbox"
                                checked={isSelected(op.id)}
                                onChange={() => handleCheckboxChange(op)}
                            />
                        </div>
                    ))}
                    <Link to="" className='text-[#8A25B0] p-4 font-medium mt-3 w-full flex items-center text-[16px] xl:text-[15px]' onClick={openModal2} ><AddIcon /> Add Shift</Link><br />
                    <div className='text-end  flex pr-4 pb-3 gap-[10px] justify-end items-center' >
                        <button className='first-btn' onClick={closeModal1}>Cancel</button>
                        <button className='second-btn' onClick={closeModal1}>Confirm</button>
                    </div>
                </div>
            </Modal>




            <Modal
                isOpen={modalIsOpen2}
                onAfterOpen={afterOpenModal2}
                onRequestClose={closeModal2}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Add New Shifts</h2>
                <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift Name</label><br />
                        <input onChange={(e) => setShiftName(e.target.value)} type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' /><br />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift Start Time</label><br />
                        <input onChange={(e) => {
                            setShiftStartTime(handleTimeChange(e.target.value))
                        }} type="time" className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                        <br />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch In</label><br />
                        <div className='flex  justify-between'>
                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between w-full gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input value="ANYTIME" onChange={(e) => setPunchInType(e.target.value)} type="radio" id="anytime" name="select-timing" />
                                            <label for="anytime" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Anytime</label><br />
                                        </div>

                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" value="ADDLIMIT" onChange={(e) => setPunchInType(e.target.value)} id="limit" name="select-timing" />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel></TabPanel>

                                <TabPanel>
                                    <label className='text-[13px] xl:text-[14px] font-medium'>Allow Punch In</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' onChange={(e) => setAllowPunchInHour(Number(e.target.value))} className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' onChange={(e) => setAllowPunchInMinutes(Number(e.target.value))} className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer'>Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>

                            </Tabs>

                        </div>


                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift End Time</label><br />

                        <input type="time" onChange={(e) => setShiftEndTime(handleTimeChange(e.target.value))} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch Out</label><br />
                        <div className=''>


                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between w-full gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" value="ANYTIME" onChange={(e) => setPunchOutType(e.target.value)} id="anytime1" name="punching-timing" />
                                            <label className='text-[13px] xl:text-[14px] cursor-pointer font-medium' for="anytime1">Anytime</label><br />
                                        </div>


                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input value="ADDLIMIT" onChange={(e) => setPunchOutType(e.target.value)} type="radio" id="limit1" name="punching-timing" />
                                            <label className='text-[13px] xl:text-[14px]  cursor-pointer font-medium' for="limit1">Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel>

                                </TabPanel>
                                <TabPanel>
                                    <label className='text-[14px] font-medium'>Allow Punch Out</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' onChange={(e) => setAllowPunchOutHour(Number(e.target.value))} className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' onChange={(e) => setAllowPunchOutMinutes(Number(e.target.value))} className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer'>Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>
                            </Tabs>


                        </div>
                    </div>

                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal2}>Cancel</button>
                        <button className='second-btn' onClick={submitShift}>Confirm</button>
                    </div>
                </div>
            </Modal>




            {/* onclick star timing ---- time modal */}
            <Modal
                isOpen={modalIsOpen3}
                onAfterOpen={afterOpenModal3}
                onRequestClose={closeModal3}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border border-b border-t-0 border-r-0 border-l-0 mb-4  p-3 text-[13px] xl:text-[14px] '>Select Time</h2>
                <button onClick={closeModal3} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>

                    <table className='p-[10px] table-timing w-full' >
                        <tbody className='flex justify-center w-full gap-[12px]'>
                            <tr className='flex flex-col w-[100px] h-[205px]  overflow-scroll overflow-x-hidden '>
                                <td className=''>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px] h-[205px] overflow-scroll overflow-x-hidden	'>
                                <td>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px]'>
                                <td>AM</td>
                                <td>PM</td>
                            </tr>
                        </tbody>
                        <h3 className='text-center pt-[25px] pb-[25px] text-[13px] xl:text-[14px]'>Selected Time: 12:00 PM</h3>
                    </table>

                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal3}>Cancel</button>
                        <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>



            {/* onclick star timing ---- time modal */}


            {/* onclick end timing ----time modal */}


            <Modal
                isOpen={modalIsOpen4}
                onAfterOpen={afterOpenModal4}
                onRequestClose={closeModal4}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border border-b border-t-0 border-r-0 border-l-0 mb-4  p-3  '>Select Time</h2>
                <button onClick={closeModal4} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>

                    <table className='p-[10px] table-timing w-full' >
                        <tbody className='flex justify-center w-full gap-[12px]'>
                            <tr className='flex flex-col w-[100px] h-[205px]  overflow-scroll overflow-x-hidden '>
                                <td className=''>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px] h-[205px] overflow-scroll overflow-x-hidden	'>
                                <td>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px]'>
                                <td>AM</td>
                                <td>PM</td>
                            </tr>
                        </tbody>
                        <h3 className='text-center pt-[25px] pb-[25px]'>Selected Time: 12:00 PM</h3>
                    </table>

                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal4}>Cancel</button>
                        <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>


            {/* onclick end timing modal */}


            {/* onclick update attendance modal */}
            <Modal
                isOpen={modalIsOpen5}
                onAfterOpen={afterOpenModal5}
                onRequestClose={closeModal5}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal5} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 '>
                    <div className='flex justify-between items-center p-[10px] pl-[20px] text-[13px] xl:text-[14px] bg-[#F0F6FE]'>
                        <h4 className='m-0'>Allow punch in from Staff App</h4>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={selfie} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Selfie Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={selfieAttendance}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOnSelfie ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOnSelfie ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-t-0 border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={qr} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>QR Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={qrAttendance}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${qrCode ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${qrCode ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>GPS Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={gpsAttendance}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${gpsCode ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${gpsCode ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Mark Attendance From</label>

                        <div className='flex gap-[12px] pt-3'>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input onChange={(e) => { setMarkAttendanceOffice(e.target.value) }} type="radio" id="foroffice" name="office" value="Office" />
                                <label for="foroffice" className='text-[13px] xl:text-[14px]'>Office</label><br />
                            </div>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input onChange={(e) => { setMarkAttendanceOffice(e.target.value) }} type="radio" id="anywhere" name="office" value="Anywhere" />
                                <label for="anywhere" className='text-[13px] xl:text-[14px]'>Anywhere</label><br />
                            </div>
                        </div>
                    </div>


                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0 flex gap-[14px] items-center'>
                        <img src={biometric} />
                        <div>
                            <label className='text-[13px] xl:text-[14px] font-medium'>Biometric Devices</label><br />
                            <Link to="/biometric" className='text-[13px] xl:text-[14px] text-[#8A25B0] underline decoration-1'>Manage biometric devices</Link>
                        </div>

                    </div>

                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                        <button className="first-btn" onClick={closeModal5}>Cancel</button>
                        <button className="second-btn" onClick={updateDetails}>Update Attendance Modes for All Staff</button>
                    </div>

                </div>
            </Modal>

            {/* onclick update attendance modal */}

            {/* when onclick update attendance modes for all staff */}

            <Modal
                isOpen={modalIsOpen6}
                onAfterOpen={afterOpenModal6}
                onRequestClose={closeModal6}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal6} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='flex items-center justify-center flex-col gap-[10px] pt-[20px] pb-[20px]'>
                    <img src={rightimg} className='w-[65px]' />
                    <h3 className='text-center'>You have Successfully updated attendance modes</h3>
                    <button className='second-btn '>Okay</button>
                </div>
            </Modal>


            {/* when onclick update attendance modes for all staff */}



            {/* onclick update automation rules */}
            <Modal
                isOpen={modalIsOpen7}
                onAfterOpen={afterOpenModal7}
                onRequestClose={closeModal7}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Automation Rules for All Staff</h2>
                <button onClick={closeModal7} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>

                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={selfie} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Auto Present at day start</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={autoPresentFn}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${autoPresent ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${autoPresent ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-t-0 border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={qr} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Present on Punch In</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={PresentPunchFn}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${presentPunch ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${presentPunch ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Auto half day if late by</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal16}>
                                {confirmedTime ? `${confirmedTime?.hours} hours, ${confirmedTime?.minutes} minutes` : 'Not Set'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory half day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal17}>
                                {savedDuration ? `${savedDuration?.hrs} hours, ${savedDuration?.mins} minutes` : 'Not Set'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory full day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal18}>
                                {confirmedSelection ? `${confirmedSelection?.hourValue} hours, ${confirmedSelection?.minuteValue} minutes` : 'Not Set'}
                            </button>
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal7}>Cancel</button>
                        <button className="second-btn" onClick={updateAutomationDetail} >Update Automation Rules for All Staff</button>
                    </div>

                </div>
            </Modal>

            {/* onclick update automation rules */}



            {/* onclick autohalf day minutes  button */}

            <Modal
                isOpen={modalIsOpen16}
                onAfterOpen={afterOpenModal16}
                onRequestClose={closeModal16}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Auto half day if late by
                </h2>
                <button onClick={closeModal16} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleChange}
                                value={time.hours}
                                name="hours"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                                placeholder="Hours"
                            />
                            <label htmlFor="limit" className="text-[13px] xl:text-[14px] font-medium cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleChange}
                                value={time.minutes}
                                name="minutes"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                                placeholder="Minutes"
                            />
                            <label htmlFor="limit" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal16}>Turn Off</button>
                        <button className="second-btn" onClick={handleConfirm} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick autohalf day minutes  button */}


            {/* onclick mandatory half day minutes  button */}

            <Modal
                isOpen={modalIsOpen17}
                onAfterOpen={afterOpenModal17}
                onRequestClose={closeModal17}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Mandatory half day hours

                </h2>
                <button onClick={closeModal17} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleDurationChange}
                                value={duration.hrs}
                                name="hrs"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                                placeholder="Hours"
                            />
                            <label htmlFor="limit" className="text-[13px] xl:text-[14px] font-medium cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleDurationChange}
                                value={duration.mins}
                                name="mins"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                                placeholder="Minutes"
                            />
                            <label htmlFor="limit" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal17}>Turn Off</button>
                        <button className="second-btn" onClick={handleSaveDuration} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick mandatory half day minutes  button */}


            {/* onclick mandatory full day minutes  button */}

            <Modal
                isOpen={modalIsOpen18}
                onAfterOpen={afterOpenModal18}
                onRequestClose={closeModal18}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Mandatory Full day hours

                </h2>
                <button onClick={closeModal18} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleTimeChangeSet}
                                value={selectedTime.hourValue}
                                name="hourValue"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                            />
                            <label htmlFor="hourValue" className="text-[13px] xl:text-[14px] font-medium cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                onChange={handleTimeChangeSet}
                                value={selectedTime.minuteValue}
                                name="minuteValue"
                                className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                            />
                            <label htmlFor="minuteValue" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal18}>Turn Off</button>
                        <button className="second-btn" onClick={handleSaveSelection} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick mandatory full day minutes  button */}



            {/* when onclick update attendance mods for aall staff successfull msg */}
            <Modal
                isOpen={modalIsOpen8}
                onAfterOpen={afterOpenModal8}
                onRequestClose={closeModal8}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff]  shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal8} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='flex items-center justify-center flex-col gap-[10px] pt-[20px] pb-[20px]'>
                    <img src={rightimg} className='w-[65px]' />
                    <h3 className='text-center'>You have Successfully updated attendance modes</h3>
                    <button className='second-btn' onClick={closeModal8}>Okay</button>
                </div>
            </Modal>


            {/* when onclick update attendance mods for aall staff successfull msg */}

        </div>


    )
}

export default AttendanceTab 