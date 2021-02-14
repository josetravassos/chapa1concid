import React from 'react';

import Section from './components/Section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Integrantes = () => (
  <Section headingText="Integrantes">
    <Row xs={1} md={2}>
      <Col className="u-mb-30">
        <h5 className="u-color-navy">Arnon Mello</h5>
        <Card>
          <iframe
            width="auto"
            height="280"
            src="https://www.youtube.com/embed/a385XTq-mR4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
      <Col className="u-mb-30">
        <h5 className="u-color-navy">Miriam Bensabath</h5>
        <Card>
          <iframe
            width="auto"
            height="280"
            src="https://www.youtube.com/embed/TMWR4KqTelc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
    </Row>
    <Row xs={1} md={2}>
      <Col className="u-mb-30">
        <h5 className="u-color-navy">Leonardo Cosenza</h5>
        <Card>
          <iframe
            width="auto"
            height="280"
            src="https://www.youtube.com/embed/44DNOt0Yq7M"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
      <Col className="u-mb-30">
        <h5 className="u-color-navy">Camila Valente</h5>
        <Card>
          <iframe
            width="auto"
            height="280"
            src="https://www.youtube.com/embed/fjrQchoz-dM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
    </Row>
  </Section>
);

export default Integrantes;
