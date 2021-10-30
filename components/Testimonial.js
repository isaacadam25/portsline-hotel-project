import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import TestimonialCard from './TestimonialCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Testimonial = () => {
  return (
    <Container fluid className="testimonial-section">
      <Row className="justify-content-center" style={{ width: "100%", backgroundColor: "", margin: 0}}>
        <Col xs={12} md={4}>
          <h2 className="testimonial-header">Testimonials</h2>
        </Col>
        <Col md={12} xs={12} sm={12}>
          <Carousel enableAutoPlay={true} breakPoints={breakPoints}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
