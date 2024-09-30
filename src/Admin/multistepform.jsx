import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './step2';
import LoginPage from './login';
import RequestPassword from './RequestPassword';
import Step3 from './step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // State to track the current step

  const nextStep = () => {
    setStep(step + 1); // Function to go to the next step
  };

  const prevStep = () => {
    setStep(step - 1); // Function to go to the previous step
  };

  const goToRequestPassword = () => {
    setStep(3); // Function to go to the RequestPassword step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} goToRequestPassword={goToRequestPassword}/>;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 prevStep={prevStep} />;
      default:
        return <LoginPage nextStep={nextStep} />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
