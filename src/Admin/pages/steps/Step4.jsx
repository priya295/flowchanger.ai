import { FormContext } from '../../../store/store';
import React from 'react';
import { useContext } from 'react';

const Step4 = () => {
  const { nextStep } = useContext(FormContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">

      <div className="w-full max-w-md">
        {/* Logo Container div */}
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src="./images/flowchangerAI.jpg" alt="Flowchangers Logo" className="bg-black h-[150px]" />
        </div>
        <div className=' shadow-xl p-4 border border-purple-200'>
          {/* form to upload file */}
          <div className='flex justify-center items-center '>
            <img src="./images/profileicon.jpg" className='h-12 w-12' alt="" />
          </div>
          <form action="">
            <div className='flex justify-center items-center mb-5'>

              <label for="image-upload" class="bg-purple-400 text-white py-2 px-4 rounded-full cursor-pointer">
                Upload Image
              </label>
              <input type="file" id="image-upload" class="hidden" accept="image/*" />

          {/* button to continue and skip the step */}
            </div>
            <div className='flex flex-col justify-between items-center'>
              <button
                onClick={nextStep}
                type="submit"
                className="w-[50%] bg-purple-400 text-white py-4 px-4 hover:bg-purple-500 transition duration-300 rounded-full mb-4"
              >
                continue
              </button>
              <button
                onClick={nextStep}
                type="submit"
                className="w-[50%] bg-purple-400 text-white py-4 px-4 hover:bg-purple-500 transition duration-300 rounded-full"
              >
                Skip the step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Step4;
