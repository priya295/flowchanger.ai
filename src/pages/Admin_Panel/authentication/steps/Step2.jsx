import React from 'react';
import { FormContext } from '../../../../store/store';
import { useContext } from 'react';

const Step2 = () => {
  const {  nextStep } = useContext(FormContext);
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-purple-500">
      <div className="w-full max-w-md">
        {/* Logo section */}
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img className='h-[150px]' src="./images/flowchangerLogo.png" alt="Flowchangers Logo"  />
        </div>
        <div className='p-4 shadow-4xl border border-gray-100 bg-slate-100 rounded-md'>
          {/* user Details Form */}
          <form className='mt-4'>
            <div className="mb-4">
              <label htmlFor="firstName">firstName</label>
              <input
                type="text"
                id = "firstName"
                placeholder="firstName"
                aria-label="firstName"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="LastName">LastName</label>
              <input
                type="text"
                id = "LastName"
                placeholder="LastName"
                aria-label="LastName"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Mobile No.">Mobile No.</label>
              <input
                type="Number"
                id = "Mobile No."
                placeholder="Mobile No."
                aria-label="Mobile No."
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id = "password"
                placeholder="enter a password"
                aria-label="Password"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
              />
            </div>
            <div className="mb-6 flex  items-center">
               {/* checkbox for privacy policy */}
              <input
                type="checkbox"
                id="checkbox"
                aria-label="checkbox"
                className="w-[30px]  py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
               <label htmlFor="checkbox">I agree With Terms and privacy policy</label>
            </div>
            {/* next step button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 px-4 hover:bg-purple-500 transition duration-300 rounded-full"
              onClick={nextStep}
            >
              Next
            </button>
          </form>
          </div>
        </div>
      </div>
    
  );
};

export default Step2;
