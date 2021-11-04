import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Card } from 'react-bootstrap';

const BlogPostCard = ({ title, subTitle, description, postImage }) => {
  return (
    <Col md={{ span: 5 }} xs={{ span: 12 }}>
      <Card
        className="shadowCard"
        style={{ width: '100%', marginBottom: '10%', border: 'none' }}
      >
        <Image src={postImage} width={300} height={200} alt="Post-Image" />
        <Card.Body style={{ backgroundColor: '' }}>
          <h3 style={{ color: 'gray', textAlign: 'justify' }}>{title}</h3>
          <Card.Title style={{ color: 'darkblue', fontSize: '.8em' }}>
            <i className="fa fa-calendar" /> {subTitle}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link href="/blog/200" passHref>
            <a href="#">Read more...</a>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogPostCard;
