import React from "react";
import Image from "next/image";
import Hotel from "../images/room1.jpg";
import { Col, Container, Row, Card } from "react-bootstrap";

const Banner = ({ title }) => {
  return (
    <Container fluid>
      <Row>
        <Col style={{ padding: 0 }} xs={12} sm={12} md={12}>
          <Card
            style={{ border: 0, height: "30vh" }}
            className="bg-dark text-white"
          >
            <Image src={Hotel} alt="Banner Image" width={400} height={300} />
            <Card.ImgOverlay className="banner-text">
              <h3 style={{ color: "white" }}>{title}</h3>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
