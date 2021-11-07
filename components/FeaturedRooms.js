import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RoomCard from "./RoomCard";

const FeaturedRooms = ({ room_types }) => {
  return (
    <Container>
      <Row className="justify-content-center featured-rooms">
        <Col xs={12} md={12} className="position-container">
          <h3>Featured Rooms</h3>
        </Col>
        {room_types.map((item) => (
          <Col className="room-card" xs={12} md={4} key={item.id}>
            <RoomCard roomTitle={item.type_name} roomPrice={item.room_price} />
            {/* <RoomCard roomTitle="Comfort Tripple Room" roomPrice="150,000" /> */}
          </Col>
        ))}
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
