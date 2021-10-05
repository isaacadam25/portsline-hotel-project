import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Hotel from '../public/hotel.jpg';

const TestimonialCard = () => {
  return (
    <Card className="bg-dark text-white">
      <Image src={Hotel} alt="Card image" width={60} height={250} />
      <Card.ImgOverlay>
        <div className="room-price">
          <span>$85</span> Book Now
        </div>
        <div className="card-title h6">Card Here</div>
        <a href="#">View More</a>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TestimonialCard;
