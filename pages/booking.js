import Layout from "../components/Layout";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SpaceDiv from "../components/SpaceDiv";
import BookingPersonalInfo from "../components/Booking-Personal-Info";
import RoomTypeRow from "../components/RoomTypeRow";
import InputWithIcon from "../components/InputWithIcon";
import SelectedRoomTypeRow from "../components/SelectedRoomTypeRow";
import Billing from "../components/Billing";

export default function Booking() {
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
        {/* <BookingPersonalInfo /> */}
        {/* Step-1: Personal Info ends */}

        {/* Step-2: Room-Type Selection starts */}
        {/* <Row
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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
        {roomTypesList} */}
        {/* Step-2: Room-Type Selection ends */}

        {/* Step-3: Room-Selection Confirmation starts */}
        {/* <Row>
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
        <Row style={{ paddingTop: "2%" }}>
          <Col md={{ span: 2, offset: 10 }} xs={12} sm={12}>
            <Button
              variant=""
              style={{
                backgroundColor: "blue",
                padding: "5px 25px",
                width: "100%",
                border: "none",
                color: "white",
              }}
            >
              Confirm Room
            </Button>
          </Col>
        </Row> */}
        {/* Step-3: Room-Selection Confirmation ends */}

        {/* Step-4: Billing starts */}
        <Billing />
        {/* Step-4: Billing ends */}

        {/* Booking Contents End */}
      </Row>

      <SpaceDiv />
    </Layout>
  );
}
