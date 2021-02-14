import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col>
          <img src="images/logo-chapa1.png" alt="" />
        </Col>
        <Col>
          <h4>Contato:</h4>
          <p>yyy@yyy.ca</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
