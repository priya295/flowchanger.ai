
import React, { useContext } from 'react';
import { FormContext } from '../../../../store/store';

const Step1 = () => {
  const { nextStep } = useContext(FormContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-purple-500">

      {/* Login link and button */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <a href="/login" className="text-white hover:underline">
          Already have an account?
        </a>
        <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-400 transition duration-300">
          Login
        </button>
      </div>

      <div className="w-full max-w-md">
        
        {/* Logo section */}
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src="./images/flowchangerLogo.png" alt="Flowchangers Logo" className=" h-[150px]" />
        </div>

        {/* Sign-up form container */}
        <div className="bg-white rounded-lg p-8 border border-gray-300 shadow-2xl">
          
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-y-0">
            <h2 className="text-3xl font-medium mb-3 text-center mt-5">Try FlowChanger for free</h2>
            <p className="mb-5 text-gray-400 text-lg">No credit card required</p>
          </div>

          {/* Google Sign-up button */}
          <button className="w-full bg-white border border-gray-100 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center mb-4 hover:bg-gray-50 transition duration-300">
            <img src="./images/google-icon.png" alt="Google Icon" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <div className="text-center text-gray-500 px-4 py-2 border-gray-300">or Sign Up with Email</div>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>

          {/* Email sign-up form */}
          <form >
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
                required 
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              onClick={nextStep}
              className="w-full bg-purple-600 text-white py-4 px-4 hover:bg-purple-500 transition duration-300 rounded-full"
            >
              Sign Up For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
