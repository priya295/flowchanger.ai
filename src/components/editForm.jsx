import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
  
  return (
    <form  className="bg-white rounded-lg shadow-lg p-6 h-screen">
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
        <div key= {Date.now()} className="mb-4">
          <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%] '>
          <div className=' items-center w-[33%] mx-auto '>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
           Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className=' items-center  w-[33%]  mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DateOfJoining">
            DateOfJoining
          </label>
          <input
            type="text"
            id="Branch"
            name="DateOfJoining"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className=' items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DateOfBirth">
            DateOfBirth
          </label>
          <input
            type="text"
            id="DateOfBirth"
            name="DateOfBirth"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%] '>
          <div className=' items-center b w-[33%] mx-auto '>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
           Department
          </label>
          <input
            type="text"
            id="Department"
            name="Department"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EmployeeType">
            EmployeeType
          </label>
          <input
            type="text"
            id="EmployeeType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EmailId">
            EmailId
          </label>
          <input
            type="text"
            id="EmailId"
            name="EmailId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
           Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="LoginId">
            Login Id
          </label>
          <input
            type="text"
            id="LoginOTP"
            name="LoginOTP"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Gender">
            Gender
          </label>
          <input
            type="text"
            id="Gender"
            name="Gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
        </div>
       
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%] '>
          <div className='items-center w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="MobileNo.">
           Mobile No.
          </label>
          <input
            type="text"
            id="  MobileNo."
            name="MobileNo."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobtitle">
            jobTitle
          </label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
          <div className='items-center  w-[33%] mx-auto'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Branch">
            Branch
          </label>
          <input
            type="text"
            id="Branch"
            name="Branch"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black"
            required
          />
        </div>
        </div>
       
         
        </div>
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