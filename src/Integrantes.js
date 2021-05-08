import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './components/Section';
import { motion } from 'framer-motion';
import { pageAnimation } from './lib/animation';

import Carolina from './images/carolina.jpg';
import Ana from './images/ana.jpg';
import Corine from './images/corine.jpg';
import Cintia from './images/cinthia.jpg';
import Cris from './images/cris.jpg';
import Daniela from './images/daniela.jpg';
import Jean from './images/jean.jpg';
import Jose from './images/jose.jpg';
import Lilian from './images/lilian.jpg';
import Leila from './images/leila.jpg';
import Natalia from './images/natalia.jpg';
import Rod from './images/rod.jpg';
import Rafael from './images/rafael.jpg';
import Elisa from './images/elisa.jpg';

const Integrantes = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Section headingText="Integrantes">
        <div className="integrante-cards-wrapper">
          <div className="integrante-card">
            <img src={Ana} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/ana-silva">
              <span className="integrante-card--name">Ana Paula Mendes</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Carolina} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/carol-hack">
              <span className="integrante-card--name">Carolina Hack</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Cintia} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/cinthia-alcantara"
            >
              <span className="integrante-card--name">Cinthia Alcantara</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Corine} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/corine-standerski"
            >
              <span className="integrante-card--name">Corine Standerski</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Cris} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/cris-dias">
              <span className="integrante-card--name">Cris Dias</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Daniela} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/daniela-emmerich"
            >
              <span className="integrante-card--name">Daniela Miskulin</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Elisa} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/elisa">
              <span className="integrante-card--name">Elisa</span>
            </Link>
          </div>

          <div className="integrante-card">
            <img src={Lilian} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/lilian-hanson"
            >
              <span className="integrante-card--name">Lilian Hanson</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Natalia} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/natalia-batista"
            >
              <span className="integrante-card--name">Nathália Batista</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Jean} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/jean-dumet">
              <span className="integrante-card--name">Jean Dumet</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Jose} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/jose-travassos"
            >
              <span className="integrante-card--name">Jose Travassos</span>
            </Link>
          </div>
          <div className="integrante-card">
            <img src={Rafael} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/rafael-torres"
            >
              <span className="integrante-card--name">Rafael Torres</span>
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Integrantes;
