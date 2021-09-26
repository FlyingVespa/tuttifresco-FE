import React, { Component } from "react";
import { Col, Row, Navbar, Button, FormControl } from "react-bootstrap";

export class RegBasicDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Navbar title="Enter Personal Details" />
        <FormControl
          placeholder="Enter Your Occupation"
          label="Occupation"
          //   onChange={handleChange("occupation")}
          //   defaultValue={values.occupation}
          //   margin="normal"
          //   fullWidth
        />
        <br />
        <FormControl
        //   placeholder="Enter Your City"
        //   label="City"
        //   onChange={handleChange("city")}
        //   defaultValue={values.city}
        //   margin="normal"
        //   fullWidth
        />
        <br />
        <FormControl
          placeholder="Enter Your Bio"
          label="Bio"
          //   onChange={handleChange("bio")}
          //   defaultValue={values.bio}
          //   margin="normal"
          //   fullWidth
        />
        <br />
      </>
    );
  }
}

export default RegBasicDetails;
