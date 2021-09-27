import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Col, Row, Navbar, Button, FormControl } from "react-bootstrap";

function ContactDetails() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [landline, setLandline] = useState("");
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [whatsApp, setWhatsApp] = useState(null);

  return (
    <>
      <TextField
        placeholder="Enter email visible for customers"
        label="Email"
        variant="standard"
        helperText="*Required - This email will be shared with customers"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        margin="normal"
        fullWidth
      />
      <Row>
        <Col>
          {" "}
          <TextField
            placeholder="Enter mobile"
            label="Mobile number"
            variant="standard"
            helperText="Required"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            fullWidth
          />
        </Col>
        <Col>
          <TextField
            placeholder="Enter landline"
            label="Landline number"
            variant="standard"
            helperText="Optional"
            onChange={(e) => setLandline(e.target.value)}
            value={landline}
            fullWidth
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            placeholder="Enter mobile"
            label="Mobile number"
            variant="standard"
            helperText="Optional"
            onChange={(e) => setInstagram(e.target.value)}
            value={instagram}
            fullWidth
          />
        </Col>
        <Col>
          <TextField
            placeholder="Enter whatsApp number"
            label="WhatsApp"
            variant="standard"
            helperText="Optional"
            onChange={(e) => setWhatsApp(e.target.value)}
            value={whatsApp}
            fullWidth
          />
        </Col>
      </Row>
    </>
  );
}

export default ContactDetails;
