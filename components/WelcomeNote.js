import React from 'react';
import Image from 'next/image';
import Hotel from '../public/hotel.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const WelcomeNote = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="welcome-note" xs={12} md={5}>
          <h3 className="welcome-title">Portsline Hotel & SPA</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            facilis molestias minus quisquam natus soluta rerum ipsum nesciunt,
            mollitia excepturi velit quos ex porro at perspiciatis illo dolore
            exercitationem. Totam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Odio facilis molestias minus quisquam natus soluta
            rerum ipsum nesciunt, mollitia excepturi velit quos ex porro at
            perspiciatis illo dolore exercitationem. Totam!
          </p>
          <b>Karibu Sana!</b>
        </Col>
        <Col xs={12} md={7}>
          <Image src={Hotel} alt="Avatar" width={800} height={400} />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeNote;
