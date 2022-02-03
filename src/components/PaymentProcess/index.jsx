/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import Stepper from '@material-ui/core/Stepper';
import { Link, useParams } from 'react-router-dom';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Pay from '../../pages/Pay';
import SuccessfulPurchase from '../../pages/SuccessfulPurchase';
import Shipping from '../../pages/Shipping';

import './PaymentProcess.scss';

const PaymentProcess = () => {
  const { id } = useParams();
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
        <Pay id={id || null} />
      ) : (
        <SuccessfulPurchase id={id || null} />
      )}
      <div className="btnStepper">
        <div className="btnStepper__next">
          <Button fontSize="14px" onClick={previousStep}>
            Paso anterior
          </Button>
        </div>
        <div className="btnStepper">
          <div className="btnStepper__previous__btn">
            <Button onClick={nextStep}>Proceder al pago</Button>
          </div>
        </div>
        {activeStep === 2 ? (
          <button type="button" className="back_landing hide">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              VOLVER AL COMERCIO
            </Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentProcess;
