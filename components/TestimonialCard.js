import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";

const TestimonialCard = ({ data }) => {
  const {
    comment,
    author_image,
    customer_first_name,
    customer_last_name,
    author_title,
  } = data;
  const author_name = customer_first_name + "  " + customer_last_name;
  return (
    <div className="card testimonial-card">
      <div className="testimonial-image">
        <Image
          src={author_image ? author_image : Hotel}
          alt="Testimonial-Card-Image"
          width={100}
          height={100}
        />
      </div>
      <div className="testimonial-content">
        <div className="testimonial-message">
          <i className="fa fa-quote-left" />
          {comment}
          <i className="fa fa-quote-right" style={{ float: "right" }} />
        </div>
        <div className="author">
          <b>
            {author_name ? author_name : "Aika Magolo"},{" "}
            {author_title ? author_title : "Project Manager"}
          </b>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
