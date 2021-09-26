import React, { Component } from "react";
import { Col, Row, Navbar, Button, FormControl } from "react-bootstrap";

export class RegContactDetails extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Navbar title="Enter User Details" />
        <FormControl
          placeholder="Enter Your First Name"
          label="First Name"
          // onChange={handleChange("firstName")}
          // defaultValue={values.firstName}
          // margin="normal"
          // fullWidth
        />
        <br />
        <FormControl
          placeholder="Enter Your Last Name"
          label="Last Name"
          // onChange={handleChange("lastName")}
          // defaultValue={values.lastName}
          // margin="normal"
          // fullWidth
        />
        <br />
        <FormControl
          placeholder="Enter Your Email"
          label="Email"
          // onChange={handleChange("email")}
          // defaultValue={values.email}
          // margin="normal"
          // fullWidth
        />
      </>
    );
  }
}

export default RegContactDetails;
