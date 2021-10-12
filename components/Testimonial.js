import React from 'react';
import Image from 'next/image';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import Hotel from '../public/hotel.jpg';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <Container fluid className="testimonial-section">
      <Row className="justify-content-center test-1">
        <Col md={12} xs={12} sm={12} className="testimonial-header">
          <h1>Testimonials</h1>
        </Col>
        <Col md={3} xs={12} sm={12}>
          <TestimonialCard />
        </Col>
        <Col md={3} xs={12} sm={12}>
          <TestimonialCard />
        </Col>
        <Col md={3} xs={12} sm={12}>
          <TestimonialCard />
        </Col>
        <Col md={3} xs={12} sm={12}>
          <TestimonialCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
