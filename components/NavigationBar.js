import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
<<<<<<< HEAD
import Logo from '../public/logo/Portsline logo-single-p.png';
import PortLogo from '../public/logo/LOGO-Single-P.png';
=======
import Logo from '../public/logo/pl_min_logo_white-01.png';
import PortLogo from '../public/logo/Portsline logo-single-p.png';
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="#" style={{ backgroundColor: '' }}>
<<<<<<< HEAD
            <Image src={Logo} alt="logo-image" width={70} height={40} />
=======
            <Image src={PortLogo} alt="logo-image" width={90} height={40} />
>>>>>>> 001fd0712fa2141b514f829252c2ddf8dbe3004a
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
            <Link
              href="https://covid19.who.int/region/afro/country/tz"
              passHref
            >
              <a
                target="_blank"
                className="d-inline d-md-none"
                style={{ color: 'yellow' }}
              >
                <i className="fa fa-exclamation-circle ">
                  {' '}
                  COVID-19 Travel Updates{' '}
                </i>
              </a>
            </Link>

            {/* <Nav.Link href="#">Rooms</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link> */}
            <Link href="/booking" passHref>
              <button className="nav-button">
                <marquee loop> Book Now</marquee>
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
