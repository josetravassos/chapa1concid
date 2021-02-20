import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/chapa2019">Conheça a Chapa1 2019</Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
