import React from "react";
import Image from "next/image";
import { Col, Button, Row, Card } from "react-bootstrap";

const MenuCard = ({ title, subTitle, description, pic }) => {
  return (
    <Col md={{ span: 4 }} xs={{ span: 12 }}>
      <Card
        className="shadowCard"
        style={{ width: "100%", border: "none", marginBottom: "10%" }}
      >
        <Image src={pic} width={300} height={200} alt="Menu-Image" />
        <Card.Body>
          <h3 style={{ color: "gray" }}>{title}</h3>
          <Card.Title style={{ color: "darkblue" }}>{subTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <button style={{ backgroundColor: "white" }}>Read more...</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuCard;
