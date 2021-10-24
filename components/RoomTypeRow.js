import { Card, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import double_bed from "../public/services/double-bed.svg";
import user from "../public/services/user.svg";

function RoomTypeRow({
  room_type_name,
  price,
  number_of_adults,
  number_of_beds,
  bed_type,
  room_description,
  next
}) {
  return (
    <Row
      style={{
        backgroundColor: "",
        padding: "2% 1%",
        borderRadius: "30px",
        backgroundColor: "",
        width: "100%",
        marginTop: "1%",
      }}
    >
      <Col xs={12} md={4}>
        <Image
          src={Hotel}
          alt="Room image"
          width={400}
          height={250}
          className="room-type-image"
        />
      </Col>
      <Col style={{ paddingTop: "2%" }} xs={12} md={{ span: 4, offset: 1 }}>
        <Card.Title>{room_type_name}</Card.Title>
        <Row>
          <Col style={{ display: "flex" }}>
            <Image
              src={user}
              alt="Room image"
              width={20}
              height={10}
              className="room-type-image"
            />
            <span style={{ padding: "6%" }}>{number_of_adults} Adults</span>
          </Col>
          <Col style={{ display: "flex", backgroundColor: "" }}>
            <Image
              src={double_bed}
              alt="Room image"
              width={30}
              height={30}
              className="room-type-image"
            />
            <span style={{ padding: "6%" }}>
              {number_of_beds} {bed_type}
            </span>
          </Col>
        </Row>
        <Row>
          <p style={{ padding: "2%" }}>{room_description}</p>
        </Row>
      </Col>
      <Col
        style={{ backgroundColor: "", alignItems: "center" }}
        md={{ span: 3 }}
        xs={12}
      >
        <Row
          style={{ justifyContent: "center", padding: "20% ", width: "100%" }}
        >
          <Card.Title
            style={{
              margin: 0,
              padding: 0,
              backgroundColor: "",
              textAlign: "center",
            }}
          >
            {price}/= Tsh
          </Card.Title>
          <div style={{ backgroundColor: "", height: "50px" }} />
          <Button
            onClick={next}
            variant=""
            type="submit"
            style={{
              backgroundColor: "lightgreen",
              padding: "5px 25px",
              width: "40%",
              border: "none",
            }}
          >
            Next
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default RoomTypeRow;
