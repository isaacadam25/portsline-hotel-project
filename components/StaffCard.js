import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import { Col, Container, Row, Card } from "react-bootstrap";
import StaffImage from "../public/images/staffImage.jpeg";

const StaffCard = ({ full_name, title, description, photo }) => {
  return (
    <Col
      style={{
        backgroundColor: "",
        padding: 0,
        marginBottom: "4%",
        textAlign: "center",
        margin: 0,
      }}
      md={{ span: 4 }}
      xs={{ span: 12, offset: 0 }}
      sm={{ span: 10, offset: 2 }}
    >
      <Image
        src={photo ? photo : StaffImage}
        alt="Room Image"
        width={200}
        height={200}
        className="staff-image"
      />
      <h3>{full_name}</h3>
      <h6>{title}</h6>
      <p className="staff-text" style={{ padding: "0 20%" }}>
        {description}
      </p>
    </Col>
  );
};

export default StaffCard;
