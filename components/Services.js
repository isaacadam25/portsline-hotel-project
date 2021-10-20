import React from "react";
import Carousel from "react-elastic-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import bed1 from "../public/services/bed1.svg";
import bed2 from "../public/services/bed2.svg";
import bed3 from "../public/services/bed-phone.svg";
import SpaceDiv from "./SpaceDiv";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const answers = [1, 2];

const serviceList = [];
for (let i = 1; i < 15; i++) {
  serviceList.push(
    <Image src={answers.includes(i % 2)? bed1 : bed2} alt="Service-Image" width={100} height={80} />
  );
}


const Services = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center services" >
        <Col xs={12} md={4}>
          <h2 className="services-header">Services</h2>
        </Col>
        <Col xs={12} md={10} style={{ paddingTop: "2%" }}>
          <Carousel
            disableArrowsOnEnd={false}
            enableAutoPlay={true}
            breakPoints={breakPoints}
            showArrows={false}
            isRTL={true}
            pagination={false}
          >
            {serviceList}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
