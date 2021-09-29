import React, { useState } from "react";
import {
  TextField,
  Autocomplete,
  FormControl,
  InputAdornment,
  Input,
  IconButton,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Row, Col } from "react-bootstrap";

const category = [
  "Fishery",
  "Flowers",
  "Auto Repair",
  "Produce",
  "Resturant",
  "Beauty",
  "Construction",
];
const deliveryDistance = [
  "No Delivery Serive",
  "On Request",
  "Less than 2km",
  "Less than 5km",
  "Less than 10km",
];

const AccDetails = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [basic, setBasicDetails] = useState({
    name: null,
    category: null,
    accemail: null,
    delivery: null,
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    setBasicDetails({ ...basic, [e.target.name]: e.target.value });
  };

  const inputChange = (e, newInputValue) => {
    setBasicDetails({ ...basic, [e.target.name]: newInputValue });
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleChange = (event) => {
  //   setDelivery(event.target.value);
  // };
  return (
    <div className="my-5">
      <TextField
        name="accemail"
        className="my-1"
        variant="standard"
        placeholder="Enter Your email used for login"
        label="Account Email"
        value={basic.accemail}
        onChange={handleChange}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <TextField
        name="username"
        className="my-1"
        variant="standard"
        placeholder="Enter Your preffered"
        label="Username"
        value={basic.username}
        onChange={handleChange}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password" fullWidth>
          Password
        </InputLabel>
        <Input
          name="password"
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handlePasswordChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <hr className="my-4" />
      <TextField
        name="name"
        className="my-1"
        variant="standard"
        placeholder="Business Name"
        label="Business Name"
        value={basic.name}
        onChange={handleChange}
        fullWidth
        helperText="*Required - not shared with public"
      />
      <Row>
        <Col>
          <Autocomplete
            name="category"
            className="my-3"
            value={basic.category}
            onInputChange={inputChange}
            id="category"
            options={category}
            renderInput={(params) => (
              <TextField
                {...params}
                name="category"
                label="Type of business"
                value={basic.category}
                variant="standard"
                onChange={handleChange}
              />
            )}
          />
        </Col>
        <Col>
          <Autocomplete
            name="delivery"
            className="my-3"
            value={basic.delivery}
            onInputChange={inputChange}
            id="delivery"
            options={deliveryDistance}
            renderInput={(params) => (
              <TextField
                name="delivery"
                {...params}
                label="Delivery Service"
                value={basic.delivery}
                variant="standard"
                onChange={handleChange}
              />
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AccDetails;
