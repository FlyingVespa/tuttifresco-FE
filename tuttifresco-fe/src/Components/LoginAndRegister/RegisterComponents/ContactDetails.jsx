import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Col, Row, Navbar, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const ContactDetails = () => {
  const formBusiness = useSelector((s) => s.formBusiness);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    email: null,
    cell: null,
    tel: null,
    twitter: null,
    insta: null,
    whatsapp: null,
  });

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "REG_FORM_BUSINESS", payload: formBusiness });
  }, []);

  return (
    <>
      <TextField
        placeholder="Enter email visible for customers"
        name="email"
        label="Email"
        variant="standard"
        helperText="*Required - This email will be shared with customers"
        onChange={handleContactChange}
        value={contact.email}
        margin="normal"
        fullWidth
      />
      <Row>
        <Col md={6}>
          <TextField
            name="cell"
            placeholder="Enter mobile"
            label="Mobile number"
            variant="standard"
            helperText="Required"
            onChange={handleContactChange}
            value={contact.cell}
            fullWidth
          />
        </Col>
        <Col md={6}>
          <TextField
            name="tel"
            placeholder="Enter landline"
            label="Landline number"
            variant="standard"
            helperText="Optional"
            onChange={handleContactChange}
            value={contact.tel}
            fullWidth
          />
        </Col>
        <Col md={6}>
          <TextField
            name="insta"
            placeholder="Enter WhatsApp Number"
            label="Mobile number"
            variant="standard"
            helperText="Optional"
            onChange={handleContactChange}
            value={contact.insta}
            fullWidth
          />
        </Col>
        <Col md={6}>
          <TextField
            name="whatsapp"
            placeholder="Enter whatsApp number"
            label="WhatsApp"
            variant="standard"
            helperText="Optional"
            onChange={handleContactChange}
            value={contact.whatsapp}
            fullWidth
          />
        </Col>
      </Row>
    </>
  );
};

export default ContactDetails;
