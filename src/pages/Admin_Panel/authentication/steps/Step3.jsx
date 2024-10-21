import React, { useState ,useContext} from 'react';
import { FormContext } from '../../../../store/store';

const Step3 = () => {
  const {nextStep} = useContext(FormContext);
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 3) {
      document.getElementById(index + 1).focus();
    }
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 bg-purple-500">
      <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img className='h-[150px]' src="./images/flowchangerLogo.png" alt="Flowchangers Logo"  />
        </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify your Email</h2>
        <p className="text-gray-600 text-center mb-2">We sent a confirmation code on</p>
        <p className="text-center font-semibold mb-6">kanikaarora2404@gmail.com</p>
        
        <div className="flex justify-center space-x-2 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
            />
          ))}
        </div>
        
        <p className="text-gray-600 text-center mb-6">Enter a 4-digit confirmation code below</p>
        
        <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-full hover:bg-purple-500 transition duration-300 mb-4" onClick={nextStep}>
          Verify
        </button>
        
        <p className="text-center text-sm">
          Didn't receive a code? <a href="#" className="text-blue-500 hover:underline">Send it again</a>
        </p>
      </div>
    </div>
  );
};

export default Step3;