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
          <Link className="integrante-card--btn" to="/integrantes/ana-silva">
            <span className="integrante-card--name">
              Ana Paula Mendes Silva
            </span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link className="integrante-card--btn" to="/integrantes/carol-hack">
            <span className="integrante-card--name">Carolina Hack</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/cinthia-alcantara"
          >
            <span className="integrante-card--name">Cinthia Alcantara</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/corine-standerski"
          >
            <span className="integrante-card--name">Corine Standerski</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link className="integrante-card--btn" to="/integrantes/cris-dias">
            <span className="integrante-card--name">Cris Dias</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/daniela-emmerich"
          >
            <span className="integrante-card--name">
              Daniela Emmerich de Souza
            </span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link className="integrante-card--btn" to="/integrantes/leila-farah">
            <span className="integrante-card--name">Leila Farah</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/lilian-hanson"
          >
            <span className="integrante-card--name">Lilian Hanson Zirk</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/natalia-batista"
          >
            <span className="integrante-card--name">Nathália Batista</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link className="integrante-card--btn" to="/integrantes/sem-nome">
            <span className="integrante-card--name">Sem Nome</span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/jose-travassos"
          >
            <span className="integrante-card--name">
              Jose Alexandre Travassos
            </span>
          </Link>
        </div>
        <div className="integrante-card">
          <img src={Carolina} alt="" className="integrante-card--img" />
          <Link
            className="integrante-card--btn"
            to="/integrantes/rafael-torres"
          >
            <span className="integrante-card--name">Rafael Torres</span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Integrantes;
