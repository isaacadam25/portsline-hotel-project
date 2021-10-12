import React from 'react';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import Hotel from '../public/hotel.jpg';

const RoomCard = ({ roomTitle }) => {
  return (
    <Card className="bg-dark text-white">
      <Image src={Hotel} alt="Card image" width={300} height={250} />
      <Card.ImgOverlay>
        <div className="room-price">
          <span>$85</span> Book Now
        </div>
        <div className="card-title h6">{roomTitle}</div>
        <a href="#">View More</a>
      </Card.ImgOverlay>
    </Card>
  );
};

export default RoomCard;
