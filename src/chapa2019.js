import React from 'react';

import Section from './components/Section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { motion } from 'framer-motion';
import { pageAnimation } from './lib/animation';

const Chapa2019 = () => (
  <motion.div variants={pageAnimation} initial="hidden" animate="show">
    <Section headingText="Chapa1 - 2019">
      <div className="u-transp-bckg u-padding-30">
        <Row xs={1} md={2}>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Eventos...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Realizar eventos e workshops com o intuito de ajudar os
                    brasileiros recém-chegados a se prepararem na busca de
                    emprego em Ontário, além de colocá-los em contato com
                    potenciais empregadores.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Para mulheres...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Realizar eventos direcionados à mulher brasileira, nas áreas
                    de saúde, qualidade de vida, empreendedorismo, entre outras.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Palestras...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Realizar eventos e workshops com o intuito de ajudar os
                    brasileiros recém-chegados a se prepararem na busca de
                    emprego em Ontário, além de colocá-los em contato com
                    potenciais empregadores.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Comemorações...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Realizar eventos direcionados à mulher brasileira, nas áreas
                    de saúde, qualidade de vida, empreendedorismo, entre outras.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Serviçoes em Português...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Realizar eventos e workshops com o intuito de ajudar os
                    brasileiros recém-chegados a se prepararem na busca de
                    emprego em Ontário, além de colocá-los em contato com
                    potenciais empregadores.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  LGBTQ+...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Realizar eventos direcionados à mulher brasileira, nas áreas
                    de saúde, qualidade de vida, empreendedorismo, entre outras.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Palestras...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Realizar eventos e workshops com o intuito de ajudar os
                    brasileiros recém-chegados a se prepararem na busca de
                    emprego em Ontário, além de colocá-los em contato com
                    potenciais empregadores.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion-card u-transp-bckg">
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Educação e Cultura...
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Realizar eventos direcionados à mulher brasileira, nas áreas
                    de saúde, qualidade de vida, empreendedorismo, entre outras.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </div>
    </Section>
    <Section headingText="Integrantes">
      <div className="u-transp-bckg u-padding-30">
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
            <h5 className="u-color-navy">Elias Santos</h5>
            <Card>
              <iframe
                width="auto"
                height="280"
                src="https://www.youtube.com/embed/L2gYU5jdrGw"
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
            <h5 className="u-color-navy">Nathalia Alexandre</h5>
            <Card>
              <iframe
                width="auto"
                height="280"
                src="https://www.youtube.com/embed/yzHburglmtk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </Col>
        </Row>
      </div>
    </Section>
  </motion.div>
);

export default Chapa2019;
