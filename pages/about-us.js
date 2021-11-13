import TopNav from "../components/TopNav";
import NavigationBar from "../components/NavigationBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Card, Row, Col } from "react-bootstrap";
import RoomImage from "../public/images/acc1.jpg";
import RoomImage2 from "../public/images/room2.jpg";
import Image from "next/image";
import StaffCard from "../components/StaffCard";
import SpaceDiv from "../components/SpaceDiv";
import { getAllStaff } from "./api/api";

export default function AboutUs({ data }) {
  const staffs = data;
  // console.log("Staffs => > > ", data);

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <TopNav />
      <NavigationBar />
      <Banner title="About Us" />

      {/*  About-Us contents start */}

      <Row className="contents-parent" style={{ width: "100%", margin: 0 }}>
        {/* First Row Starts */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: "0", margin: 0 }}
            md={6}
            xs={12}
            sm={{ span: 11, offset: 1 }}
          >
            <h3>Our Hotel</h3>
            <div className="title-under-line" /> <br />
            <p>
              Ports Line Hotel and Spa is home to high standard contemporary
              style accommodation with complementary amenity packs of uniquely
              and elegantly furnished rooms, luxury ensuite facilities, LCD TV,
              Wi-Fi, Air conditioned rooms, windows that boast the cit
            </p>
            <p>
              Ports Line Hotel and Spa is home to high standard contemporary
              style accommodation with complementary amenity packs of uniquely
              and elegantly rooms, windows that boast the cit
            </p>
          </Col>

          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 5, offset: 1 }}
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 2 }}
          >
            <div style={{ backgroundColor: "" }}>
              <Image
                src={RoomImage}
                alt="Room Image"
                width={500}
                height={300}
                className="about-us-image"
              />
            </div>
          </Col>
        </Row>
        {/* First Row Ends */}

        {/* Horizontal Line */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 1 }}
          >
            <div className="row-divider" />
          </Col>
        </Row>

        {/* Second Row Starts */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0, marginBottom: "4%" }}
            md={{ span: 5, offset: 0, order: 1 }}
            xs={{ span: 12, offset: 0, order: 2 }}
            sm={{ span: 10, offset: 2, order: 2 }}
          >
            <div style={{ backgroundColor: "", border: 0 }}>
              <Image
                src={RoomImage2}
                alt="Room Image"
                width={500}
                height={300}
                className="about-us-image"
              />
            </div>
          </Col>

          <Col md={{ order: 2 }}></Col>
          <Col
            style={{ backgroundColor: "", padding: "0", margin: 0 }}
            md={{ span: 6, offset: 0, order: 3 }}
            xs={{ span: 12, offset: 0, order: 1 }}
            sm={{ span: 11, offset: 1, order: 1 }}
          >
            <h3>Why Us</h3>
            <div className="title-under-line" /> <br />
            <p>
              For either business events or social events, Ports Line Hotel &
              Spa presents 6 x up to 400 people capacity social halls ideal for
              conferences, memorable weddings, social gatherings and picturesque
              celebrations. Guests can relax and enjoy a rejuvenating holistic
              Thai treatment at the spa facility, reinvigorate at the avantgarde
              fitness center,
            </p>
          </Col>
        </Row>
        {/* Second Row Ends */}

        {/* Horizontal Line */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 1 }}
          >
            <div className="row-divider" />
          </Col>
        </Row>

        {/* Third Row Starts */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: "0", margin: 0 }}
            md={5}
            xs={12}
            sm={{ span: 11, offset: 1 }}
          >
            <h3>Our Mission</h3>
            <div className="title-under-line" /> <br />
            <p>
              To commit and practice hospitality which is embedded in soul and
              mind and maintaining exceptional customer experience Ports Line
              Hotel & Spa.
            </p>
          </Col>

          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 6, offset: 1 }}
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 2 }}
          >
            <div style={{ backgroundColor: "", border: 0 }}>
              <Image
                src={RoomImage}
                alt="Room Image"
                width={600}
                height={300}
                className="about-us-image"
              />
            </div>
          </Col>
        </Row>
        {/* Third Row Ends */}

        {/* Horizontal Line */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 1 }}
          >
            <div className="row-divider" />
          </Col>
        </Row>

        {/* Fourth Row Starts */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0, marginBottom: "4%" }}
            md={{ span: 4, offset: 0, order: 1 }}
            xs={{ span: 12, offset: 0, order: 2 }}
            sm={{ span: 10, offset: 2, order: 2 }}
          >
            <div style={{ backgroundColor: "", border: 0 }}>
              <Image
                src={RoomImage2}
                alt="Room Image"
                width={500}
                height={300}
                className="about-us-image"
              />
            </div>
          </Col>

          <Col md={{ order: 2 }}></Col>
          <Col
            style={{ backgroundColor: "", padding: "0", margin: 0 }}
            md={{ span: 7, offset: 0, order: 3 }}
            xs={{ span: 12, offset: 0, order: 1 }}
            sm={{ span: 11, offset: 1, order: 1 }}
          >
            <h3>Our Vision</h3>
            <div className="title-under-line" /> <br />
            <p>
              To ensure significant contribution in the hospitality in Tanzania.
            </p>
          </Col>
        </Row>
        {/* Fourth Row Ends */}

        {/* Horizontal Line */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <Col
            style={{ backgroundColor: "", padding: 0 }}
            md={{ span: 12, offset: 0 }}
            sm={{ span: 10, offset: 1 }}
          >
            <div className="row-divider" />
          </Col>
        </Row>

        {/* Staffs Row Starts */}
        <Row
          style={{ backgroundColor: "", padding: 0, width: "100%", margin: 0 }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "",
              textAlign: "center",
              placeItems: "center",
            }}
          >
            <h3>OUR STAFF</h3>
            <div className="title-under-line-center" /> <br />
          </div>
          {staffs.map((staff) => (
            <StaffCard
              key={staff.id}
              photo={staff.profile_image}
              full_name={staff.first_name + ' ' + staff.last_name}
              title={staff.employee_type_str}
              description="A strategically built Hotel with features of its own kind."
            />
          ))}
        </Row>
        {/* Staffs Row Ends */}
        <SpaceDiv />
      </Row>

      {/* About-Us contents end */}

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  let data = [];
  // let data = ['one', 'two', 'three']
  try {
    data = await getAllStaff();
  } catch (error) {
    console.log({ "Error => ": error });
    // return error;
  }

  return {
    props: {
      data,
    },
  };
}
