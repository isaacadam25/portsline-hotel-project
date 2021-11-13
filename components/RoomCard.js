import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Row, Col } from 'react-bootstrap';
import Hotel from '../public/hotel.jpg';

const RoomCard = ({ roomTitle, roomPrice }) => {
  return (
    <Card
      className="bg-dark text-white"
      style={{ border: 'none', boxShadow: '0px 5px 20px 1px lightgray' }}
    >
      <Image src={Hotel} alt="Card image" width={300} height={300} />
      <Card.ImgOverlay>
        <div className="room-price">
          <span>$85</span> Book Now
        </div>
        <Row>
          <Col>
            <div className="card-title h6">{roomTitle}</div>
          </Col>
          <Col className="">
            <div className="room-price-div">
              <p className="tsh-price">
                {roomPrice} <span>Tsh</span>
              </p>
            </div>
          </Col>
        </Row>
        <Link href="/rooms/200" passHref>
          <a href="#">View More</a>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default RoomCard;
