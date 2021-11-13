import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import TestimonialCard from "./TestimonialCard";
import Loader from "../components/Loader";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Testimonial({ testimonials }) {
  return (
    <Container fluid className="testimonial-section">
      <Row
        className="justify-content-center"
        style={{ width: "100%", backgroundColor: "", margin: 0 }}
      >
        <Col xs={12} md={4}>
          <h2 className="testimonial-header">Testimonials</h2>
        </Col>
        <Col md={12} xs={12} sm={12}>
          <Carousel enableAutoPlay={true} breakPoints={breakPoints}>
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} data={item} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}



