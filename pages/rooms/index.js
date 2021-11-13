import { Col, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import RoomCard from "../../components/RoomCard";
import SpaceDiv from "../../components/SpaceDiv";
import { getAllRoomTypes } from "../api/api";

export default function Rooms({room_types}) {
  // const rooms = [
  //   { id: 0, name: "Comfort Tripple Room", price: "150,000/=" },
  //   { id: 1, name: "Comfort Tripple Room", price: "200,000/=" },
  //   { id: 2, name: "Comfort Tripple Room", price: "250,000/=" },
  //   { id: 3, name: "Comfort Tripple Room", price: "300,000/=" },
  //   { id: 4, name: "Comfort Tripple Room", price: "350,000/=" },
  //   { id: 5, name: "Standard Twin Room", price: "400,000/=" },
  //   { id: 6, name: "Business Twin Room", price: "450,000/=" },
  // ];

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
        {room_types.map((room) => (
          <Col
            className="room-card"
            xs={12}
            md={{ span: 4, offset: 0 }}
            key={room.id}
          >
            <RoomCard
              roomTitle={room.type_name}
              roomPrice={room.room_price}
              roomTypeId={room.id}
            />
          </Col>
        ))}
      </Row>
      <SpaceDiv />
    </Layout>
  );
}

export async function getStaticProps() {
  const room_types = await getAllRoomTypes();

  return {
    props: {
      room_types,
    },
  };
}
