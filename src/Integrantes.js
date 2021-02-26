import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './components/Section';

import Carolina from './images/carolina-hack.png';

const Integrantes = () => {
  return (
    <Section headingText="Integrantes">
      <div className="integrante-cards-wrapper">
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link className="integrante-card--btn" to="/integrantes/ana">
            <span className="integrante-card--name">
              Ana Paula Mendes Silva
            </span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <button className="integrante-card--btn">
            <span className="integrante-card--name">Carolina Hack</span>
          </button>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <button className="integrante-card--btn">
            <span className="integrante-card--name">Carolina Hack</span>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Integrantes;
