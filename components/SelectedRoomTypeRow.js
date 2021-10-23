import { Card, Row, Col, Button } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import double_bed from "../public/services/double-bed.svg";
import user from "../public/services/user.svg";

function SelectedRoomTypeRow({ room_type_name, number_of_adults, price }) {
  return (
    <Row
      style={{
        backgroundColor: "",
        padding: "2% 1%",
        borderRadius: "30px",
        backgroundColor: "lightgray",
        width: "100%",
        marginTop: "2%",
      }}
    >
      <Col xs={6} md={2} style={{ backgroundColor: "" }}>
        <Image
          src={Hotel}
          alt="Room image"
          width={100}
          height={100}
          className="room-type-image"
        />
      </Col>

      <Col
        xs={6}
        md={{ span: 2, offset: 0 }}
        style={{ paddingTop: "3%", backgroundColor: "" }}
      >
        {/* <Col style={{ paddingTop: "2%" }} xs={12} md={{ span: 4, offset: 1 }}> */}
        <Card.Title>{room_type_name}</Card.Title>
      </Col>

      <Col
        style={{ paddingTop: "3%", backgroundColor: "" }}
        xs={4}
        md={{ span: 2, offset: 0 }}
      >
        <Row style={{ backgroundColor: "" }}>
          <Col md={3} xs={4}>
            <Image
              src={user}
              alt="Room image"
              width={90}
              height={80}
              className="room-type-image"
            />
          </Col>
          <Col>
            <span style={{ paddingTop: "5%" }}>
              {number_of_adults} {number_of_adults > 1 ? "Adults" : "Adult"}
            </span>
          </Col>
        </Row>
      </Col>

      <Col
        md={{ span: 2 }}
        xs={8}
        style={{ paddingTop: "3%", backgroundColor: "" }}
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
      </Col>

      <Col
        style={{ paddingTop: "3%", backgroundColor: "" }}
        md={{ span: 2, offset: 2 }} xs={{span: 6, offset: 5}}
      >
        <Button
          variant=""
          type="submit"
          style={{
            backgroundColor: "red",
            padding: "5px 25px",
            width: "100%",
            border: "none",
            color: "white",
          }}
        >
          Delete
        </Button>
      </Col>
    </Row>
  );
}

export default SelectedRoomTypeRow;
