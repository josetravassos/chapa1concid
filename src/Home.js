import React from 'react';
import Mesas from './Mesas';
import Propostas from './Propostas';
import { ReactSVG } from 'react-svg';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* <Container>
          <Row xs={1} md={2}>
            <Col>
              <Card>Card</Card>
            </Col>
            <Col>
              <Card>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/vote.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/vote.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/vote2.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container> */}
      <Container>
        <ReactSVG
          className="svg-wrapper u-transp-bckg-10"
          src="images/tag-colage-inline-styles.svg"
        />
      </Container>

      <Propostas />
      <Mesas />
    </>
  );
};

export default Home;
