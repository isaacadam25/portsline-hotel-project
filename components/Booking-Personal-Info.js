import { Card, Row, Col, Form, Button } from "react-bootstrap";
import React from "react";

function BookingPersonalInfo({next, previous}) {
  
  return (
    <Row
      style={{
        backgroundColor: "",
        padding: "2% 10%",
        borderRadius: "30px",
        margin: 0,
      }}
    >
      <Card style={{ backgroundColor: "inherit", border: "none" }}>
        <Card.Title style={{ marginBottom: "3%" }}>Your Information</Card.Title>
        <Form>
          {/* Row-Personal Information Starts */}
          <Row>
            <Col md={6} xs={12} sm={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date </Form.Label>
                <Form.Control type="date" placeholder="select date" />
              </Form.Group> */}
            </Col>
            <Col md={6} xs={12} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>
          {/* Row-Personal Information Ends */}

          {/* Row-Address Information Starts */}
          <Card.Title style={{ marginBottom: "3%", marginTop: "3%" }}>
            Address Information
          </Card.Title>
          <Row>
            <Col md={6} xs={12} sm={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your city" />
              </Form.Group>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter your country" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{backgroundColor: "", paddingTop: '6%'}}
              >
                <Row style={{backgroundColor: "", margin: 0,}}>
                 <Col md={{offset: 0, span: 4}} xs={6} sm={12}>   
                <Button
                onClick={previous}
                  variant=""
                  type="submit"
                  style={{ backgroundColor: "lightgray", padding: '5px 25px' }}
                >
                  Previous
                </Button>
                </Col>
                 <Col md={{offset: 5, span: 2}} xs={{span:4, offset: 1}} sm={12}>   
                <Button
                onClick={next}
                  variant=""
                  type="submit"
                  style={{ backgroundColor: "lightgreen", padding: '5px 25px' }}
                >
                  Next
                </Button>
                </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          {/* Row-Address Information Ends */}
        </Form>
      </Card>
    </Row>
  );
}

export default BookingPersonalInfo;
