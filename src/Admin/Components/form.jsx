import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";

const Form = () => {

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="flex flex-col space-y-6">
        <div className=' flex  h-10  mr- float-left items-center xs:w-[30%] md:w-[15%] '>
        <FaArrowLeft/><span className='font-bold ml-4'>Add staff</span>
        </div>
        <hr/>
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg">
          <div className="flex flex-col justify-center items-center font-bold">
          <div className="w-20 h-20 rounded-full bg-slate-200 p-5 flex justify-center items-center mb-4 sm:mb-0">
            <CgProfile className="h-10 w-10" />
          </div>
          <div>Add Staff</div>
          </div>
          <button className="bg-purple-700 text-white p-3 w-full sm:w-auto rounded">
            Save
          </button>
        </div>

        <form className="w-full mt-5 space-x-3 overflow-hidden">
          {[
            { label: "Full Name", type: "text", name: "name" },
            { label: "Job Title", type: "text", name: "jobtitle" },
            { label: "Employee Type", type: "text", name: "EmployeeType" },
            { label: "Date of Joining", type: "date", name: "DateOfJoining" },
            { label: "Mobile Number", type: "MobileNo.", name: "MobileNumber" },
            { label: "Date of Birth", type: "date", name: "DateOfBirth"},
            { label: "Gender", type: "text", name: "Gender"},
            { label: "Official Email ID", type: "text", name: "Offecial Email ID" },
            { label: "Login OTP", type: "text", name: "LoginOTP" },
            { label: "Address", type: "text", name: "Address" },
            { label: "Branch", type: "text", name: "Branch"},
            { label: "Department", type: "text", name: "Department"},
          ].map((field, index) => (
            <div key={index} className="mb-6 flex-col md:flex justify-evenly w-screen mx-auto">
              <label className="block text-gray-500 font-bold mb-2 w-[30%]" htmlFor={`field-${index}`}>
                {field.label}
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[90%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id={`field-${index}`}
                type={field.type}
                name={field.name}
                required
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Form;