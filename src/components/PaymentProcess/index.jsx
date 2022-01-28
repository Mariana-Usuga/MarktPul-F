/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import Stepper from '@material-ui/core/Stepper';
import { Link } from 'react-router-dom';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Pay from '../../pages/Pay';
import SuccessfulPurchase from '../../pages/SuccessfulPurchase';
import Shipping from '../../pages/Shipping';

import './PaymentProcess.scss';

const StepperPay = () => {
  const existingAddress = useSelector(
    (state) => state.changeAddress.existingAddress,
  );
  const changeAddress = useSelector((state) => state.changeAddress.location);
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
          <Button fontSize="14px" onClick={previousStep}>
            Paso anterior
          </Button>
        </div>
        <div className="btnStepper__previous">
          {changeAddress.location || existingAddress ? (
            <Button
              onClick={nextStep}
              className={
                activeStep === 2 ? 'btnStepper__previous__btn__hide' : null
              }
            >
              Proceder al pago
            </Button>
          ) : (
            <button type="button" className="btnStepper__previous__btn__hide">
              Proceder al pago
            </button>
          )}
        </div>
        {activeStep === 2 ? (
          <button type="button" className="back_landing">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              VOLVER AL COMERCIO
            </Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default StepperPay;
