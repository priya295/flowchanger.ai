import React, { useContext } from 'react';
import { FormContext } from '../../../../store/store';

const Step5 = () => {
  const {nextStep} = useContext(FormContext);
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-purple-500">
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img className='h-[150px]' src="./images/flowchangerLogo.png" alt="Flowchangers Logo"  />
        </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Set up your account</h1>
        
        <div className="space-y-6">
          {/* Time zone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time zone</label>
            <select className="w-full p-2 border rounded-md bg-gray-50">
              <option>(GMT+05:30) India Standard Time</option>
            </select>
          </div>

          {/* Time format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time format</label>
            <div className="flex gap-4">
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-gray-100"
                
              >
                12 hours: 9:00 PM
              </button>
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-purple-500 text-white"
              >
                24 hours: 21:00
              </button>
            </div>
          </div>

          {/* Date format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date format</label>
            <div className="flex gap-4">
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-purple-500 text-white" 
              >
                31 December 2022
              </button>
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-gray-100" 
              >
                December 31, 2022
              </button>
            </div>
          </div>

          {/* Week format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Week format</label>
            <div className="flex gap-4 mb-4">
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-gray-100" 
              >
                Monday
              </button>
              <button 
                className="flex-1 py-2 px-4 rounded-md bg-purple-500 text-white"
              >
                Sunday
              </button>
            </div>
          </div>

          {/* Continue button */}
          <button onClick={nextStep} className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step5;