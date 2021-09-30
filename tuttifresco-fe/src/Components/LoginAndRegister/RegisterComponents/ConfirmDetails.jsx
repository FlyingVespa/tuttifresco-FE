import React, { Component } from "react";
import { Col, Row, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ConfirmDetails = (props) => {
  const basic = useSelector((s) => s.basic);
  const location = useSelector((s) => s.location);
  const contact = useSelector((s) => s.contact);
  const times = useSelector((s) => s.times);

  const continues = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <>
      {/* <Row>
        <Col>
          <p primary="Business Name" secondary={basic?.name} />
        </Col>
        <Col>
          <p primary="Last Name" secondary={basic?.category} />
        </Col>
        <Col>
          <p primary="Email" secondary={basic?.accemail} />
        </Col>
        <Col>
          <p primary="Delivery" secondary={basic?.delivery} />
        </Col>
        <Col>
          <p primary="Username" secondary={basic?.username} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p primary="Country" secondary={location?.country}></p>
        </Col>
        <Col>
          <p primary="Region" secondary={location?.region}></p>
        </Col>
        <Col>
          <p primary="Zip Code" secondary={location?.zip}></p>
        </Col>
        <Col>
          <p primary="City" secondary={location?.city}></p>
        </Col>
        <Col>
          <p primary="Address" secondary={location?.address}></p>
        </Col>
        <Col>
          <p primary="Service Area" secondary={location?.serviceArea}></p>
        </Col>
      </Row>
      <Row>
        {contact.map((con) => (
          <Col>
            <p primary="Contact Email" secondary={con}></p>
          </Col>
        ))}
        <Col>
          <p primary="Mobile" secondary={contact?.cel}></p>
        </Col>
        <Col>
          <p primary="Landline" secondary={contact?.tel}></p>
        </Col>
        <Col>
          <p primary="WhatApp" secondary={contact?.whatsapp}></p>
        </Col>
        <Col>
          <p primary="Instagram" secondary={contact?.insta}></p>
        </Col>
        <Col>
          <p primary="Twitter" secondary={contact?.twitter}></p>
        </Col>
      </Row> */}
      <br />
    </>
  );
};

export default ConfirmDetails;
