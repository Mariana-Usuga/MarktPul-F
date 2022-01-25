// import * as React from 'react';
// // import Box from '@mui/material/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
// // import Typography from '@mui/material/Typography';

// // const steps = [
// // 'Select campaign settings',
// // 'Create an ad group',
// // 'Create an ad',
// // ];

const StepperPay = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1);
  };
  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>First</StepLabel>
        </Step>
        <Step>
          <StepLabel>Second</StepLabel>
        </Step>
        <Step>
          <StepLabel>Third</StepLabel>
        </Step>
      </Stepper>
      <Button variant="outlined" onClick={() => nextStep()}>
        Next Step
      </Button>
      <Button variant="outlined" onClick={() => previousStep()}>
        Previous Step
      </Button>
    </div>
  );
};

export default StepperPay;
