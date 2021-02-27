import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Section from './components/Section';
import { motion } from 'framer-motion';
import { pageAnimation } from './lib/animation';

import { IntegrantesJson } from './lib/integrantes-json';

// export const fotos = [
//   {
//     id: 'Ana',
//     foto: './images/ana-silva.png',
//   },
// ];
import Carolina from './images/carolina-hack.png';
import Ana from './images/ana-silva.png';
import Corine from './images/corine.png';
import Cris from './images/cris-dias.png';
import Daniela from './images/daniela.png';
import Jean from './images/jean-dumet.png';
import Jose from './images/jose-travassos.png';
import Lilian from './images/lilian.png';
import Natalia from './images/natalia-batista.png';
import Rod from './images/rod-silva.png';
import Rafael from './images/rafael-torres.png';

const IntegranteDetail = (props) => {
  // const fotos = [
  //   {
  //     id: 'Ana',
  //     foto: './images/ana-silva.png',
  //   },
  // ];
  const history = useHistory();
  const url = history.location.pathname;

  const [integrantes, setIntegrantes] = useState(IntegrantesJson);
  const [integrante, setIntegrante] = useState(null);

  useEffect(() => {
    const currentIntegrante = integrantes.filter(
      (stateIntegrante) => stateIntegrante.url === url
    );
    setIntegrante(currentIntegrante[0]);
  }, [integrantes, url]);

  return (
    <>
      {integrante && (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
          <Section headingText={integrante.name}>
            <div className="integrante-detail--wrapper">
              <div className="integrante-detail--foto-bio">
                <div className="integrante-detail--foto">
                  <img src={Corine} alt="" className="integrante-card--img" />
                </div>
                <div
                  className="integrante-detail--bio"
                  dangerouslySetInnerHTML={{ __html: integrante.bio }}
                />
              </div>

              <hr className="u-mt-30 u-mb-30" />
              <div className="integrante-detail--video">
                <iframe
                  width="100%"
                  height="505"
                  src={integrante.video}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Section>
        </motion.div>
      )}
    </>
  );
};

export default IntegranteDetail;
