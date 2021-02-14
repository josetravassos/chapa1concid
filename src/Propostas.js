import React from 'react';
import Section from './components/Section';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Propostas = () => (
  <Section headingText="Nossas propostas">
    <Row xs={1} md={2}>
      <Col>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Eventos...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Realizar eventos e workshops com o intuito de ajudar os
                brasileiros recém-chegados a se prepararem na busca de emprego
                em Ontário, além de colocá-los em contato com potenciais
                empregadores.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Para mulheres...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Realizar eventos direcionados à mulher brasileira, nas áreas de
                saúde, qualidade de vida, empreendedorismo, entre outras.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Palestras...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Realizar eventos e workshops com o intuito de ajudar os
                brasileiros recém-chegados a se prepararem na busca de emprego
                em Ontário, além de colocá-los em contato com potenciais
                empregadores.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Comemorações...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Realizar eventos direcionados à mulher brasileira, nas áreas de
                saúde, qualidade de vida, empreendedorismo, entre outras.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Serviçoes em Português...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Realizar eventos e workshops com o intuito de ajudar os
                brasileiros recém-chegados a se prepararem na busca de emprego
                em Ontário, além de colocá-los em contato com potenciais
                empregadores.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              LGBTQ+...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Realizar eventos direcionados à mulher brasileira, nas áreas de
                saúde, qualidade de vida, empreendedorismo, entre outras.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Palestras...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Realizar eventos e workshops com o intuito de ajudar os
                brasileiros recém-chegados a se prepararem na busca de emprego
                em Ontário, além de colocá-los em contato com potenciais
                empregadores.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Educação e Cultura...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Realizar eventos direcionados à mulher brasileira, nas áreas de
                saúde, qualidade de vida, empreendedorismo, entre outras.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  </Section>
);

export default Propostas;
