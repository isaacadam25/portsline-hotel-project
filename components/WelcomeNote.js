import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Hotel from '../public/hotel.jpg';

const WelcomeNote = () => {
  return (
    <Container className="welcome-text">
      <Row className="justify-content-center">
        <Col className="welcome-note" xs={12} sm={12} md={6}>
          <h3 className="welcome-title">Portsline Hotel & SPA</h3>
          <p>
            A strategically built Hotel with features of its own kind, located
            between the two main ports of Dar Es Salaam - Julius Nyerere
            International Airport and the Sea Port. These ideal landmarks have
            lead into naming the hotel as introduced herein. With these ideal
            landmarks and features. I hope you will choose Ports Line Hotel as
            we welcome the opportunity to serve you for Dar Es Salaam better
            memories. Karibu Sana!
          </p>
          <b>Karibu Sana!</b>
        </Col>
        <Col xs={12} md={6}>
          <Image src={Hotel} alt="Avatar" width={800} height={430} />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeNote;
