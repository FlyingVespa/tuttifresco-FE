import { useState, Component } from "react";
import {
  FormControl,
  Checkbox,
  TextField,
  FormLabel,
  Switch,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";

const TradingHours = () => {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const [isOpen, setIsOpen] = useState({
    tue: true,
    wed: true,
    thu: false,
    fri: false,
    sat: false,
    sun: true,
    mon: true,
    public: false,
  });
  const [times, setTimes] = useState({
    monday: { trading: true, open: "01:11", closed: "04:00" },
    tuesday: { trading: true, open: "", closed: "" },
    wednesday: { trading: true, open: "", closed: "" },
    thursday: { trading: false, open: "", closed: "" },
    friday: { trading: true, open: "", closed: "" },
    saturday: { trading: true, open: "", closed: "" },
    sunday: { trading: true, open: "", closed: "" },
    public: { trading: true, open: "", closed: "" },
  });

  // const handleTimeChange = (event) => {
  //   setTimes({
  //     ...times,
  //     [times[day].trading]: event.target.value,
  //   });
  // };
  // const { mon, tue, wed, thu, fri, sat, sun } = this.state.hours;

  const days = Object.keys(times);

  return (
    <div>
      <div>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Trading Days Open/Closed</FormLabel>
          <FormGroup>
            {days.map((day) => (
              <Row>
                <Col xs={5}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={times[day].trading}
                        onChange={(e) =>
                          setTimes(...times[day].trading, e.target.checked)
                        }
                        // name={day}
                      />
                    }
                    label={day}
                  />
                </Col>
                {!times[day].trading ? (
                  <Col xs={7}>
                    <div>
                      <p>Closed</p>
                    </div>
                  </Col>
                ) : (
                  <Col xs={7}>
                    <Row>
                      <Col xs={5}>
                        <TextField
                          variant="standard"
                          id="time"
                          label="Open"
                          type="time"
                          value={times[day].open}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                          fullWidth
                          onChange={(e) =>
                            setTimes({
                              ...times,
                              [times[day].open]: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col xs={2}>to</Col>
                      <Col xs={5}>
                        <TextField
                          variant="standard"
                          id="time"
                          label="Close"
                          type="time"
                          value={times[day].closed}
                          defaultValue="17:00"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                          fullWidth
                        />
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default TradingHours;
