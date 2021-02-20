import React from 'react';
import Propostas from './Propostas';
import { ReactSVG } from 'react-svg';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid className="u-transp-bckg-10">
        <ReactSVG
          className="svg-wrapper"
          src="images/tag-colage-outlines.svg"
        />
      </Container>
      <Propostas />
    </>
  );
};

export default Home;
