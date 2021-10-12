import React from "react";
import Image from "next/image";
import { Card, Row, Col } from "react-bootstrap";
import Hotel from "../public/hotel.jpg";

const RoomCard = ({ roomTitle, roomPrice }) => {
  return (
    <Card className="bg-dark text-white">
      <Image src={Hotel} alt="Card image" width={300} height={300} />
      <Card.ImgOverlay>
        <div className="room-price">
          <span>$85</span> Book Now
        </div>
        <Row>
          <Col>
            <div className="card-title h6">{roomTitle}</div>
          </Col>
          <Col className="d-none d-lg-block">
            <div className="room-price-div">{roomPrice} Tsh</div>
          </Col>
        </Row>
        <a href="#">View More</a>
      </Card.ImgOverlay>
    </Card>
  );
};

export default RoomCard;
