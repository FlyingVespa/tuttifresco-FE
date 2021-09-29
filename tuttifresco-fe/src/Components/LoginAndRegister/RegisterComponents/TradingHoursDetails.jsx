import { useState, Component } from "react";
import {
  FormControl,
  Checkbox,
  TextField,
  FormLabel,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";

const TradingHoursDetails = () => {
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

  // const { mon, tue, wed, thu, fri, sat, sun } = this.state.hours;
  const handleTimeChange = (e) => {
    days.map((day) =>
      setTimes({
        ...times,
        [day]: {
          ...times[day],
          [e.target.name]: e.target.checked,
        },
      })
    );
  };

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
                        name="trading"
                        checked={times[day].trading}
                        onChange={(e) =>
                          setTimes({
                            ...times,
                            [day]: {
                              ...times[day],
                              trading: e.target.checked,
                            },
                          })
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
                          name="open"
                          variant="standard"
                          id="time"
                          label="open"
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
                              [day]: {
                                ...times[day],
                                open: e.target.value,
                              },
                            })
                          }
                        />
                      </Col>
                      <Col xs={1}>to</Col>
                      <Col xs={5}>
                        <TextField
                          name="close"
                          variant="standard"
                          id="time"
                          label="close"
                          type="time"
                          value={times[day].closed}
                          onChange={(e) =>
                            setTimes({
                              ...times,
                              [day]: {
                                ...times[day],
                                closed: e.target.value,
                              },
                            })
                          }
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

export default TradingHoursDetails;
