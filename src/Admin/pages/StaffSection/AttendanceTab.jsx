import React from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/filter.svg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddIcon from '@mui/icons-material/Add';

const AttendanceTab = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '55%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "40%",
            padding:"0",
            borderRadius:'10px'
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


    return (
        <div className='attendance-tab mt-[20px]'>

            <div className='flex flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]'>
                <button className='first-btn'>Work Timings</button>
                <button className='second-btn'>Attendance Modes</button>
                <button className='second-btn'>Automation Rules</button>

            </div>

            <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
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


            <div className='w-[100%] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
                <table className='table-section mt-4 w-full'>
                    <thead className='border border-1 '>
                        <th>#</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Schedule Type</th>


                    </thead>
                    <tbody>
                        <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>


                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <Tabs className="p-[s0px]">
                    <TabList className="flex justify-around mt-3 m-10 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px]">
                        <label>Select Type</label>
                        <Tab className="cursor-pointer">
                            <input type="radio"  id="fixed" name='fixed' className='rounded-full '/>
                            <label for="fixed"> Fixed</label><br />
                        </Tab>
                        <Tab>
                            <input type="radio"  id="flexible" name='fixed' className='rounded-full '/>
                            <label for="flexible"> Flexible</label><br />
                        </Tab>
                    </TabList>

                    <TabPanel>
                       <div className='first-panel'>
                            <table className='w-full'>
                                <thead className='border-b border-[#000] '>
                                    <th className='p-3 text-base font-medium'>Day </th>
                                    <th className='p-3 text-base font-medium w-[45px]'>Weekoff </th>
                                    <th className='p-3 text-base font-medium text-left'>Shifts</th>
                                    
                                </thead>
                                <tbody>
                                    <tr className=''>
                                    <td className='text-center'>Mon</td>
                                    <td className='p-3'>
                                    <input type="checkbox"/>
                                    </td>
                                    <td className='pr-5'>
                                    <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                        <option>Select Shift</option>
                                    </select>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </Modal>
            


            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3  '>Monday - Shifts</h2>
                <button onClick={closeModal1} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div>
                    <h4 className='p-4 border border-b'>No Options Available ....</h4>
                    <Link to="" className='text-[#511992] p-4 font-medium mt-3 block w-full	'><AddIcon/> Add Shift</Link><br/>
                    <div className='text-end pr-4 pb-3'>
                    <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>

        </div>


    )
}

export default AttendanceTab 