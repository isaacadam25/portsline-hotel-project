import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Container, Row, Col } from 'react-bootstrap';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const Services = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center services">
        <Col xs={12} md={4}>
          <h2 className="services-header">Services</h2>
        </Col>
        <Col xs={12} md={10}>
          <Carousel
            disableArrowsOnEnd={false}
            enableAutoPlay={true}
            breakPoints={breakPoints}
            showArrows={false}
            isRTL={true}
            pagination={false}
          >
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
            <h1>Pictures</h1>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
