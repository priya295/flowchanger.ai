import React, { useEffect, useState } from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/filter.svg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { saveAs } from 'file-saver';

const LeaveBalance = () => {
    const { baseUrl, fetchStaff, staffDetail } = useGlobalContext();

    useEffect(() => {
        fetchStaff()
    }, [])
    console.log("leave", staffDetail)

    let subtitle;

    // toggle switch
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
    // toggle switch


    const [toggleDrop, setToggleDrop] = useState(false);

    function handledrop() {
        setToggleDrop(!toggleDrop)
    }



    // when onclick update staff
    const [modalIsOpen10, setIsOpen10] = React.useState(false);
    function openModal10() {
        setIsOpen10(true);
    }
    function afterOpenModal10() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal10() {
        setIsOpen10(false);
    }
    // when onclick update staff

    // when onclick leave Policies
    const [modalIsOpen11, setIsOpen11] = React.useState(false);
    function openModal11() {
        setIsOpen11(true);
    }
    function afterOpenModal11() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal11() {
        setIsOpen11(false);
    }
    // when onclick leave Policies


    // when on click update leave policiy
    const [modalIsOpen12, setIsOpen12] = React.useState(false);
    function openModal12() {
        setIsOpen12(true);
    }
    function afterOpenModal12() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal12() {
        setIsOpen12(false);
    }
    // when on click update leave policy
    const exportToCSV = () => {
        // Check and get headers dynamically only if LeavePolicy exists and is an array
        const leavePolicyHeaders = Array.isArray(staffDetail[0]?.staffDetails?.LeavePolicy)
            ? staffDetail[0].staffDetails.LeavePolicy.map(policy => `${policy?.name} Leave Balance`)
            : [];

        const headers = [
            'Index',
            'Name',
            'Job Title',
            ...leavePolicyHeaders,
        ];

        const rows = staffDetail.map((item, index) => {
            return [
                index + 1,
                item?.name || 'N/A',
                item?.staffDetails?.job_title || 'N/A',
                ...(Array.isArray(item?.staffDetails?.LeavePolicy)
                    ? item.staffDetails.LeavePolicy.map(policy => policy.allowed_leaves)
                    : []),
            ];
        });

        console.log('Headers:', headers);
        console.log('Rows:', rows);

        const csvData = [headers, ...rows].map(row => row.join(',')).join('\n');
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'StaffDetails.csv');
    };




    return (
        <div className='staff-tab mt-[20px]'>

            <div className='tabs-attendance'>
                <Tabs>
                    <TabList className="flex flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]">
                        <Tab><button >Leave Balance</button></Tab>
                        <Tab> <button >Leave Policy</button></Tab>

                        <div className='w-full flex justify-end'>
                            <button className='border border-1 pl-3 pr-3 rounded-md pt-2 pb-2 text-sm second-btn' onClick={openModal10}>Import Leave Balances</button>
                        </div>
                    </TabList>


                    <TabPanel>

                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col   md:flex-col   lg:gap-[0px]'>
                            <div className='flex lg:gap-[10px] flex-col gap-[10px] lg:flex lg:flex-row'>
                                <div className='searching-input relative'>
                                    <img src={Search} className='absolute left-2 top-3' />
                                    <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

                                </div>

                                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                                    <option>All Departments</option>
                                </select>

                                <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' />

                                <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
                                    <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
                                    <h2 className='text-[14px] font-normal	'>More Filters</h2>
                                </div>

                            </div>
                            {/* <div className='flex gap-[15px] justify-between lg:justify-start'>
                               

                            </div> */}
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section w-full'>
                                    <thead className='border border-1 '>


                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job Title</th>

                                        {
                                            staffDetail?.map((items, index) => {
                                                { console.log(items?.staffDetails?.LeavePolicy) }
                                                return (<>
                                                    {items?.staffDetails?.LeavePolicy?.map((item) => (
                                                        <>

                                                            <th>{item?.name} Leave Balance</th>
                                                        </>)
                                                    )}</>)
                                            })
                                        }
                                    </thead>
                                    <tbody>

                                        {
                                            staffDetail?.map((items, index) => {
                                                return <tr className="border">
                                                    <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                                    <td>{items?.name}</td>
                                                    <td>{items?.staffDetails?.job_title}</td>
                                                    {
                                                        staffDetail?.map((items, index) => {
                                                            { console.log(items?.staffDetails?.LeavePolicy) }
                                                            return (<>
                                                                {items?.staffDetails?.LeavePolicy?.map((item) => (
                                                                    <>
                                                                        <td>{item?.allowed_leaves} </td>
                                                                    </>)
                                                                )}</>)
                                                        })
                                                    }
                                                </tr>
                                            })
                                        }




                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>

                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col md:flex-col gap-[15px] lg:gap-[0px]'>
                            <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
                                <div className='searching-input relative'>
                                    <img src={Search} className='absolute left-2 top-3' />
                                    <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

                                </div>

                                <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                                    <option>All Departments</option>
                                </select>

                                <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' />

                                <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
                                    <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
                                    <h2 className='text-[14px] font-normal	'>More Filters</h2>
                                </div>

                            </div>
                            <div className='flex gap-[15px] justify-between lg:justify-start'>
                                <button className='border border-1 pl-3 pr-3 rounded-md pt-2 pb-2 text-sm second-btn' onClick={openModal12}>Update Leave Policy</button>

                            </div>
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section  w-full'>
                                    <thead className='border border-1 '>
                                        <th>#</th>
                                        <th>Name</th>
                                        {
                                            staffDetail?.map((items, index) => {
                                                { console.log(items?.staffDetails?.LeavePolicy) }
                                                return (<>
                                                    {items?.staffDetails?.LeavePolicy?.map((item) => (
                                                        <>
                                                            <th>{item?.name} Leave Policy</th>
                                                        </>)
                                                    )}</>)
                                            })
                                        }


                                    </thead>
                                    <tbody>
                                        {
                                            staffDetail?.map((items, index) => {
                                                return <tr className="border">
                                                    <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                                    <td>{items?.name}</td>
                                                    {
                                                        staffDetail?.map((items, index) => {
                                                            { console.log(items?.staffDetails?.LeavePolicy) }
                                                            return (<>
                                                                {items?.staffDetails?.LeavePolicy?.map((item) => (
                                                                    <>
                                                                        <td>{item?.allowed_leaves} </td>
                                                                    </>)
                                                                )}</>)
                                                        })
                                                    }
                                                </tr>
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>



                </Tabs>
            </div>



            {/* when onclick update staff */}

            <Modal
                isOpen={modalIsOpen10}
                onAfterOpen={afterOpenModal10}
                onRequestClose={closeModal10}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px] text-center bg-[#F0F6FE] rounded-t-lg rounded-r-lg rounded-b-none'>Update Leave Balances for all Staff</h2>
                <button onClick={closeModal10} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>


                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[0px] items-center '>
                            <h4 className='m-0 font-medium text-[10px] xl:text-[14px]' >Step 1. Download SalaryBox Template</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button onClick={exportToCSV} className='whitespace-nowrap outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Download Template</button>
                        </div>
                    </div>




                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[0px] items-center '>
                            <h4 className='m-0 font-medium text-[10px] xl:text-[14px]' >Step 2. Upload Leave Balances</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Upload Staff List</button>
                            {/* <input type='file' placeholder='ddjfksj'/> */}
                        </div>
                    </div>



                </div>
            </Modal>
            {/* when onclick update staff
             */}



            {/* when onclick leave policies
             */}

            <Modal
                isOpen={modalIsOpen12}
                onAfterOpen={afterOpenModal12}
                onRequestClose={closeModal12}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px]   rounded-t-lg rounded-r-lg rounded-b-none'>Update Leave Policy for all staff</h2>
                <button onClick={closeModal12} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>

                    <Tabs className="p-[s0px] fixed-tab-section">
                        <TabList className="flex justify-around items-center mt-3 m-2 xl:m-2 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px] rounded-md">
                            <label className='text-[14px]'>Select Type</label>
                            <Tab className="cursor-pointer flex items-center gap-[10px]">
                                <input type="radio" id="fixed" name='fixed' className='rounded-full ' />
                                <label for="fixed" className='text-[14px]'> Monthly</label><br />
                            </Tab>
                            <Tab className="cursor-pointer flex items-center gap-[10px]">
                                <input type="radio" id="flexible" name='fixed' className='rounded-full ' />
                                <label for="flexible" className='text-[14px]'> Yearly</label><br />
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className='w-[100%] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
                                <table className='table-section mt-4'>
                                    <thead className='border border-1 '>
                                        <th>Leave Type</th>
                                        <th>Allowed Leaves (Per Month)</th>
                                        <th>Carry-forward Leaves (On Month End)</th>

                                    </thead>
                                    <tbody>
                                        <td>Casual Leave</td>
                                        <td><input type='text' /></td>
                                        <td><input type='text' /></td>

                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>


                        <TabPanel>

                        </TabPanel>

                    </Tabs>



                </div>
            </Modal>
            {/* when onclick leave policies
             */}
        </div>
    )
}

export default LeaveBalance