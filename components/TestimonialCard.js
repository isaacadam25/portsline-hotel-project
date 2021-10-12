import React from 'react';
import Image from 'next/image';
import Hotel from '../public/hotel.jpg';

const TestimonialCard = () => {
  return (
    <div className="card testimonial-card">
      <div className="testimonial-image">
        <Image
          src={Hotel}
          alt="Testimonial-Card-Image"
          width={100}
          height={100}
        />
      </div>
      <div className="testimonial-content">
        <div className="testimonial-message">
          <i className="fa fa-quote-left" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit
          nam officia, vitae blanditiis similique perferendis iure neque aut
          nesciunt.
        </div>
        <div className="author">
          <b>Aika Magolo, Project Manager</b>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
