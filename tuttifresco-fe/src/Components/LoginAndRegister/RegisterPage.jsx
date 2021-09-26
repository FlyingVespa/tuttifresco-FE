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
// import { makeStyles } from "@mui/material";

import RegBasicDetails from "./RegisterComponents/RegBasicDetails";
import RegContactDetails from "./RegisterComponents/RegContactDetails";
import Confirm from "./RegisterComponents/Confirm";
import Success from "./RegisterComponents/Success";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

// function getStepContentUser(step) {
//   switch (step) {
//     case 0:
//       return"test";
//     case 1:
//       return "testtt">;
//     case 2:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown step";
//   }
// }

export default function RegsiterPage() {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [typeAccReg, setTypeAccReg] = useState("business");
  const steps = getSteps();
  function getStepContent(step) {
    if (typeAccReg == "business") {
      switch (step) {
        case 0:
          return <RegBasicDetails />;
        case 1:
          return <RegContactDetails />;
        case 2:
          return "This is the bit I really care about!";
        default:
          return "Unknown step";
      }
    } else {
      switch (step) {
        case 0:
          return "test";
        case 1:
          return "testtt";
        case 2:
          return "This is the bit I really care about!";
        default:
          return "Unknown step";
      }
    }
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
  const handleRadioChange = (e) => {
    setTypeAccReg(e.target.value);
  };
  console.log(typeAccReg);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <h1>Register </h1>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Type of Account</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Business"
                  onChange={handleRadioChange}
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                  onChange={handleRadioChange}
                />
              </RadioGroup>
            </FormControl>
            <Image src="./reg.png" style={{ width: "100%" }} />
          </Col>
          <Col md={6} xs={12}>
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
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography>{getStepContent(activeStep)}</Typography>
                  <div>
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

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
