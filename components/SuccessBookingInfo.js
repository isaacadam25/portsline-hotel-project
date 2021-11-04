import { Card, Row, Col, Form, Button, Table } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PortslineLogo from "../public/logo/pl_min_logo-01.png";

function SuccessBookingInfo({ next, previous }) {
  return (
    <Row
      style={{
        backgroundColor: "",
        padding: "2% 1%",
        // borderRadius: "30px",
        width: "100%",
        marginTop: "1%",
      }}
    >
      <Col
        md={6}
        xs={12}
        sm={12}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "",
        }}
      >
        <Card.Text>
          Thank you for Booking with Portsline Hotel and Spa. Your reservation
          details have been sent to your emaill.
        </Card.Text>
        <Card.Text>Please Contact us for more information</Card.Text>
        <Table striped bordered hover style={{ marginTop: "5%" }}>
          {/* <thead>
          <tr>
            <th>S/No</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <td>1</td>
              <td>Standard Room</td>
              <td>250000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Budget Room</td>
              <td>300000</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>550000</td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col
            md={{ span: 3, offset: 0 }}
            xs={{ span: 4, offset: 0 }}
            sm={12}
            style={{ marginTop: "5%" }}
          >
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
            md={{ span: 3, offset: 6 }}
            xs={{ span: 4, offset: 4 }}
            sm={12}
            style={{ marginTop: "5%" }}
          >
            <Link href="/" passHref>
              <Button
                variant=""
                style={{
                  backgroundColor: "green",
                  padding: "5px 25px",
                  width: "100%",
                  border: "none",
                  color: "white",
                }}
              >
                Finish
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col
        md={{ span: 3, offset: 3 }}
        xs={{ span: 10, offset: 1 }}
        sm={12}
        style={{
          //   margin: 0,
          //   padding: 0,
          marginTop: "5%",
          backgroundColor: "",
        }}
      >
        {" "}
        <Image
          src={PortslineLogo}
          alt="Ports-line-Logo"
          width={500}
          height={200}
          //   className="room-type-image"
        />
      </Col>
    </Row>
  );
}

export default SuccessBookingInfo;
