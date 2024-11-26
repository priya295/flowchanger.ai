import React, { useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useGlobalContext } from '../../../Context/GlobalContext';
import ClipLoader from "react-spinners/ClipLoader";
import { div } from 'framer-motion/client';

const SalaryOverview = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { baseUrl } = useGlobalContext();
    const [selectedStaff, setSelectedStaff] = React.useState(null);
    const formatMonthYear = (value) => {
        const [year, month] = value.split("-");
        const date = new Date(year, month - 1); // JS months are 0-indexed
        return date.toLocaleString("default", { month: "long", year: "numeric" });
    };
    // const [selectedMonth, setSelectedMonth] = React.useState();
    const getData = async (e) => {
        try {
            const response = await fetch(baseUrl + "staff/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                const result = await response.json();
                const filteredData = selectedStaff?.id
                    ? result.filter(item => item.id === selectedStaff.id) : result[0];
                setSelectedStaff(filteredData);
                // console.log("Filtered data by ID:", filteredData);

                // console.log("Data retrieved successfully:", result);
                // navigate("/admin/staff");
            } else {
                console.error("Failed to retrieve data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(selectedStaff);
    // console.log(selectedMonth);
    // async function fetchAttendanceSummary() {
    //     // e.preventDefault();

    //     try {
    //         const response = await fetch(baseUrl + `attendance/single/${selectedStaff?.staffDetails?.id}?type=month&date=11/2024`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         const result = await response.json();

    //         if (response.status === 200) {
    //             console.log(result);
    //             // openModal6();
    //             // openToast("Attendance Mode created and updated Successfully", "success");
    //         }
    //         else {
    //             // openToast("An error occurred while creating and updating attendance mode", "error");
    //             console.log(result);
    //         }
    //     } catch (error) {
    //         console.error("Error creating and updating attendance mode:", error);
    //         // openToast("An error occurred while creating and updating attendance mode", "error");
    //     }
    // }

    // useEffect(() => {
    //     setSelectedMonth(new Date().toISOString().slice(0, 7)); 
    //     fetchAttendanceSummary();
    // }, [])
    // console.log(selectedStaff);
    return (
        <>
            {/* <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '> */}
            <div className='flex justify-between items-center  w-[100%] p-[20px] mt-[30px]  pr-0 xl:pr-[0px] pl-[0] top-0 bg-white'>
                <h3 className='font-medium'>Salary Overview</h3>
                <button className='second-btn'>Update Details</button>
            </div>
            <div className='flex justify-center'>
            {selectedStaff === null &&  <ClipLoader color="#4A90E2" size={40} /> }
            </div>
            {
                
                selectedStaff?.staffDetails?.SalaryDetails?.map((salary) =>
                    <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                        <div className='flex gap-[10px]'>
                            <CalendarMonthIcon className='calender-icon' />
                            <div>
                                <h6 className="font-medium">{formatMonthYear(salary?.effective_date)}</h6>
                                <p className='text-[#9c8f8f]'>Duration: 01 {formatMonthYear(salary?.effective_date)?.split(" ")[0]} 2024 -  31 {formatMonthYear(salary?.effective_date)?.split(" ")[0]} 2024</p>
                            </div>
                        </div>
                        <div>
                            <h3 className=''>Due Amount</h3>
                            <h2 className='font-medium'>Rs. {salary?.ctc_amount}</h2>
                        </div>
                        <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                            <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </div>
                    </div>
                )
            }



            {/* <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                <div className='flex gap-[10px]'>
                    <CalendarMonthIcon className='calender-icon' />
                    <div>
                        <h6 className="font-medium">October 2024</h6>
                        <p className='text-[#9c8f8f]'>Duration: 01 December 2024 -  31 December 2024</p>
                    </div>
                </div>
                <div>
                    <h3 className=''>Due Amount</h3>
                    <h2 className='font-medium'>र 322.00</h2>
                </div>
                <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                    <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                        <KeyboardArrowRightIcon />
                    </Link>
                </div>
            </div>


            <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                <div className='flex gap-[10px]'>
                    <CalendarMonthIcon className='calender-icon' />
                    <div>
                        <h6 className="font-medium">October 2024</h6>
                        <p className='text-[#9c8f8f]'>Duration: 01 December 2024 -  31 December 2024</p>
                    </div>
                </div>
                <div>
                    <h3 className=''>Due Amount</h3>
                    <h2 className='font-medium'>र 322.00</h2>
                </div>
                <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                    <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                        <KeyboardArrowRightIcon />
                    </Link>
                </div>
            </div> */}


            <div className='text-center mt-[40px]'>
                <button className='second-btn'>Load More</button>
            </div>

            {/* </div> */}
        </>
    )
}

export default SalaryOverview