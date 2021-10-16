import React from 'react';
import Image from 'next/image';
import Hotel from '../public/images/room1.jpg';
import { Col, Button, Row, Card } from 'react-bootstrap';

const BlogPostCard = ({ title, subTitle, description }) => {
  return (
    <Col md={{ span: 4 }} xs={{ span: 12 }}>
      <Card
        className="shadowCard"
        style={{ width: "100%", marginBottom: "10%", border: "none"}}
      >
        <Image src={Hotel} width={300} height={200} alt="Post-Image" />
        <Card.Body>
          <h3 style={{ color: 'gray' }}>{title}</h3>
          <Card.Title style={{ color: 'darkblue' }}>{subTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <button style={{ backgroundColor: 'white' }}>Read more...</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogPostCard;
