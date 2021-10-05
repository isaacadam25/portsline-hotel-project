import React from 'react';
import Image from 'next/image';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import Hotel from '../public/hotel.jpg';

const Testimonial = () => {
  return (
    <Container fluid className="testimonial-section">
      <Row className="justify-content-center">
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={4}>
                  <Image
                    width={100}
                    height={100}
                    src={Hotel}
                    alt="First slide"
                  />
                </Col>
                <Col md={4}>
                  <Image
                    width={100}
                    height={100}
                    src={Hotel}
                    alt="First slide"
                  />
                </Col>
                <Col md={4}>
                  <Image
                    width={100}
                    height={100}
                    src={Hotel}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Image
                    width={100}
                    height={100}
                    src={Hotel}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Image
                    width={100}
                    height={100}
                    src={Hotel}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
