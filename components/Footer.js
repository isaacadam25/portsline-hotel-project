import React from "react";
import Image from "next/image";
import HotelMap from "../public/images/portsline-map.png";
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const Footer = () => {
  const year = new Date().getFullYear();
    const props = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <Container fluid>
      <Row className="footer justify-content-center">
        <Col xs={12} md={12}>
          <h2 className="footer-header">Portsline Hotel & SPA</h2>
        </Col>
        <Col xs={12} md={2} className="quick-links">
          <h6>Quick Links:</h6>
          <ul>
            <li>
              <a href="#">COVID-19</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Our Hotel</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
        </Col>
        <Col className="contact-us" xs={12} md={3}>
          <h6>Contact Us:</h6>
          <address>
            <p>Phone : +255 754 249 777</p>
            <p>Email : info@portslinehotel.co.tz</p>
            <p>info@portslinehotel.co.tz</p>
          </address>
          <div className="social-icons">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
            <i className="fa fa-youtube" />
          </div>
        </Col>
        <Col className="addresses" xs={12} md={3}>
          <h6>Address</h6>
          <address>
            <p>Portsline Hotel & SPA</p>
            <p>CR No. 489654</p>
            <p>Open: 24 HRS</p>
            <p>63/65 Block-T Bingo/Taifa Road</p>
            <p>P.O Box 6052,</p>
          </address>
        </Col>
        <Col className="map" xs={12} md={3}>
          <h6>Visit Us:</h6>
          <div style={{ height: "175px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={props.center}
              defaultZoom={props.zoom}
            ></GoogleMapReact>
          </div>
          {/* <Image src={HotelMap} width={400} height={200} alt="map-image" /> */}
        </Col>
        <Row>
          <Col
            className="bottom-area"
            xs={12}
            md={10}
            lg={{ span: 10, offset: 1 }}
          >
            <a className="bottom-links" href="#">
              Terms and Conditions
            </a>
            <a className="bottom-links" href="#">
              Privacy Policy
            </a>
            <a className="bottom-links" href="#">
              FAQs
            </a>
            <span style={{ float: "right", padding: "" }}>
              &copy; {year} | Portsline Hotel & SPA Limited
            </span>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
