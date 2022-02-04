/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import Stepper from '@material-ui/core/Stepper';
import { Link, useParams } from 'react-router-dom';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Pay from '../../pages/Pay';
import SuccessfulPurchase from '../../pages/SuccessfulPurchase';
import Shipping from '../../pages/Shipping';

import './PaymentProcess.scss';

const PaymentProcess = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: '#1565c0',
    color: 'white',
    fontWeight: 700,
  });
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

  useEffect(() => {
    if (canProceed) {
      setIsDisabled(false);
      setBtnStyle({
        backgroundColor: '#1565c0',
        color: 'white',
        fontWeight: 700,
      });
    } else {
      setIsDisabled(true);
      setBtnStyle({
        backgroundColor: 'gray',
        color: 'white',
        fontWeight: 700,
      });
    }
  }, [canProceed]);

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Envío</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pago</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmación</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 0 ? (
        <Shipping canProceed={canProceed} setCanProceed={setCanProceed} />
      ) : activeStep === 1 ? (
        <Pay
          id={id || null}
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      ) : (
        <SuccessfulPurchase id={id || null} />
      )}
      <div className="btnStepper">
        <Button
          className="btnStepper-btn"
          variant="contained"
          fontSize="14px"
          style={{
            backgroundColor: '#1b86ff',
            color: 'white',
            fontWeight: 700,
          }}
          onClick={previousStep}
        >
          Paso anterior
        </Button>
        {activeStep === 2 ? (
          <Button
            className="btnStepper-btn"
            variant="contained"
            style={{ ...btnStyle }}
            onClick={nextStep}
            disabled={isDisabled}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Volver al comercio
            </Link>
          </Button>
        ) : (
          <Button
            className="btnStepper-btn"
            variant="contained"
            style={{ ...btnStyle }}
            onClick={nextStep}
            disabled={isDisabled}
          >
            Proceder al pago
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentProcess;
