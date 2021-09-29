import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StepLabel,
  Step,
  Typography,
  Stepper,
  Container,
  Button,
} from "@mui/material";

import ContactDetails from "./RegisterComponents/ContactDetails";
import ConfirmDetails from "./RegisterComponents/ConfirmDetails";
import Success from "./RegisterComponents/Success";
import LocationDetails from "./RegisterComponents/LocationDetails";
import AccDetails from "./RegisterComponents/AccDetails";
import TradingHoursDetails from "./RegisterComponents/TradingHoursDetails";

function getSteps() {
  return [
    "Account Details",
    "Contact Details",
    "Location",
    "Trading Hours",
    "Confirm Details",
  ];
}

const RegBusiness = () => {
  const contact = useSelector((s) => s.contact);
  const location = useSelector((s) => s.location);
  const times = useSelector((s) => s.times);
  const basic = useSelector((s) => s.basic);

  const [regForm, setRegForm] = useState({
    basic: basic,
    location: location,
    times: times,
    contact: contact,
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [typeAccReg, setTypeAccReg] = useState("business");
  const steps = getSteps();

  function getStepContent(step) {
    if (typeAccReg === "business") {
      switch (step) {
        case 0:
          return <AccDetails />;
        case 1:
          return <ContactDetails />;
        case 2:
          return <LocationDetails />;
        case 3:
          return <TradingHoursDetails />;
        case 4:
          return <ConfirmDetails />;
        default:
          return "Unknown step";
      }
    }
    return <div></div>;
  }
  const isStepOptional = (step) => {
    return step === 7;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(typeAccReg);
  return (
    <Container className="my-5">
      <h1>Regsiter Business Account</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset}>Reset</Button>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button className="mx-auto" variant="primary">
              Go To Login
            </Button>
          </div>
        ) : (
          <div>
            <Container className="float-right my-4">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}

              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Confirm" : "Next"}
              </Button>
              <Typography>{getStepContent(activeStep)}</Typography>
            </Container>
          </div>
        )}
      </div>
    </Container>
  );
};

export default RegBusiness;
