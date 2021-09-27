import { useState, Component } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  TextField,
  MenuItem,
  Switch,
} from "@mui/material";
import TimeSelect from "./TimeSelect";
import { Col, Row } from "react-bootstrap";

class TradingHours extends Component {
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Public Holiday",
  ];
  state = {
    mondayOpen: "",
    tuesdayOpen: "",
    wednesdayOpen: "",
    thursdayOpen: "",
    fridayOpen: "",
    saturdayOpen: "",
    sundayOpen: "",
    publicOpen: "",
    mondayClose: "",
    tuesdayClose: "",
    wednesdayClose: "",
    thursdayClose: "",
    fridayClose: "",
    saturdayClose: "",
    sundayClose: "",
    publicClose: "",

    // days: [
    //   {
    //     mon: { open: "", closed: "" },
    //     tue: { open: "", closed: "" },
    //     wed: { open: "", closed: "" },
    //     thu: { open: "", closed: "" },
    //     fri: { open: "", closed: "" },
    //     sat: { open: "", closed: "" },
    //     sun: { open: "", closed: "" },
    //     public: { open: "", closed: "" },
    //   },
    // ],
  };

  render() {
    const handleChange = (event) => {
      this.setState(event.target.value);
    };
    // const { mon, tue, wed, thu, fri, sat, sun } = this.state.hours;

    return (
      <div>
        <div>
          {this.days.map((day, i) => (
            <Row>
              <Col xs={4}>
                <Switch defaultChecked />
                {day}
              </Col>
              <Col xs={8}>
                <TimeSelect />
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
}
export default TradingHours;
