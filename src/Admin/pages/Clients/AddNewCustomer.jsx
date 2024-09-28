
import { div } from 'framer-motion/client';
import React from 'react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
// import { useNavigate, useParams } from 'react-router-dom;

const AddNewCustomer = () => {
  // Helper function to create form fields
  const FormField = ({ label, id, name,placeholder, type = "text" ,icon}) => (
    <div className="items-center w-[100%] md:w-[60%]  mx-auto">
      {icon ? 
      <div className='flex justify-start items-center mb-2'><span>{icon}</span>
       <label className="block text-gray-700 text-sm font-normal " htmlFor={id}>
        {label}
      </label>
      </div>: <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor={id}>
        {label}
      </label>
      }
     
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder= {placeholder}
        className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-black font-normal"
        required
      />
    </div>
  );

  return (<>
    <div className='flex w-[50%] justify-between mx-15'>
    <div>Customer Details</div>
    <div>Billing and Shipping</div>
    <hr />
  </div>
    <form className="bg-white rounded-lg shadow-lg p-6 min-h-screen font-medium">
      {/* Form fields */}
      <div key={Date.now()} className="mb-4">
      
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Company"  id="name" className="w-full" />
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="VAT Number" id="name" />
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="phone" id="name" />
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="website" id="name" />
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Groups" id="Department" />
        </div>

        <div className='flex flex-wrap justify-between my-10 mx-auto w-[100%] ml-0 md:ml-20'>
          <div className="flex w-[80%]">
            <div className="w-1/2 pr-2">
              <FormField label="Currency" id="currency" icon = {<HiOutlineQuestionMarkCircle />} placeholder="currency"/>
            </div>
            <div className="w-1/2 pl-2">
              <FormField label="Default Language" id="defaultLanguage" placeholder="Default Language"/>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <div className = "w-[100%] md:w-[60%]  mx-auto">
        <label htmlFor="" className='mt-2 font-normal'>Address</label>
         <textarea name="" id="" className='w-[100%] border border-gray-400'></textarea>
         </div>
        </div>

      
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="City" id="City" />
        </div>

        
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="State" id="State" name="State" />
        </div>
        <div className='flex flex-wrap justify-evenly my-10 w-[100%] h-[30%]'>
          <FormField label="Zip Code" id="Zip Code" name="Zip Code" />
        </div>
      </div>

      {/* Form buttons */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-black hover:bg-gray-700 border border-gray-300  font-normal py-2 px-4 rounded mr-2"
        >
          save and create contact
        </button>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-normal py-2 px-4 rounded"
        >
          Save 
        </button>
      </div>
    </form>
    </>);
};

export default AddNewCustomer;