import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalContext } from '../../../../Context/GlobalContext';


const Reviewfine = () => {
    const { baseUrl, openToast } = useGlobalContext();
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    //salary dropdown

    //salary2 dropdown
    const [isOpen2, setIsOpen2] = useState(false);



    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    //salary2 dropdown
    const [workTimeDate, setWorkTimeDate] = useState({
        year: "",
        month: "",
        date: "",
    });

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value); // Parse the selected date
        setWorkTimeDate({
            year: selectedDate.getFullYear(),
            month: selectedDate.getMonth() + 1, // Month is 0-based, so add 1
            date: selectedDate.getDate(),
        });
    };
    const [fineDetail, setFineDetail] = useState([
        {
            id: "a09dfd94-381d-4973-91a8-f5c6523fbb04",
            lateEntryFineAmount: 1,
            lateEntryAmount: 158.33,
            excessBreakFineAmount: 1,
            excessBreakAmount: 0,
            earlyOutFineAmount: 1,
            earlyOutAmount: 0,
            totalAmount: 0,
            shiftIds: null,
            punchRecordId: "54c00a7c-7589-419b-9d93-5752af83cb1e",
            staffId: "8d6da4a2-f88f-4140-b87b-9ee4ab0745de",
            createdAt: "2024-11-18T08:18:02.564Z",
            staff: {
                id: "8d6da4a2-f88f-4140-b87b-9ee4ab0745de",
                userId: "cf297307-c323-4c66-a745-c9fbe6d0db1e",
                job_title: "Software Engineer",
                branch: "New York",
                departmentId: "72f48d54-a2a0-47b3-81c9-268ccebbf95c",
                roleId: "77d7ef8b-7e5a-414c-9aea-0886dad00033",
                login_otp: "12346",
                gender: "Male",
                official_email: "karan@example.com",
                date_of_joining: "2023-01-15T00:00:00.000Z",
                date_of_birth: "1990-05-20T00:00:00.000Z",
                current_address: "123 5th Ave, New York, NY",
                permanent_address: "456 Elm St, Brooklyn, NY",
                emergency_contact_name: "Jane Doe",
                emergency_contact_mobile: "9876543211",
                emergency_contact_relation: "Wife",
                emergency_contact_address: "456 Elm St, Brooklyn, NY",
                guardian_name: null,
                status: null,
                employment: null,
                marital_status: null,
                blood_group: null
            },
            shiftDetails: null,
            punchRecord: {
                id: "54c00a7c-7589-419b-9d93-5752af83cb1e",
                punchDate: "2024-11-18T08:18:01.945Z",
                isApproved: false,
                punchInId: "ef6380c3-155e-44b3-be46-8cc1e85c0a25",
                punchOutId: null,
                staffId: "8d6da4a2-f88f-4140-b87b-9ee4ab0745de",
                status: "PRESENT",
                punchIn: {
                    id: "ef6380c3-155e-44b3-be46-8cc1e85c0a25",
                    punchInMethod: "PHOTOCLICK",
                    punchInTime: "2024-11-18T08:18:01.761Z",
                    punchInDate: "2024-11-18T08:18:01.761Z",
                    biometricData: null,
                    qrCodeValue: null,
                    photoUrl: "null",
                    location: "HELLO",
                    approve: "Pending"
                },
                punchOut: null
            }
        }
    ]
    )
    console.log(fineDetail)
    async function fetchFineDetails() {
        try {
            const result = await fetch(baseUrl + `fine?date=${workTimeDate.year}-${workTimeDate.month}-${workTimeDate.date}`)
            if (result.status == 200) {
                const res = await result.json();
                console.log("res", res)
                // setFineDetail(res)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!workTimeDate.year || !workTimeDate.month || !workTimeDate.date) {
            return;
        }
        fetchFineDetails()
    }, [workTimeDate])

    return (
        <div className='w-full p-[20px]'>
            <div className=''>
                <Link className='text-[14px]' to="/attendence_summary"> <ArrowBackIcon className='arrow-back-icon' /> Back</Link>
            </div>
            <div className='flex justify-between items-center mt-[20px] mb-[20px]'>
                <h2 className='font-medium'>Daily Work Time</h2>
                <div className="flex items-center justify-center gap-[6px]">
                    {/* Toggle Switch */}
                    <p>Send SMS to Staff</p>
                    <div
                        className={`${isOn ? 'bg-[#27004a]' : 'bg-gray-300'
                            } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
                        onClick={toggleSwitch}
                    >
                        <span
                            className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                                } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
                        />
                    </div>
                </div>

            </div>
            <div className='p-[8px] shadow-md rounded-md flex items-center justify-between mb-[20px]'>
                <input className='text-[14px]' type="date" onChange={handleDateChange} />
                <p className='bg-[#edd0ca] p-[5px] text-[12px] border border-b border-[#e07964] text-[black] rounded-md'> <WarningIcon className='warning-icon text-[14px] text-[red] ' /> Approval pending for other  <Link className='text-[blue] ml-[10px]' to="/">View</Link> </p>
            </div>
            <div className='flex items-center gap-[10px] mb-[20px] '>
                <div className='flex items-center gap-[10px]  rounded-md p-[6px] font-medium select-pe'>
                    <input type="checkbox" />
                    <p className='text-[14px] whitespace-nowrap'>Select All</p>


                </div>

                <div className="relative inline-block text-left">
                    <select className='select-pe rounded-md pl-[2px] text-[14px] p-[8px]'>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                    </select>
                </div>

                <div>
                    <button className='p-2 pl-[20px] pr-[20px] border transition duration-200 bg-[#27004a] rounded-md text-[white] hover:bg-[#fff] hover:text-[#27004a] hover:border-[#27004a] hover:border' type='submit'>Apply</button>
                </div>



            </div>
            <div className='flex gap-[10px] items-center mb-[20px]'>
                <input type="checkbox" />
                <p className='text-[14px]'>DAILY SHIFT I 10:00 AM - 6:30 PM</p>
            </div>

            {
                fineDetail?.map((item, index) => {
                    return <div className='shadow-md rounded-md p-[20px] mb-[20px]  '>
                        <div className='flex items-center gap-[16px] w-full'>
                            <input className='h-[12px]' type="checkbox" />
                            <div>
                                <h5 className='text-[14px]'>{item?.name || "N/A"}</h5>
                                <p className='text-[12px] text-[#ad9f9f]' >in {new Date(item?.punchRecord?.punchIn?.punchInDate).toLocaleTimeString()} I Out {new Date(item?.punchRecord?.punchIn?.punchOut).toLocaleTimeString()}</p>
                            </div>
                            <div className='flex gap-[20px] ml-[50px]'>
                                <div>
                                    <h5 className='text-[12px] font-medium'>37 min late</h5>
                                    <p className='text-[12px] text-[#ad9f9f]' >37 min</p>
                                </div>
                                <div>
                                    <h5 className='text-[12px] font-medium'>23 Sep, 2024</h5>
                                    <p className='text-[12px] text-[#ad9f9f]' >DAILY SHIFT</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[30px] flex justify-between  mb-20px '>
                            <div className='flex gap-[50px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <input type="checkbox" />
                                    <p className='text-[14px] font-medium'>Late Entry</p>
                                </div>
                                <div className='flex gap-[26px]'>
                                    <div>
                                        <p className='text-[12px]'>Hours</p>
                                        <p className='text-[14px] select-pe p-[5px] w-[124px] rounded-md'>00:37      hrs</p>
                                        <p className='text-[12px] mt-[8px]' >Amount $ 48.37</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Fine Amount</p>
                                        <div className="relative inline-block text-left">
                                            {/* Button to open/close the dropdown */}
                                            <select className='select-pe rounded-md pl-[2px] text-[12px] p-[8px]'>
                                                <option>Option1</option>
                                                <option>Option2</option>
                                                <option>Option3</option>
                                            </select>

                                            {/* Dropdown menu */}

                                        </div>



                                    </div>
                                    <div className=''>
                                        <p className='text-[12px] invisible'>Fine Amount</p>
                                        <p className='text-[14px] whitespace-nowrap select-pe p-[5px]  bg-[#eeeeee] rounded-md'>$ 78.44  Per Hour</p>
                                    </div>



                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button className='p-2 pl-[20px] pr-[20px] border transition duration-200 bg-[#27004a] rounded-md text-[white] hover:bg-[#fff] hover:text-[#27004a] hover:border-[#27004a] hover:border' type='submit'>Save</button>
                            </div>

                        </div>
                    </div>

                })
            }





            <div>
            </div>
        </div>

    );


}

export default Reviewfine;