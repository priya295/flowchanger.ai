import React, { useContext } from 'react';
import { FormProvider, FormContext } from '../../store/store';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';


const FormSteps = () => {
  // Retrieve the current step from context
  const { step } = useContext(FormContext); 

  // Conditional rendering of the step based on the 'step' state
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    default:
      return <Step1 />; 
  }
};

// Parent component to wrap form steps with the FormProvider
const MultiStepForm = () => {
  return (
    <FormProvider> 
      <FormSteps />
    </FormProvider>
  );
};

export default MultiStepForm;
