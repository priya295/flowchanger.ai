import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import ClipLoader from "react-spinners/ClipLoader";
import { Modal } from 'react-responsive-modal';
import Select from "react-select";
import DeleteIcon from "@mui/icons-material/Delete";

const DepartmentDetail = () => {
  const [open10, setOpen10] = useState(false);

  const onOpenModal10 = () => setOpen10(true);
  const onCloseModal10 = () => setOpen10(false);
  const { baseUrl, setDepId, setName, openToast } = useGlobalContext();
  const [departments, setDepartments] = useState([]);
  const [searchDepartment, setSearchDepartMent] = useState("");
  const [exportFormat, setExportFormat] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [rowsToShow, setRowsToShow] = useState(25);

  // Handle select change for rows to show
  const handleSelectChange = (event) => {
    setRowsToShow(Number(event.target.value));
  };

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles export of departments to CSV, PDF, or prints.
   * The export format is determined by the value of `exportFormat` state.
   * If `exportFormat` is "CSV", it calls `exportCSV` function.
   * If `exportFormat` is "PDF", it calls `exportPDF` function.
   * If `exportFormat` is "Print", it calls `printDepartments` function.
   */
  /******  9a1f1a9d-de41-45b2-8122-961faca24166  *******/
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

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(baseUrl + "department");
      const res = await result.json();
      console.log(res);
      if (result.status === 200) {
        setDepartments(res.data);
      } else {
        console.log(res.message || "An unexpected error occured", "error");
      }
    }
    catch (error) {
      console.log("Fetch error:", error.message || error);
      console.log(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDepartments = async (id) => {
    console.log(id);
    try {
      const result = await fetch(`${baseUrl}department/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Corrected the header spelling for consistency
        },
      });
      console.log(result);
      if (result.status === true) {
        // Use result.ok instead of checking the status directly
        openToast(result.message);
        setDepartments(result);
      } else {
        console.log(result.message);
        openToast(result.message);
      }
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  // handle search department
  const handleSearchDepartMent = async () => {
    const queryParams = new URLSearchParams({
      department_name: searchDepartment,
    }).toString();
    setIsLoading(true);
    try {
      const response = await fetch(
        `${baseUrl}department/search?${queryParams}`
      );
      console.log(response);
      if (response.status === 201) {
        const result = await response.json();
        setDepartments(result);
      } else {
      }
    } catch (error) {
      console.error("Error searching staff:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchDepartment.trim()) {
        handleSearchDepartMent();
      } else {
        fetchDepartments(); // Fetch all projects if search input is cleared
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn); // Cleanup function to clear the timeout
  }, [searchDepartment]);


  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const [allStaff, setAllStaff] = useState();


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

  return (
    <div className="p-[10px] top-[95px] pl-[10px] w-[100%] pr-2 mb-3 pb-4">
      <Link
        to="/adddepartment"
        className="allcrm-btn "
      >
        {" "}
        <AddIcon className="addicon-all" /> New Department
      </Link>

      <div className="table-section mt-5 bg-white shadow-cs p-[20px]  rounded-lg ">
        <div className="flex mb-4 justify-between flex-col gap-2  sm:flex-row sm:gap-0">
          <div className="left-side ">
            <select
              onChange={handleSelectChange}
              className=" border border-[#e5e7eb] p-[7px]  shadow-sm mr-2 rounded-md text-[14px]  pr-3 focus:outline-none"
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="120">120</option>
            </select>
            <select
              onChange={(e) => setExportFormat(e.target.value)}
              className="border border-[#e5e7eb] p-[7px] shadow-sm rounded-md text-[14px] pr-3 focus:outline-none"
            >
              <option value="CSV">CSV</option>
              <option value="PDF">PDF</option>
              <option value="Print">Print</option>
            </select>

            <button
              onClick={handleExport}
              className="ml-2 bg-[#27004a] text-[14px] text-white p-2 rounded-md cursor-pointer"
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

                <button className='second-btn'>Confirm </button>
              </div>

            </Modal>
          </div>

          <div className="right-side relative  w-[200px]">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-3xl border-1 pl-3 h-[38px] pr-7
    ] focus:outline-none w-[100%] text-[15px] text-[#aeabab]"
              name="searchDepartment"
              value={searchDepartment}
              onChange={(e) => {
                setSearchDepartMent(e.target.value);
              }}
            />
            <SearchIcon
              className="absolute right-[10px] search-icon top-[12px]   text-[#aeabab]  font-thin text-[#dddddd;
    ]"
            />
          </div>
        </div>
        <div className='bg-white rounded-lg w-full shadow-cs  overflow-x-auto'>
          <table class="table-auto w-[100%] p-[10px]">
            <thead className="bg-[#ffff] ">
              <tr>
                <th className="text-center p-4 border-b border-[#dbdbdb] roll-name text-sm font-medium ">
                  Department Name
                </th>
                <th className="text-center border-b border-[#dbdbdb]  p-4 text-sm font-medium ">Options</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && departments.length === 0 ? (
                <tr className="h-[70px]">
                  <td
                    colSpan="9"
                    className="text-center text-gray-600 text-xl font-semibold py-4"
                  >
                    <ClipLoader color="#4A90E2" size={40} />
                  </td>
                </tr>
              ) : departments && departments.length > 0 ? (
                departments.slice(0, rowsToShow).map((dep) => (
                  <tr key={dep.id} className="border-b  border-[#dbdbdb] pb-2">
                    <td className="pt-4 pb-3 pl-3 border-r border-[#dbdbdb]">
                      <Link to="/" className="text-[#27004a] text-[14px]">
                        {dep.department_name}
                      </Link>

                    </td>
                    <td className="flex pt-4 gap-2 justify-center">
                      <Link
                        to="/editdepartment"
                        onClick={() => {
                          setDepId(dep.id);
                          setName(dep.department_name);
                        }}
                      >
                        <BorderColorIcon className="text-[#27004a] font-light cursor-pointer text-[10px]]" />
                      </Link>
                      <button onClick={() =>  {
                         deleteDepartments(dep.id)

                        onOpenModal10()
                      }}>
                        <DeleteIcon
                          className="text-red-500 cursor-pointer"
                        />
                      </button>
                      <Modal open={open10} onClose={onCloseModal10} center>
                        <div className="flex items-center justify-center h-[120px]">
                          <h2 className="text-[18px] font-medium text-center text-[#27004a]">Are you sure want to delete this</h2>

                        </div>
                        <div className="flex items-center justify-around ">
                          <button className="allcrm-btn">Yes , Confirm</button>
                          <button className="allcrm-btn" onClick={() => setOpen10(false)}>No , Cancel</button>
                        </div>
                      </Modal>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-[70px]">
                  <td
                    colSpan="2"
                    className="text-center text-red-500 text-xl font-semibold py-4"
                  >
                    No departments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between p-[16px] pb-[0] pl-0 pr-0 w-[100%] items-center  flex-col gap-2  sm:flex-row sm:gap-0">
          <p className=" text-[#a5a1a1] text-[14px]">
            Showing 1 to {rowsToShow} of {departments.length} entries
          </p>
          <div className="pagination flex gap-2 border pt-0 pl-4 pb-0 pr-4 rounded-md">
            <Link to="#" className="text-[12px]  pt-2 pb-[8px]">
              Previous
            </Link>
            <span className="text-[12px] bg-[#27004a] flex items-center  text-white pl-3 pr-3 ">
              1
            </span>
            <Link to="#" className="text-[12px]  pt-2 pb-[8px] ">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
