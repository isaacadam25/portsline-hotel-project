import { Card, Row, Table, Col } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import Airtel from "../public/paymentMethodsImages/airtel-money.png";
import Tigopesa from "../public/paymentMethodsImages/tigo-pesa.png";
function Billing({
  room_type_name,
  price,
  number_of_adults,
  number_of_beds,
  bed_type,
  room_description,
}) {
  return (
    <Row
      style={{
        backgroundColor: "",
        padding: "2% 1%",
        width: "100%",
        marginTop: "1%",
        textAlign: "center",
      }}
    >
      <Card.Title>Billing </Card.Title>

      <Table striped bordered hover>
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
      <Card.Title>Payment Method </Card.Title>
      <Row
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#f3f3f4",
          padding: "2%",
          margin: 0,
          borderRadius: "15px",
        }}
      >
        <Col>
          <Image src={Airtel} width={50} height={50} alt="Airtel Image" />
        </Col>
        <Col>
          <Image src={Tigopesa} width={100} height={100} alt="Tigopesa Image" />
        </Col>
        <Col>
          <Image src={Airtel} width={50} height={50} alt="Airtel Image" />
        </Col>
        <Col>
          <Image src={Tigopesa} width={100} height={100} alt="Tigopesa Image" />
        </Col>
        <Col>
          <Image src={Airtel} width={50} height={50} alt="Airtel Image" />
        </Col>
        <Col>
          <Image src={Tigopesa} width={100} height={100} alt="Tigopesa Image" />
        </Col>
      </Row>
    </Row>
  );
}

export default Billing;
