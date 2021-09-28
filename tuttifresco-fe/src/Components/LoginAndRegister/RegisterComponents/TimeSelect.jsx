import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Col, Row } from "react-bootstrap";

function TimeSelect() {
  const [value, setValue] = useState(new Date("2018-01-01T00:00:00.000Z"));
  const [times, setTimes] = useState({
    mon: { open: "00:05", closed: "18:30" },
    tue: { open: "", closed: "" },
    wed: { open: "", closed: "" },
    thu: { open: "", closed: "" },
    fri: { open: "", closed: "" },
    sat: { open: "", closed: "" },
    sun: { open: "", closed: "" },
    public: { open: "", closed: "" },
  });
  return (
    <Row>
      <Col xs={5}>
        <TextField
          variant="standard"
          id="time"
          label="Open"
          type="time"
          value={times.mon.open}
          defaultValue="09:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
        />
      </Col>
      <Col xs={2}>to</Col>
      <Col xs={5}>
        <TextField
          variant="standard"
          id="time"
          label="Close"
          type="time"
          value={times.mon.closed}
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
  );
}
export default TimeSelect;
