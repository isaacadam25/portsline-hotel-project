import { Card, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import double_bed from "../public/services/double-bed.svg";
import user from "../public/services/user.svg";

function PaymentInstructions({
  payment_method,
  method_logo,
  instruction_array,next, previous
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
      <Card.Title style={{ textAlign: "center", paddingBottom: "4%" }}>
        Payment Instructions Via <b>{payment_method}</b>
      </Card.Title>
      {/* Logo-Row Starts */}
      <Row style={{ backgroundColor: "", paddingBottom: "4%", width: "100%" }}>
        <Col md={{ span: 2, offset: 4 }} xs={{ span: 4, offset: 1 }}>
          <Image
            src={method_logo}
            alt="Payment Method Logo"
            width={130}
            height={90}
            className="room-type-image"
          />
        </Col>
        <Col style={{ paddingTop: "3%" }}>
          <Card.Title>Steps to follow</Card.Title>
        </Col>
      </Row>
      {/* Logo-Row ends */}
      {/* Instructions-Row starts */}
      <Row style={{ backgroundColor: "", placeItems: "center", width: "100%" }}>
        {instruction_array.map((item) => (
          <Col
            key={item}
            md={{ span: 7, offset: 4 }}
            xs={{ span: 11, offset: 1 }}
          >
            <span>{item}</span>
          </Col>
        ))}
      </Row>
      <Col md={{ span: 2, offset: 4 }} xs={6} sm={12} style={{ paddingTop: "3%" }}>
        <Button
          onClick={previous}
          variant=""
          style={{
            backgroundColor: "gray",
            padding: "5px 25px",
            width: "100%",
            border: "none",
            color: "white",
          }}
        >
          Previous
        </Button>
      </Col>
      <Col
        style={{ paddingTop: "3%", backgroundColor: "" }}
        md={{ span: 2, offset: 2 }}
        xs={{ span: 6, }}
      >
        <Button
          onClick={next}
          variant=""
          type="submit"
          style={{
            backgroundColor: "green",
            padding: "5px 25px",
            width: "100%",
            border: "none",
            color: "white",
          }}
        >
          Next
        </Button>
      </Col>
      {/* Instructions-Row ends */}
    </Row>
  );
}

export default PaymentInstructions;
