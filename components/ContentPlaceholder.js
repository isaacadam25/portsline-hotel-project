import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const ContentPlaceholder = ({pageName}) => {
  return (
    <Container fluid style={{ paddingTop: '10%', backgroundColor: '#f3f3f4', textAlign: 'center', height: '400px' }} >
      <Row>
        <Col md={{span: 6, offset: 4}} xs={{span: 11, offset: 1}}>
        <span style={{display: 'flex', }}>
            <h5 style={{padding: '0 4px'}}>{pageName}</h5> 
            Is Comming Soon...!!
        </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentPlaceholder;
