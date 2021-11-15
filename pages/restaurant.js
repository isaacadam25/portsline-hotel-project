import Banner from '../components/Banner';
import React, { useState } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import MenuCard from "../components/MenuCard";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import chicken from "../public/images/grilled.jpg";
import beef from "../public/images/roast-beef.jpg";
import mshkaki from "../public/images/mishkaki.jpg";
import SpaceDiv from "../components/SpaceDiv";

export default function Restaurant() {
  const table_booking_info = {
    full_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    comment: "",
  };

  const menus = [];
  const answers = [1, 2, 3, 4];

  const [tableForm, setTableForm] = useState(table_booking_info);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const handleTableBookingForm = (e) => {
    setFormErrorMessage("");
    const { name, value } = e.target;
    setTableForm({ ...tableForm, [name]: value });
  };

  const validateTableBookingForm = () => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailResult = re.test(tableForm.email);
    if (!tableForm.full_name) {
      setFormErrorMessage("Enter Full Name");
      return false;
    } else if (!tableForm.email) {
      setFormErrorMessage("Enter Email Address");
      return false;
    } else if (!emailResult) {
      setFormErrorMessage("Enter a valid email");
      return false;
    } else if (!tableForm.date) {
      setFormErrorMessage("Select date");
      return false;
    } else if (!tableForm.time) {
      setFormErrorMessage("Select reporting time");
      return false;
    } else if (!tableForm.guests) {
      setFormErrorMessage("Enter number of guests");
      return false;
    } else if (!tableForm.phone) {
      setFormErrorMessage("Enter phone number");
      return false;
    } else if (!tableForm.comment) {
      setFormErrorMessage("Enter comments/booking details");
      return false;
    } else {
      setFormErrorMessage("");
      return true;
    }
  };

  const onFinish = (e) => {
    e.preventDefault();
    const isFormValid = validateTableBookingForm();
    if (isFormValid) {
      console.log("Table Booking Form Is Valid", tableForm);
      setTableForm(table_booking_info);
    } else {
      console.log("Table Booking Form Is Not Valid");
    }
  };

  for (let i = 1; i < 7; i++) {
    menus.push(
      <MenuCard
        title="Menu"
        subTitle="Awesome Food"
        description="Check out our new menu with the 
            special dessert ,free delivery 
            is now available."
        pic={answers.includes(i / 2) ? mshkaki : beef}
      />
    );
  }

  return (
    <Layout title="Restaurant">
      <Banner title="Restaurant" />

      {/* Menu Contents Start */}
      <Row
        className="contents-parent"
        style={{ width: '100%', backgroundColor: '', margin: 0 }}
      >
        <Row
          style={{
            backgroundColor: '',
            height: '50vh',
            margin: '0 0 5% 0',
            padding: 0,
          }}
        >
          <div className="restaurant-first-row">
            <Row style={{ width: '100%', margin: 0, padding: 0 }}>
              <Card style={{ padding: '2%' }}>
                <Card.Title
                  style={{ fontWeight: 600 }}
                  className="restaurant-text"
                >
                  FOOD AND MEALS
                </Card.Title>
                <Card.Text className="restaurant-text">
                  Ports Line Hotel & Spa gives attention in choice of genuine,
                  local as well as international ingredients, culinary abilities
                  of our chefs, exemplary service and cozy restaurant ambience
                  that will delight your appetite.
                </Card.Text>
              </Card>
            </Row>
          </div>
        </Row>

        <Row
          style={{
            width: '100%',
            backgroundColor: '',
            margin: 0,
            padding: 0,
          }}
        >
          {menus}
        </Row>

        <Row
          style={{
            backgroundColor: 'lightgray',
            padding: '5% 10%',
            borderRadius: '30px',
            margin: 0,
          }}
        >
          {/* <Col md={6} xs={12} sm={12}> */}
          <Card style={{ backgroundColor: 'inherit', border: 'none' }}>
            <Card.Title
              className="restaurant-text"
              style={{ marginBottom: '3%', fontWeight: 600 }}
            >
              Book a Table
            </Card.Title>
            <Form>
              <Row>
                <Col md={6} xs={12} sm={12}>
                  <Form.Group
                    className="mb-3 restaurant-text"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      name="full_name"
                      value={tableForm.full_name}
                      onChange={handleTableBookingForm}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 restaurant-text"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={tableForm.email}
                      onChange={handleTableBookingForm}
                    />
                  </Form.Group>
<<<<<<< HEAD
                  <Form.Group
                    className="mb-3 restaurant-text"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Phone </Form.Label>
=======
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date </Form.Label>
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a
                    <Form.Control
                      type="date"
                      placeholder="select date"
                      name="date"
                      value={tableForm.date}
                      onChange={handleTableBookingForm}
                    />
                  </Form.Group>
<<<<<<< HEAD
                  <Form.Group
                    className="mb-3 restaurant-text"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Date </Form.Label>
                    <Form.Control type="date" placeholder="select date" />
=======
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Time </Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="Enter arrival time"
                      name="time"
                      value={tableForm.time}
                      onChange={handleTableBookingForm}
                    />
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a
                  </Form.Group>
                </Col>
                <Col md={6} xs={12} sm={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Guests </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter number of guests"
                      name="guests"
                      value={tableForm.guests}
                      onChange={handleTableBookingForm}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter phone number"
                      name="phone"
                      value={tableForm.phone}
                      onChange={handleTableBookingForm}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 restaurant-text"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="enter description if any"
                      rows={3}
<<<<<<< HEAD
                      style={{ height: '36vh' }}
=======
                      style={{ height: "16vh" }}
                      name="comment"
                      value={tableForm.comment}
                      onChange={handleTableBookingForm}
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
<<<<<<< HEAD
                <Col md={12}>
                  <Button
                    variant=""
                    type="submit"
                    className="restaurant-button float-end"
                    style={{ backgroundColor: 'blue' }}
=======
                <Col md={2}>
                  <Button
                    variant=""
                    type="button"
                    style={{ backgroundColor: "blue" }}
                    onClick={onFinish}
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
              <Row>
                <span
                  hidden={!formErrorMessage}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    width: "60%",
                    padding: "2%",
                    marginLeft: "20%",
                  }}
                >
                  {formErrorMessage}
                </span>
              </Row>
            </Form>
          </Card>
          {/* </Col> */}
        </Row>
      </Row>
      {/* Menu Contents End */}

      <SpaceDiv />
    </Layout>
  );
}
