import Banner from "../components/Banner";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Image from "next/image";
import RoomImage2 from "../images/room2.jpg";
import RoomImage from "../images/room1.jpg";

export default function Gallery() {
  const images = [];

  for (let i = 0; i < 20; i++) {
    images.push({ id: i, imageFile: RoomImage, text: `Gallery Image-${i}` });
  }

  return (
    <Layout title="Gallery">
      <Banner title="Gallery" />
      <Row
        style={{ width: "100%", backgroundColor: "", margin: 0, padding: "5%" }}
      >
        {images.map((obj) => (
          <Col md={3} key={obj.id}>
            <Image
              src={obj.imageFile}
              alt={obj.text}
              width={300}
              height={300}
              className="gallery-images"
            />
          </Col>
        ))}
        <Row style={{ padding: "0 43%" }}>
          <Col
            className="room-card"
            xs={12}
            md={12}
            style={{ justifyContent: "center" }}
          >
            <a className="scroll-button" href="#">
              <i className="fa fa-chevron-down" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 0, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
          >
            <div style={{ backgroundColor: "", height: "70px" }}></div>
          </Col>
        </Row>
      </Row>{" "}
    </Layout>
  );
}
