import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <>
    <header>
      <Container fluid>
        <Row xs={1} md={3} className="u-align-items-center">
          <Col className="logo-wrapper">
            <img src="/images/logo-chapa1.png" alt="" />
          </Col>
          <Col>
            <div className="leaves-bckg">
              <h1>Unidos Somos 1</h1>
              <p>Concid - Eleições 2021</p>
            </div>
          </Col>
          <Col className="nav-wrapper">
            <Nav>
              <Nav.Item>
                <Nav.Link href="http://instagram.com">Instagram</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="http://facebook.com">Facebook</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
    <Container fluid className="main-nav--wrapper u-mb-30">
      <Nav>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/integrantes">Integrantes</Link>
        </Nav.Item>
      </Nav>
    </Container>
  </>
);

export default Header;
