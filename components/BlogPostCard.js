import React from "react";
import Image from "next/image";
import Hotel from "../images/room1.jpg";
import { Col, Button, Row, Card } from "react-bootstrap";

const BlogPostCard = ({ title, subTitle, description }) => {
  return (
    <Col md={{ span: 4 }} xs={{ span: 12 }}>
      <Card
        style={{ width: "100%", border: "2px solid gray", marginBottom: "10%" }}
      >
        <Image src={Hotel} width={300} height={200} />
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

export default BlogPostCard;