import React from "react";
import Image from "next/image";
import Hotel from "../public/hotel.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const dt = new Date();
  const year = dt.getFullYear();
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
            <p>Phone : +255 787 978 908</p>
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
          <h6>Addresses</h6>
          <address>
            <p>Portsline Hotel & SPA</p>
            <p>CR No. 489654</p>
            <p>Open: 24 HRS</p>
            <p>63/65 Block-T Bingo/Taifa Road</p>
            <p>P.O Box 6052,</p>
            <p>Tel From: 8:30 AM - 4:30 PM</p>
          </address>
        </Col>
        <Col className="map" xs={12} md={4}>
          <h6>Visit Us:</h6>
          <Image src={Hotel} width={400} height={200} alt="map-image" />
        </Col>

        <Col
          style={{ borderTop: "1px solid #fff", marginTop: 4 }}
          xs={12}
          md={7}
        >
          <a className="mylink" href="#">
            Terms and Conditions
          </a>
          <a className="mylink" href="#">
            Privacy Policy
          </a>
          <a className="mylink" href="#">
            FAQs
          </a>
        </Col>

        <Col
          style={{ borderTop: "1px solid #fff", marginTop: 4 }}
          xs={12}
          md={5}
        >
          <p style={{ textAlign: "center", padding: ".5rem" }}>
            &copy; {year} | Portsline Hotel & SPA Limited
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
