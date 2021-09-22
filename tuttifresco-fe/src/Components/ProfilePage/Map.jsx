import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { TiMap } from "react-icons/ti";
function Map() {
  return (
    <Container>
      <p>
        <TiMap /> Location
      </p>
      <Container>
        <Image src="./logo192.png" />
      </Container>
    </Container>
  );
}

export default Map;
