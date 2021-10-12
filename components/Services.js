import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center services">
        <Col xs={12} md={4}>
          <h2 className="services-header">Services</h2>
        </Col>
        <Col xs={12} md={12}>
          {/* <h1>Pictures</h1> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
