import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RoomCard from './RoomCard';

const FeaturedRooms = ({ room_types }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row className="justify-content-center featured-rooms">
        <Col xs={12} md={12} className="position-container">
          <h3>Featured Rooms</h3>
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Comfort Tripple Room" roomPrice="150,000" />
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Business Twin Room" roomPrice="100,000" />
        </Col>
        <Col className="room-card" xs={12} md={4}>
          <RoomCard roomTitle="Standard Twin Room" roomPrice="250,000" />
        </Col>
        {show ? (
          <>
            <Col className="room-card" xs={12} md={4}>
              <RoomCard roomTitle="Standard Twin Room" roomPrice="250,000" />
            </Col>
            <Col className="room-card" xs={12} md={4}>
              <RoomCard roomTitle="Standard Twin Room" roomPrice="250,000" />
            </Col>
            <Col className="room-card" xs={12} md={4}>
              <RoomCard roomTitle="Standard Twin Room" roomPrice="250,000" />
            </Col>
          </>
        ) : null}
        {room_types.map((item) => (
          <Col className="room-card" xs={12} md={4} key={item.id}>
            <RoomCard
              roomTitle={item.type_name}
              roomPrice={item.room_price}
              roomTypeId={item.id}
            />
            {/* <RoomCard roomTitle="Comfort Tripple Room" roomPrice="150,000" /> */}
          </Col>
        ))}
        <Col className="room-card" xs={12} md={12}>
          {!show ? (
            <a onClick={() => setShow(true)} className="scroll-button">
              <i className="fa fa-chevron-down" />
            </a>
          ) : (
            <a onClick={() => setShow(false)} className="scroll-button">
              <i className="fa fa-chevron-up" />
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedRooms;
