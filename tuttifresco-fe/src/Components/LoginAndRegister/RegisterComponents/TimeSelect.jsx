import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Col, Row } from "react-bootstrap";

function TimeSelect() {
  const [value, setValue] = useState(new Date("2018-01-01T00:00:00.000Z"));

  return (
    <Row>
      <Col xs={5}>
        <TextField
          variant="standard"
          id="time"
          label="Open"
          type="time"
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
