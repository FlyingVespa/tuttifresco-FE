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
  const dispatch = useDispatch();
  const form = useSelector((s) => s.formBusiness);
  const [datas, setData] = useState({
    contact: {
      email: "s",
      tel: "",
      cell: "",
      insta: "",
      whatsapp: "",
      twitter: "",
    },
    basic: {
      businesName: "",
      category: "",
      email: "s",
      delivery: "",
      password: "",
      username: "",
    },
  });
  const ss = Object.keys(datas);
  const handleOnChange = ({ target }) => {
    setData({ ...datas, ...(datas[target.name][target.id] = [target.value]) });
  };

  const payload = {};
  const handleChange = (e) => {
    dispatch({ type: "REG_BUSINESS_CONTACT", payload });
    console.log(form.contact);
  };

  const [activeStep, setActiveStep] = useState(0);
  const [typeAccReg, setTypeAccReg] = useState("business");
  const steps = getSteps();

  function getStepContent(step) {
    if (typeAccReg === "business") {
      switch (step) {
        case 0:
          return <AccDetails f={handleOnChange} d={datas.basic} />;
        case 1:
          return <ContactDetails f={handleOnChange} d={datas.contact} />;
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
