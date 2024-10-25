import React, { useEffect, useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "@davzon/react-country-state-city";
import { useGlobalContext } from "../../../Context/GlobalContext";

const EditSalaryDetails = () => {

  const { selectedStaff } = useGlobalContext();
  // console.log(selectedStaff);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectSalaryType, setSelectSalaryType] = useState("");
  const [selectSalaryStructure, setSelectSalaryStructure] = useState("");
  const [totalCTC, setTotalCTC] = useState(0);

  const [isOpenAllowance, setIsOpenAllowance] = useState(false);
  const [isOpenDeduction, setIsOpenDeduction] = useState(false);

  const [isModalAllowanceOpen, setIsModalAllowanceOpen] = useState(false);
  const [isModalDeductionOpen, setIsModalDeductionOpen] = useState(false);
  const [searchAllowance, setSearchAllowance] = useState('');
  const [searchDeduction, setSearchDeduction] = useState('');
  const [customAllowance, setCustomAllowance] = useState('');
  const [customDeduction, setCustomDeduction] = useState('');
  const [allowances, setAllowances] = useState([
    "HRA",
    "Dearness Allowance",
    "Accommodation and Food",
    "Bonus and Incentives",
    "Cash Allowance",
    "CCA",
    "Children Education Allowance",
    "Conveyance Allowance",
    "Distance Allowance",
    "Education Allowance",
    "Entertainment Allowance",
    "Fuel Allowance",
    "Helper Allowance",
    "Hill Allowance",
    "Internet Allowance",
    "Laptop Allowance",
    "Leave Encashment",
    "LTA",
    "Management Allowance",
    "Meal Allowance",
    "Medical Allowance",
    "Mediclaim & Insurance",
    "Night Shift Allowance",
    "Other Allowance",
    "Personal Allowance",
    "Phone Allowance",
    "Project Allowance",
    "Paid Leave Allowance",
    "Admin Allowance",
    "Driver Allowance",
    "Long Service Allowance",
    "Gratuity Earned",
    "Washing Allowance",
    "Warden Allowance",
    "Uniform Allowance",
    "Underground Allowance",
    "Travel Allowance",
    "Refreshment Allowance",
    "Servant Allowance",
    "Shift Allowance",
    "Site Allowance",
    "Special Allowance",
    "Special Compensatory Allowance",
    "Stationary Allowance",
    "Statutory Bonus",
    "Supervisor Allowance",
    "Telephone & Internet Reimbursement",
    "Transport Allowance"
  ]);
  const [deductions, setDeductions] = useState([
    "Medical Insurance Premium",
    "Food Deduction",
    "Benevolent Fund",
    "Term Insurance",
    "Group Accidental Policy & WC",
    "Gratuity",
    "Statutory Bonus Deduction",
    "Security Deposit",
    "Uniform Deduction",
    "Transport Charges",
    "Miscellaneous Deduction"
  ]);

  const [selectedAllowance, setSelectedAllowance] = useState(["Basic"]);
  const [selectedDeduction, setSelectedDeduction] = useState([]);

  const [calEarning, setCalEarning] = useState([]);
  const [calCompliances, setCalCompliances] = useState([]);
  const [calDeductions, setCalDeductions] = useState([]);

  const handleChange = (type, name, value, field) => {
    const setData = type === "earnings"
      ? setCalEarning
      : type === "compliances"
        ? setCalCompliances
        : setCalDeductions;

    setData(prev => {
      const existingItem = prev.find(item => item.name === name); // Check if the item already exists

      if (existingItem) {
        // If the item exists, update it
        return prev.map(item =>
          item.name === name
            ? { ...item, [field]: field === "amount" ? Number(value) : value }
            : item
        );
      } else {
        // If the item does not exist, add a new item
        const newItem = {
          name,
          [field]: field === "amount" ? Number(value) : value,
          // Initialize any other necessary fields with default values
          amount: 0,
          calculation: "On Attendance" // or any default calculation
        };
        return [...prev, newItem]; // Add the new item to the array
      }
    });
  };

  const allowanceDropdownRef = useRef(null);
  const deductionDropdownRef = useRef(null);
  const searchInputAllowanceRef = useRef(null);
  const searchInputDeductionRef = useRef(null);

  const filteredAllowances = allowances.filter(allowance =>
    allowance.toLowerCase().includes(searchAllowance.toLowerCase())
  );
  const filteredDeductions = deductions.filter(deduction =>
    deduction.toLowerCase().includes(searchDeduction.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if ((allowanceDropdownRef.current && !allowanceDropdownRef.current.contains(event.target))) {
        setIsOpenAllowance(false);
      }
      if (deductionDropdownRef.current && !deductionDropdownRef.current.contains(event.target)) {
        setIsOpenDeduction(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpenAllowance && searchInputAllowanceRef.current) {
      searchInputAllowanceRef.current.focus();
    }
  }, [isOpenAllowance]);
  useEffect(() => {
    if (isOpenDeduction && searchInputDeductionRef.current) {
      searchInputDeductionRef.current.focus();
    }
  }, [isOpenDeduction]);

  const handleAddCustomAllowance = () => {
    if (customAllowance.trim() !== '' && !allowances.includes(customAllowance.trim())) {
      setAllowances(prevAllowances => [...prevAllowances, customAllowance.trim()]);
      setCustomAllowance('');
      setIsModalAllowanceOpen(false);
      setIsOpenAllowance(true);
    }
  };
  const handleAllCustomDeduction = () => {
    if (customDeduction.trim() !== '' && !deductions.includes(customDeduction.trim())) {
      setDeductions(prevDeductions => [...prevDeductions, customDeduction.trim()]);
      setCustomDeduction('');
      setIsModalDeductionOpen(false);
      setIsOpenDeduction(true);
    }
  };


  // Format the selected month to display as "Month, Year"
  const formatMonthYear = (value) => {
    const [year, month] = value.split("-");
    const date = new Date(year, month - 1); // JS months are 0-indexed
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  // Initialize with the current month and year in YYYY-MM format
  useEffect(() => {
    const date = new Date();
    const formattedMonth = date.toISOString().slice(0, 7); // "YYYY-MM"
    setSelectedMonth(formattedMonth);
  }, []);



  const [stateid, setstateid] = useState(0);
  const [toggleButton, settoggleButton] = useState({
    addAllowances1: false,
    Employer_PF_Contribution: false,
    Employer_PF_Contribution2: false,
    Employer_ESI_Contribution: false,
    Employer_ESI_Contributio2: false,
    addAllowances2: false,
  });

  const handletoggleButton = (button) => {
    settoggleButton((prev) => ({
      ...prev,
      [button]: !prev[button], // Toggle the boolean value
    }));
  };

  console.log(selectedAllowance, selectedDeduction, calEarning, calCompliances, calDeductions);
  return (
    <div className="salary-details layout   w-full xl:p-[20px] p-[10px] pt-[80px] xl:p-[40px] relative xl:pt-[100px]    xl:pl-[320px] flex flex-col">
      <div className="flex items-center justify-between  xl:pb-6  ">
        <h1 className="  font-medium ">
          Salary Details Import Settings
        </h1>
        <div className="mt-2 xl:mt-0">

          <button className="second-btn">
            Update
          </button>
        </div>
      </div>

      <div className="flex justify-between whitespace-normal flex-wrap gap-[10px]">
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">Effective Date of Change</label><br />
          <input value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} type='month' className="mt-[5px]   border border-[#D9D9D9] bg-white  p-1 rounded-md focus:outline-none w-full" />
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full	">
          <label className="text-[14px]">Salary Type</label><br />
          <select value={selectSalaryType} onChange={(e) => setSelectSalaryType(e.target.value)} className="mt-[5px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full">
            <option value={"Per Month"}>
              Per Month
            </option>
            <option value={"Per Month"}>
              Per Day
            </option>
            <option value={"Per Hour"}>
              Per Hour
            </option>
          </select>
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">Salary Structure
          </label><br />
          <select value={selectSalaryStructure} onChange={(e) => { setSelectSalaryStructure(e.target.value) }} className="mt-[5px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full">
            <option value={"Salary Box Provided Breakdown"}>
              Salary Box Provided Breakdown
            </option>
            <option value={"Custom"}>
              Custom
            </option>

          </select>
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">CTC Amount</label><br />
          <div className="relative">
            <span className="absolute top-[10px] left-[4px]">₹</span>
            <input value={totalCTC} onChange={(e) => setTotalCTC(e.target.value)} type="number" placeholder="Enter Amount" className="mt-[5px] pl-[20px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full" />
          </div>
        </div>


      </div>

      {/*--Earnings Part--*/}
      <div className="">
        <h1 className="bg-[#F0F6FE] shadow-sm text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">Earnings</h1>
        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0">
          <div className="w-[100%] xl:w-[50%] space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold">Heads</span>
              <h1 className="text-[16px] font-semibold">Calculation</h1>
            </div>

            {selectedAllowance?.map((allowance, idx) => (
              <div className="flex items-center justify-between" key={allowance}>
                <span className="text-[13px] xl:text-[14px] font-normal">{allowance}</span>
                <select
                  value={calEarning.find(item => item.name === allowance)?.calculation || ""}
                  onChange={(e) => handleChange("earnings", allowance, e.target.value, "calculation")}
                  className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                >
                  <option value="On Attendance">On Attendance</option>
                  {/* Add more options if needed */}
                </select>
              </div>
            ))}

            {/* Add Allowances Button */}
            <div className="flex items-center justify-between relative">
              <div className="relative w-64" ref={allowanceDropdownRef}>
                <button
                  className="w-full text-left rounded-md shadow-sm focus:outline-none"
                  onClick={() => setIsOpenAllowance(!isOpenAllowance)}
                  aria-haspopup="true"
                  aria-expanded={isOpenAllowance}
                >
                  + Add Allowances
                </button>
                {isOpenAllowance && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={searchAllowance}
                      onChange={(e) => setSearchAllowance(e.target.value)}
                    />
                    <ul className="max-h-60 overflow-auto" role="listbox">
                      {filteredAllowances.map((allowance, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setIsOpenAllowance(false);
                            if (!selectedAllowance.includes(allowance)) {
                              setSelectedAllowance(prev => [...prev, allowance]);
                            }
                          }}
                          role="option"
                        >
                          {allowance}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 border-t border-gray-300">
                      <button
                        className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
                        onClick={() => {
                          setIsModalAllowanceOpen(true);
                          setIsOpenAllowance(false);
                        }}
                      >
                        + Add Custom Allowance
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-[100%] xl:w-[50%] space-y-[18px] flex items-end justify-start flex-col">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold">Amount</span>
            </div>

            {selectedAllowance?.map((allowance) => (
              <div className="flex items-center justify-between" key={allowance}>
                <div className="relative">
                  <span className="absolute top-[2px] left-[4px]">₹</span>
                  <input
                    value={calEarning.find(item => item.name === allowance)?.amount || ""}
                    onChange={(e) => handleChange("earnings", allowance, e.target.value, "amount")}
                    type="number"
                    placeholder="Enter Amount"
                    className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*--Compliances Part--*/}

      <div className=" xl:mt-12 mt-[0px]" >
        <h1 className="     bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">
          Compliances
        </h1>

        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 gap-[30px] flex-col xl:flex-row lg:flex-row md:flex-row ">
          <div className="xl:w-[50%] w-[100%] space-y-5 w-full">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Select Components</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer PF
              </span>
              {/* <div className="relative">
                <button
                  onClick={() => handletoggleButton("Employer_PF_Contribution")}
                  name=""
                  id=""
                  className="h-[25px] w-[100%] text-[#27004a] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm pr-[4px]"
                >
                  {" "}
                  + Add
                </button>

                {toggleButton.Employer_PF_Contribution && (
                  <>
                    <div className="w-[185px] h-[150px] absolute bg-white border right-[20px] top-[50px]  border-[#B1B1B1] rounded-md z-10">
                      <ul className="text-[12px] m-2 font-medium space-y-2">
                        <li>Basic</li>
                        <li>HRA</li>
                        <li>Dearness Allowance</li>
                        <li>Overtime</li>
                        <li>Incentive</li>
                      </ul>
                    </div>
                  </>
                )}
              </div> */}
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                PF EDLI & Admin Charges

              </span>
              {/* <div className="relative">
                <button
                  onClick={() => handletoggleButton("Employer_ESI_Contribution")}
                  name=""
                  id=""
                  className="h-[25px] w-[100%] text-[#27004a] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm pr-[4px]"
                >
                  {" "}
                  + Add
                </button>

                {toggleButton.Employer_ESI_Contribution && (
                  <>
                    <div className="w-[185px] h-[150px] absolute bg-white border right-[20px] top-[50px]  border-[#B1B1B1] rounded-md z-10">
                      <ul className="text-[12px] m-2 font-medium space-y-2">
                        <li>Basic</li>
                        <li>HRA</li>
                        <li>Dearness Allowance</li>
                        <li>Overtime</li>
                        <li>Incentive</li>
                      </ul>
                    </div>
                  </>
                )}
              </div> */}
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer ESI

              </span>
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer LWF
              </span>
              {/* <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select> */}

              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>


          </div>
          <div className="xl:w-[50%] w-[100%] space-y-5 w-full">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Included in CTC
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Amount</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between  ">
              <h3>N/A</h3>
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>


            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>
          </div>

        </div>

        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 gap-[30px]">
          <div className="xl:w-[50%] w-[100%] space-y-5    ml-0 gap-[30px] ">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Calculation</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer PF
              </span>

              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal">
                Professional Tax
              </span>
              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal">
                Employer ESI
              </span>

              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer LWF
              </span>
              {/* <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select> */}

              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>


          </div>
          <div className="xl:w-[50%] w-[100%] space-y-5">
            <div className="flex items-center  justify-end   ">

              <h1 className="text-[13px] xl:text-[13px] font-semibold">Amount</h1>
            </div>

            <div className="flex items-center justify-end  ">

              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-end  ">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>


            <div className="flex items-center justify-end invisible ">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-end  ">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*--Deductions Part--*/}
      <div className="">
        <h1 className="bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">Deductions</h1>
        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 ">
          <div className="w-[100%] xl:w-[50%] space-y-5 ">
            <div className="flex items-center justify-between ">
              <span className="text-[16px] font-semibold">Heads</span>
              <h1 className="text-[16px] font-semibold">Calculation</h1>
            </div>

            {selectedDeduction.length === 0 && (
              <div className="flex items-center justify-between">No Deduction data</div>
            )}
            {selectedDeduction.length > 0 && selectedDeduction?.map((deduction) => <div key={deduction} className="flex items-center justify-between">
              <span className="text-[13px] xl:text-[14px] font-normal">{deduction}</span>
              <select
                value={calDeductions.find(item => item.name === deduction)?.calculation || ""}
                onChange={(e) => handleChange("deduction", deduction, e.target.value, "calculation")}
                name=""
                id=""
                className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>
            )}
            {/* <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal">BASIC</span>
              <select
                name=""
                id=""
                className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between   ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">HRA</span>
              <select
                name=""
                id=""
                className="h-[25px] w-[117px] border  border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between   ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Dearness Allowance
              </span>
              <select
                name=""
                id=""
                className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div> */}

            <div className="flex items-center  justify-between relative ">
              <div className="relative w-64" ref={deductionDropdownRef}>
                <button
                  className="w-full text-left rounded-md shadow-sm focus:outline-none"
                  onClick={() => setIsOpenDeduction(!isOpenDeduction)}
                  aria-haspopup="true"
                  aria-expanded={isOpenDeduction}
                >
                  + Add Allowances
                </button>
                {isOpenDeduction && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    <>
                      <input
                        ref={searchInputDeductionRef}
                        type="text"
                        placeholder="Search"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={searchDeduction}
                        onChange={(e) => setSearchDeduction(e.target.value)}
                      />
                    </>
                    <ul className="max-h-60 overflow-auto" role="listbox">
                      {filteredDeductions.map((deduction) => (
                        <li
                          key={deduction}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            // console.log(`Selected: ${allowance}`);
                            setIsOpenDeduction(false);
                            if (!selectedDeduction.includes(deduction)) {
                              setSelectedDeduction(prev => [...prev, deduction])
                            }
                          }}
                          role="option"
                        >
                          {deduction}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 border-t border-gray-300">
                      <button
                        className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
                        onClick={() => {
                          setIsModalDeductionOpen(true);
                          setIsOpenDeduction(false);
                        }}
                      >
                        + Add Custom Allowance
                      </button>
                    </div>
                  </div>
                )}

                {isModalDeductionOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                      <h2 className="text-xl font-bold mb-4">Add Custom Allowance</h2>
                      <input
                        type="text"
                        placeholder="Enter Custom Allowance Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                        value={customDeduction}
                        onChange={(e) => {
                          setCustomDeduction(e.target.value)
                        }}
                      />
                      <div className="flex justify-end space-x-2">
                        <button
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                          onClick={() => setIsModalDeductionOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                          onClick={handleAllCustomDeduction}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%] space-y-[18px] flex items-end justify-start flex-col">
            <div className="flex items-center justify-between ">
              <span className="text-[16px] font-semibold">Amount</span>
            </div>

            {selectedDeduction?.map((deduction) => <div key={deduction} className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input value={calDeductions.find(item => item.name === deduction)?.amount || ""}
                  onChange={(e) => handleChange("deductions", deduction, e.target.value, "amount")}
                  type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>)}
            {/* <div className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>

            </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-between rounded-md bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">
        <h3 className="font-medium">Total CTC: -</h3>
        <h3 className="font-medium">₹ 0.00 /Month</h3>
      </div>

      {/*--Scroll Pages--*/}
      <div className="xl:mt-14 mt-[20px]">
        <h1 className="text-center mb-[10px]">Showing 1-1 of 1 staff</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="border border-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md  hover:bg-[#27004a] hover:text-white">
            <ArrowBackIosIcon className="absolute top-[6px] left-[10px]" />
          </button>
          <button className="border border-[#27004a] bg-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md">
            <span className="absolute top-[6px] left-[15px] text-white " >1</span>
          </button>
          <button className="border border-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md hover:bg-[#27004a] hover:text-white">
            <ArrowForwardIosIcon className="absolute top-[6px] left-[6px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditSalaryDetails