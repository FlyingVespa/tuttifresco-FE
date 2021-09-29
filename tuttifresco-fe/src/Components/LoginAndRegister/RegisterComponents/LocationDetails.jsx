import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Autocomplete,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Select,
  Chip,
  Box,
  Checkbox,
} from "@mui/material";
import countrylist from "../../../json/countries.json";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { useTheme } from "@mui/material/styles";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const cities = [
  "Rome",
  "Milan",
  "Messina",
  "Palermo",
  "Catania",
  "Veneto",
  "Venezia",
  "Firenze",
  "Pisa",
  "Constania",
];

function LocationDetails() {
  const [location, setLocation] = useState({
    country: null,
    city: null,
    region: null,
    address: null,
    serviceArea: null,
  });
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [operationCity, setOperationCity] = React.useState([]);
  const [region, setRegion] = React.useState([]);

  const handleCitySelect = (event) => {
    const {
      target: { value },
    } = event;
    setOperationCity(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const countries = countrylist;

  return (
    <Container>
      <p className="m-3">Bussiness Location</p>
      <Container>
        <Row className="gx-2">
          <Col md={7}>
            <Autocomplete
              value={country}
              onInputChange={(event, newInputValue) => {
                setCountry(newInputValue);
              }}
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  variant="standard"
                  onChange={(e) => {
                    setCountry(e.current.value);
                  }}
                />
              )}
            />
          </Col>
          <Col xs={5}>
            <Autocomplete
              value={region}
              onInputChange={(event, newInputValue) => {
                setRegion(newInputValue);
              }}
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  variant="standard"
                  onChange={(e) => {
                    setRegion(e.current.value);
                  }}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Autocomplete
              value={city}
              onInputChange={(event, newInputValue) => {
                setCity(newInputValue);
              }}
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Address"
                  variant="standard"
                  onChange={(e) => {
                    setCity(e.current.value);
                  }}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Autocomplete
              value={address}
              onInputChange={(event, newInputValue) => {
                setAddress(newInputValue);
              }}
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Address"
                  variant="standard"
                  onChange={(e) => {
                    setAddress(e.current.value);
                  }}
                />
              )}
            />
          </Col>
        </Row>
      </Container>
      <hr className="my-5" />
      <p className="m-3">Service Areas</p>
      <Container>
        <Autocomplete
          multiple
          value={operationCity}
          id="size-small-standard-multi"
          options={cities}
          onChange={(event, newValue) => {
            setOperationCity(newValue);
          }}
          disableCloseOnSelect
          getOptionLabel={(city) => city}
          renderOption={(props, city, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {city}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="City" variant="standard" />
          )}
        />
      </Container>
    </Container>
  );
}

export default LocationDetails;
