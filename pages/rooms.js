import Banner from "../components/Banner";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import { Col, Row } from "react-bootstrap";

export default function Rooms() {
  const rooms = [
    { id: 0, name: "Comfort Tripple Room", price: "150,000/=" },
    { id: 1, name: "Comfort Tripple Room", price: "200,000/=" },
    { id: 2, name: "Comfort Tripple Room", price: "250,000/=" },
    { id: 3, name: "Comfort Tripple Room", price: "300,000/=" },
    { id: 4, name: "Comfort Tripple Room", price: "350,000/=" },
    { id: 5, name: "Standard Twin Room", price: "400,000/=" },
    { id: 6, name: "Business Twin Room", price: "450,000/=" },
  ];

  return (
    <Layout title="Rooms">
      <Banner title="Rooms" />

      <Row
        className="featured-rooms"
        style={{
          backgroundColor: "",
          margin: 0,
          padding: "5% ",
        }}
      >
        {rooms.map((room) => (
          <Col
            className="room-card"
            xs={12}
            md={{ span: 4, offset: 0 }}
            key={room.id}
          >
            <RoomCard roomTitle={room.name} roomPrice={room.price} />
          </Col>
        ))}
      </Row>
      <Col
        md={{ span: 0, offset: 0 }}
        xs={{ span: 12, offset: 0 }}
        sm={{ span: 12, offset: 0 }}
      >
        <div style={{ backgroundColor: "", height: "70px" }}></div>
      </Col>
    </Layout>
  );
}
