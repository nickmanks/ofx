import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

const Quote = ()=> (
  <Container>
    <Row>
      <Col md={6}>
        <input placeholder={'first'}></input>
      </Col>
      <Col md={6}>
        <input placeholder={'last'}></input>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <input placeholder={'email'}></input>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <input placeholder={'phone'}></input>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <input placeholder={'From'}></input>
      </Col>
      <Col md={6}>
        <input placeholder={'To'}></input>
      </Col>
    </Row>
    <Row>
      <Col md={8}>
        <input placeholder={'Amount'}></input>
      </Col>
    </Row>
  </Container>
);

export default Quote;
