import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom;

const EditForm = () => {
  // Helper function to create form fields
  const FormField = ({ label, id, name, type = "text" }) => (
    <div className="items-center md:w-[33%] w-[100%] mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name || id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
        required
      />
    </div>
  );

  return (
    <form className="bg-white rounded-lg shadow-lg p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>

      {/* Form fields */}
      <div key={Date.now()} className="mb-4">
        {/* First row */}
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Name" id="name" />
          <FormField label="Date of Joining" id="DateOfJoining" />
          <FormField label="Date of Birth" id="DateOfBirth" />
        </div>

        {/* Second row */}
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Department" id="Department" />
          <FormField label="Employee Type" id="EmployeeType" />
          <FormField label="Email ID" id="EmailId" />
        </div>

        {/* Third row */}
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Address" id="Address" />
          <FormField label="Login ID" id="LoginOTP" name="LoginOTP" />
          <FormField label="Gender" id="Gender" />
        </div>

        {/* Fourth row */}
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Mobile No." id="MobileNo" name="MobileNo." />
          <FormField label="Job Title" id="jobtitle" />
          <FormField label="Branch" id="Branch" />
        </div>
      </div>

      {/* Form buttons */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditForm;