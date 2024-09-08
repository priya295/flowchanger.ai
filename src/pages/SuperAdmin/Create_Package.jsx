import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { MdOutlineDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <div
    onClick={() => handleToggle(!isOn)}
    className={`cursor-pointer relative inline-flex items-center h-6 rounded-full w-11 ${
      isOn ? 'bg-blue-600' : 'bg-gray-400'
    }`}
  >
    <span
      className={`transform transition-transform inline-block w-6 h-6 rounded-full bg-white ${
        isOn ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </div>
);

const Create_package = () => {
  const modulesList = [
    'Projects', 'Finance', 'Leave Requests', 'Notifications', 'Time Tracker',
    'Knowledgebase', 'Tasks', 'Users', 'Notes', 'SMS Notifications', 'Leads',
    'Payslip', 'Calendar', 'Clients', 'Mail', 'Meetings', 'Todos', 'Gantt Chart',
    'Chat', 'Activity Logs', 'Announcements', 'Support System', 'Contracts', 'Statuses'
  ];
  const [packageName, setPackageName] = useState('');
  const [packageNo, setPackageNo] = useState('');
  const [noOfProjects, setNoOfProjects] = useState('');
  const [noOfEmployes, setNoOfEmployes] = useState('');
  const [noOfClients, setNoOfClients] = useState('');
  const [storageUnit, setStorageUnit] = useState('');
  const [storageUnitType, setStorageUnitType] = useState('');
  const [planType, setPlanType] = useState('Paid');
  const [tenure, setTenure] = useState('');
  const [months, setMonths] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedModules, setSelectedModules] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:5000/package/plans');
        const data = await response.json();
        if (response.ok) {
          setPlans(data.plans);
        } else {
          alert('Failed to fetch plans');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleSelectAllToggle = (checked) => {
    setSelectAll(checked);
    setSelectedModules(checked ? modulesList : []);
  };

  const handleModuleChange = (module) => {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter(m => m !== module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  const addPlan = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/package/create_plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenure,
          months,
          rate
        }),
      });
      const data = await response.json();
     
      if (response.ok) {
        alert('Plan created successfully');
        setSelectedPlan(data.newPlan._id); // Assuming the response contains the created plan
      } else {
        alert(data.message || 'Failed to create plan');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/package/create_package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageName,
          packageNo,
          noOfProjects,
          noOfEmployes,
          storageUnit,
          storageUnitType,
          planType,
          noOfClients,
          plan_id: selectedPlan,
          description,
          modules: selectedModules,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Package created successfully');
        // Optionally, reset the form fields here
      } else {
        alert(data.message || 'Failed to create package');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateMonthOptions = (maxMonths) => {
    return Array.from({ length: maxMonths }, (_, i) => i + 1).map(month => (
      <option key={month} value={month}>{month}</option>
    ));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1" style={{ flex: 1 }}>
        <Header />
        <div className="flex-1">
          <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
            <h2 className="text-2xl font-semibold mb-6">Create Package</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700">Package Name <span className='text-red-600'>*</span></label>
                  <input
                    type="text"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Package No. *</label>
                  <input
                    type="text"
                    value={packageNo}
                    onChange={(e) => setPackageNo(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">No. Of Projects *</label>
                  <input
                    type="number"
                    value={noOfProjects}
                    onChange={(e) => setNoOfProjects(e.target.value)}
                    placeholder="Leave it blank to allow unlimited projects"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700">No. of Employes *</label>
                  <input
                    type="number"
                    value={noOfEmployes}
                    onChange={(e) => setNoOfEmployes(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Storage Unit</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={storageUnit}
                      onChange={(e) => setStorageUnit(e.target.value)}
                      placeholder="Leave it blank to allow unlimited storage"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <select
                      value={storageUnitType}
                      onChange={(e) => setStorageUnitType(e.target.value)}
                      className="mt-1 block px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select unit</option>
                      <option value="MB">MB</option>
                      <option value="GB">GB</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Plan Type *</label>
                  <select
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Free">Free</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700">No. of Clients *</label>
                  <input
                    type="number"
                    value={noOfClients}
                    onChange={(e) => setNoOfClients(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-gray-700">Tenure *</label>
                  <input
                     type="text"
                     value={tenure}
                     onChange={(e) => setTenure(e.target.value)}
                     placeholder='EX. Weekly,Quaterly,Monthly,Yearly'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Months *</label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select months</option>
                    {generateMonthOptions(12)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Rate *</label>
                  <input
                    type="text"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Action </label>
                  <FaPlus onClick={addPlan} className='text-white bg-green-500 p-2 text-center items-center text-[30px] rounded ms-2 mt-2'/>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 text-center">
              
                  <div className="mt-1 w-full"> 
                 {/* show month here  */}
                  </div>
               
                  <div className="mt-1 w-full "> 
     {/* show how many months  */}
</div>
<div className="mt-1 w-full"> 
{/* show rate here */}
</div>
                <div>
               
                  <FaPlus onClick={addPlan} className='text-white bg-green-500 p-2 text-center items-center text-[30px] rounded ms-2 mt-2'/>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>

              <div>
              <label className="block text-gray-700">Modules</label>
              <div className="flex items-center space-x-4">
<ToggleSwitch isOn={selectAll} handleToggle={handleSelectAllToggle} />
<span>Select All</span>
</div>

              <div className="grid grid-cols-4 gap-4 mt-2">
                {modulesList.map(module => (
                  <div key={module} className="flex items-center">
                    <input
                      type="checkbox"
                      id={module}
                      checked={selectedModules.includes(module)}
                      onChange={() => handleModuleChange(module)}
                      className="mr-2"
                    />
                    <label htmlFor={module} className="text-gray-700">{module}</label>
                  </div>
                ))}
              </div>
            </div>

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_package;
