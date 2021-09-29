import React, { Component } from "react";
import { Col, Row, Navbar, Button } from "react-bootstrap";

class ConfirmDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <>
        <Row>
          <Col>
            <p primary="First Name" secondary={firstName} />
          </Col>
          <Col>
            <p primary="Last Name" secondary={lastName} />
          </Col>
          <Col>
            <p primary="Email" secondary={email} />
          </Col>
          <Col>
            <p primary="Occupation" secondary={occupation} />
          </Col>
          <Col>
            <p primary="City" secondary={city} />
          </Col>
          <Col>
            <p primary="Bio" secondary={bio} />
          </Col>
        </Row>
        <br />

        <Button color="secondary" variant="contained" onClick={this.back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={this.continue}>
          Confirm and Continue
        </Button>
      </>
    );
  }
}

export default ConfirmDetails;
