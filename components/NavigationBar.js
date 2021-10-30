import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Logo from "../public/logo/pl_min_logo_white-01.png";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="#" style={{ backgroundColor: "" }}>
            <Image src={Logo} alt="logo-image" width={200} height={50} />
            {/* Portsline Hotel */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link href="/">
              <a className="navigation-links">Home</a>
            </Link>
            <Link href="/about-us">
              <a className="navigation-links">About Us</a>
            </Link>
            <Link href="/rooms">
              <a className="navigation-links">Rooms</a>
            </Link>
            <Link href="/gallery">
              <a className="navigation-links">Gallery</a>
            </Link>
            {/* <Link href="/our-services">
              <a className="navigation-links">Services</a>
            </Link> */}
            <Link href="/restaurant">
              <a className="navigation-links">Restaurant</a>
            </Link>
            <Link href="/blog">
              <a className="navigation-links">Blog</a>
            </Link>
            <Link href="#">
              <a href="#" className="d-inline d-md-none" style={{color: 'yellow'}}>
                <i className="fa fa-exclamation-circle ">
                  {" "}
                  COVID-19 Travel Updates{" "}
                </i>
              </a>
            </Link>

            {/* <Nav.Link href="#">Rooms</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link> */}
            <Link href="/booking" passHref>
              <Button size="sm">BOOK NOW</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
