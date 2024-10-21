import { FormContext } from '../../../../store/store';
import React from 'react';
import { useContext } from 'react';
import { CiImageOn } from "react-icons/ci";

const Step7 = () => {
  const { nextStep } = useContext(FormContext);

  return (

    // create the profile page
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-purple-500">
      
      <div className="w-full max-w-md">
        {/* Logo container */}
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src="./images/flowchangerLogo.png" alt="Flowchangers Logo" className="h-[150px]"/>
        </div>
        
        <div className="bg-white rounded-lg p-8 border border-gray-300 shadow-2xl">
          <div className="flex flex-col justify-center items-center gap-y-0">
            <h2 className="text-3xl font-medium mb-3 text-center mt-5">upload your orgnization Logo</h2>
          </div>
          <div className='flex items-center justify-center'>
          <div class="flex items-center justify-center h-[80px] w-[80px] bg-gray-200 rounded-full mb-4 ">
          <h1 class= "left-5 text-3xl text-black font-medium">k</h1>
         </div>
         </div>
         {/* options to choose image */}
         <div className="flex justify-center items-center">
            <button
            onClick={nextStep}
              type="submit"
              className="w-[80%] bg-purple-600 text-white py-3 px-4 hover:bg-purple-500 transition duration-300 rounded-full"
            >
              Choose Image
            </button>
            </div>
              <div className='mt-4'>
              <p className='flex justify-center items-center'><span><CiImageOn /></span>or drop the file here</p>
             <div className='flex justify-center items-center'><p>skip the step</p></div>
             </div>
          
        </div>
      </div>
    </div>
  );
};

export default Step7;
