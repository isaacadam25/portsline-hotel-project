import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RoomCard from './RoomCard';

const FeaturedRooms = () => {
  return (
    <Container>
      <Row className="justify-content-center featured-rooms">
        <Col xs={12} md={12}>
          <h3>Featured Rooms</h3>
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Comfort Tripple Room" />
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Business Twin Room" />
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Standard Twin Room" />
        </Col>
        <Col className="room-card" xs={12} md={12}>
          <a className="scroll-button" href="#">
            <i className="fa fa-chevron-down" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedRooms;
