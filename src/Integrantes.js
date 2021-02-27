import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './components/Section';
import { motion } from 'framer-motion';
import { pageAnimation } from './lib/animation';

import Carolina from './images/carolina-hack.png';
import Ana from './images/ana-silva.png';
import Corine from './images/corine.png';
import Cintia from './images/placeholder.png';
import Cris from './images/cris-dias.png';
import Daniela from './images/daniela.png';
import Jean from './images/jean-dumet.png';
import Jose from './images/jose-travassos.png';
import Lilian from './images/lilian.png';
import Leila from './images/leila.png';
import Natalia from './images/natalia-batista.png';
import Rod from './images/rod-silva.png';
import Rafael from './images/rafael-torres.png';

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
            <img src={Leila} alt="" className="integrante-card--img" />
            <Link
              className="integrante-card--btn"
              to="/integrantes/leila-farah"
            >
              <span className="integrante-card--name">Leila Farah</span>
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
          <div className="integrante-card">
            <img src={Rod} alt="" className="integrante-card--img" />
            <Link className="integrante-card--btn" to="/integrantes/rod-silva">
              <span className="integrante-card--name">Rod Silva</span>
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Integrantes;
