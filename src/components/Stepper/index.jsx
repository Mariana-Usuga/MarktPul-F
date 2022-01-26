/* eslint-disable no-nested-ternary */
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Pay from '../../pages/Pay';
import SuccessfulPurchase from '../../pages/SuccessfulPurchase';
import Shipping from '../../pages/Shipping';

import './stepper.scss';

const StepperPay = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };
  const previousStep = () => {
    if (activeStep !== -1) {
      setActiveStep((currentStep) => currentStep - 1);
    }
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
      {activeStep === 0 ? (
        <Shipping />
      ) : activeStep === 1 ? (
        <Pay />
      ) : (
        <SuccessfulPurchase />
      )}
      <div className="btnStepper">
        <div className="btnStepper__next">
          <Button fontSize="14px" onClick={() => previousStep()}>
            Paso anterior
          </Button>
        </div>
        <div className="btnStepper__previous">
          <Button onClick={() => nextStep()}>Proceder al pago</Button>
        </div>
      </div>
    </div>
  );
};

export default StepperPay;

// const steps = [
//   'Select campaign settings',
//   'Create an ad group',
//   'Create an ad',
// ];

// export default function HorizontalLinearStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());

//   const isStepOptional = (step) => step === 1;

//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Box sx={{ flex: '1 1 auto' }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </>
//       ) : (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             Step
//             {activeStep + 1}
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}

//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// }
