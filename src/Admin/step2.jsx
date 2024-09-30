import React from 'react';

const Step2 = ({ nextStep, goToRequestPassword }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src="./images/Flowchangers.ai 4.png" alt="Flowchangers Logo" className="bg-black"/>
        </div>
        <div className='p-4 shadow-2xl border border-gray-100'>
          <form className='mt-4'>
            <div className="mb-4">
              <input
                type="text"
                placeholder="firstName"
                aria-label="firstName"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="LastName"
                aria-label="LastName"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <div className="mb-4">
              <input
                type="Number"
                placeholder="Mobile No."
                aria-label="Mobile No."
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="enter a password"
                aria-label="Password"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <div className="mb-6 flex  items-center">
               
              <input
                type="checkbox"
                id="checkbox"
                aria-label="checkbox"
                className="w-[30px]  py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
               <label htmlFor="checkbox">I agree With Terms and privacy policy</label>
            </div>
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
