import Layout from "../components/Layout";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SpaceDiv from "../components/SpaceDiv";
import BookingPersonalInfo from "../components/Booking-Personal-Info";
import RoomTypeRow from "../components/RoomTypeRow";
import InputWithIcon from "../components/InputWithIcon";
import SelectedRoomTypeRow from "../components/SelectedRoomTypeRow";
import Billing from "../components/Billing";
import PaymentInstructions from "../components/PaymentInstructions";
import MpesaLogo from "../public/paymentMethodsImages/tpesa.jpg";
import SuccessBookingInfo from "../components/SuccessBookingInfo";
import { Steps } from "antd";
import React, { useState } from "react";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0);
  const { Step } = Steps;

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const previous = () => {
    setCurrentStep(currentStep - 1);
  };

  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      price: 50000,
      number_of_beds: 2,
      bed_type: "Queen Size Bed",
      number_of_adults: 2,
      description:
        "Our Standard City View rooms - 33 m2 - offer a king size bed of 1.8x2m or 2 twin beds of 1.1x2m and a working desk as well as a seating area. The rooms are overlooking the vivid city centre.",
    },
    {
      id: 2,
      name: "Burget Room",
      price: 200000,
      number_of_beds: 1,
      bed_type: "King Size Bed",
      number_of_adults: 1,
      description:
        "Our Standard City View rooms - 33 m2 - offer a king size bed of 1.8x2m or 2 twin beds of 1.1x2m and a working desk as well as a seating area. The rooms are overlooking the vivid city centre.",
    },
    {
      id: 3,
      name: "VIP Room",
      price: 350000,
      number_of_beds: 3,
      bed_type: "Family Bed",
      number_of_adults: 6,
      description:
        "Our Standard City View rooms - 33 m2 - offer a king size bed of 1.8x2m or 2 twin beds of 1.1x2m and a working desk as well as a seating area. The rooms are overlooking the vivid city centre.",
    },
  ];

  const selectedRoomsTypesList = [
    { id: 1, name: "VIP Room", price: 350000, number_of_adults: 1 },
    { id: 2, name: "Standard Room", price: 300000, number_of_adults: 2 },
  ];

  const roomTypesList = roomTypes.map((item) => (
    <RoomTypeRow
      key={item.id}
      room_type_name={item.name}
      price={item.price}
      room_description={item.description}
      number_of_adults={item.number_of_adults}
      number_of_beds={item.number_of_beds}
      bed_type={item.bed_type}
      next={next}
    />
  ));

  const selectedRooms = selectedRoomsTypesList.map((item) => (
    <SelectedRoomTypeRow
      key={item.id}
      room_type_name={item.name}
      price={item.price}
      number_of_adults={item.number_of_adults}
    />
  ));

  const m_pesa_instructions = [
    "1. Dial *150*00# ok",
    "2. Select 1 Activate or 2 Wezesha",
    "3. Enter start key PIN",
    "4. Enter new PIN",
    "5. Re-enter new PIN",
    "6. Enter date of birth",
    "7. Go the calculator at the top of this page and make sure Tanzania is the chosen country",
    "8. We’ll send you and your recipient SMS and email notifications when the funds have been paid",
  ];

  // Prepare Contents Of Each Step
  const step_1_Contents = <BookingPersonalInfo next={next} />;
  const step_2_Contents = (
    <>
      <Row
        style={{
          backgroundColor: "lightgray",
          width: "100%",
          borderRadius: "10px",
          padding: "1%",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          style={{ backgroundColor: "" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Number of Residents</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              style={{ width: "150px" }}
            />
          </Form.Group>
        </Col>
        <Col
          xs={{ span: 10, offset: 2 }}
          md={{ span: 3, offset: 0 }}
          style={{ backgroundColor: "", paddingTop: "2%" }}
        >
          <InputWithIcon
            type="date"
            placeholder="Check in"
            fontAwesome="calendar"
          />
        </Col>
        <Col
          xs={{ span: 10, offset: 2 }}
          md={{ span: 3, offset: 0 }}
          style={{ backgroundColor: "", paddingTop: "2%" }}
        >
          <InputWithIcon
            type="date"
            placeholder="Check out"
            fontAwesome="calendar"
          />
        </Col>
      </Row>
      {roomTypesList}
      <Row>
        <Col md={4} xs={12} sm={12}>
          <Button
            onClick={previous}
            variant=""
            // type="submit"
            style={{ backgroundColor: "lightgray", padding: "5px 25px" }}
          >
            Previous
          </Button>
        </Col>
      </Row>
    </>
  );

  const step_3_Contents = (
    <>
      <Row>
        <Col md={{ span: 2, offset: 10 }} xs={{ span: 6, offset: 5 }} sm={12}>
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
            Add Room
          </Button>
        </Col>
      </Row>
      {selectedRooms}
      <Row style={{ paddingTop: "2%", backgroundColor: "" }}>
        <Col md={{ span: 2 }} xs={6} sm={12} style={{ paddingTop: "3%" }}>
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
          md={{ span: 2, offset: 8 }}
          xs={6}
          sm={12}
          style={{ paddingTop: "3%" }}
        >
          <Button
            onClick={next}
            variant=""
            style={{
              backgroundColor: "blue",
              padding: "5px 25px",
              width: "100%",
              border: "none",
              color: "white",
            }}
          >
            Confirm
          </Button>
        </Col>
      </Row>
    </>
  );

  const step_4_Contents = <Billing next={next} previous={previous} />;
  const step_5_Contents = (
    <PaymentInstructions
      payment_method="M-Pesa"
      method_logo={MpesaLogo}
      instruction_array={m_pesa_instructions}
      next={next}
      previous={previous}
    />
  );
  const step_6_Contents = <SuccessBookingInfo next={next} previous={previous}/>;

  const stepsArray = [
    { title: "Personal Information", content: step_1_Contents },
    { title: "Select Room", content: step_2_Contents },
    { title: "Confirm Room", content: step_3_Contents },
    { title: "Billing", content: step_4_Contents },
    { title: "Payment", content: step_5_Contents },
    { title: "Finish", content: step_6_Contents },
  ];

  const stepsList = stepsArray.map((item) => (
    <Step key={item.title} title={item.title} />
  ));

  return (
    <Layout title="Booking">
      <Row
        className="contents-parent"
        style={{
          width: "100%",
          backgroundColor: "",
          margin: 0,
          justifyContent: "center",
        }}
      >
        {/* Booking Contents Start */}

        {/* Step-1: Personal Info starts*/}
        {/* Step-1: Personal Info ends */}

        {/* Step-2: Room-Type Selection starts */}
        {/* Step-2: Room-Type Selection ends */}

        {/* Step-3: Room-Selection Confirmation starts */}
        {/* Step-3: Room-Selection Confirmation ends */}

        {/* Step-4: Billing starts */}
        {/* Step-4: Billing ends */}

        {/* Step-5: Payment-Instructions start */}
        {/* Step-5: Payment-Instructions end */}

        {/* Step-6: Success Payment Info starts */}
        {/* Step-6: Success Payment Info ends */}
        <Steps
          current={currentStep}
          style={{ backgroundColor: "", paddingBottom: "4%" }}
        >
          {stepsList}
        </Steps>
        {stepsArray[currentStep].content}
        {/* Booking Contents End */}
      </Row>

      <SpaceDiv />
    </Layout>
  );
}
