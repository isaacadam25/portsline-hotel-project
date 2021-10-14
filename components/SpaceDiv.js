import { Card, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";

function SpaceDiv() {
  return (
    <Row style={{ width: "100%", backgroundColor: "", margin: 0 }}>
      <Col
        md={{ span: 0, offset: 0 }}
        xs={{ span: 12, offset: 0 }}
        sm={{ span: 12, offset: 0 }}
      >
        <div style={{ backgroundColor: "", height: "70px" }}></div>
      </Col>
    </Row>
  );
}

export default SpaceDiv;
