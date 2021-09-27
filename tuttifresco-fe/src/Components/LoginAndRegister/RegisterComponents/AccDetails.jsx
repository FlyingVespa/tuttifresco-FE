import { TextField, Autocomplete } from "@mui/material";
import React, { Component, useState } from "react";
import { Col, Row, Navbar, Button, FormControl } from "react-bootstrap";

const category = [
  "Fishery",
  "Flowers",
  "Auto Repair",
  "Produce",
  "Resturant",
  "Beauty",
  "Construction",
];

const AccDetails = () => {
  const [businessCategory, setBussinessCategory] = useState("");
  const [businessName, setBussinessName] = useState("");
  const [accEmail, setAccEmail] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="my-5">
      <TextField
        variant="standard"
        placeholder="Enter Your email used for login"
        label="Account Email"
        value={accEmail}
        onChange={(e) => setAccEmail(e.target.value)}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <TextField
        variant="standard"
        placeholder="Enter Your preffered"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <hr className="my-4" />
      <TextField
        variant="standard"
        placeholder="Business Name"
        label="Business Name"
        value={businessName}
        onChange={(e) => setBussinessName(e.target.value)}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <Autocomplete
        value={businessCategory}
        onInputChange={(event, newInputValue) => {
          setBussinessCategory(newInputValue);
        }}
        id="combo-box-demo"
        options={category}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Type of business"
            value={businessCategory}
            variant="standard"
            onChange={(e) => {
              setBussinessCategory(e.target.value);
            }}
          />
        )}
      />
    </div>
  );
};

export default AccDetails;
