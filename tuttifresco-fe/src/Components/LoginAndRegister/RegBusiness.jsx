import React from "react";
import { useState } from "react";
import {
  StepLabel,
  Step,
  Typography,
  Stepper,
  Container,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

import { Col, Row, Image } from "react-bootstrap";

import regbus from "../../regbus.png";
import reguser from "../../reguser.png";
import reg from "../../Reg.png";

import ContactDetails from "./RegisterComponents/ContactDetails";
import Confirm from "./RegisterComponents/Confirm";
import Success from "./RegisterComponents/Success";
import LocationDetails from "./RegisterComponents/LocationDetails";
import AccDetails from "./RegisterComponents/AccDetails";
import TradingHours from "./RegisterComponents/TradingHours";

function getSteps() {
  return [
    "Account Details",
    "Business Details",
    "Location",
    "Trading Hours",
    "Contact Details",
    "Confirm",
  ];
}

function RegBusiness() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [typeAccReg, setTypeAccReg] = useState("business");
  const steps = getSteps();

  function getStepContent(step) {
    if (typeAccReg == "business") {
      switch (step) {
        case 0:
          return <AccDetails />;
        case 1:
          return <ContactDetails />;
        case 2:
          return <LocationDetails />;
        case 3:
          return <TradingHours />;
        case 4:
          return "This is the bit I really care about!";
        case 5:
          return <ContactDetails />;
        case 6:
          return "This is the bit I really care about!";
        default:
          return "Unknown step";
      }
    }
    return <div></div>;
  }
  const isStepOptional = (step) => {
    return step === 1;
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              <Typography>{getStepContent(activeStep)}</Typography>
            </Container>
          </div>
        )}
      </div>
    </Container>
  );
}

export default RegBusiness;
