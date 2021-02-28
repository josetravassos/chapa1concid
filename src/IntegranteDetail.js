import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Section from './components/Section';
import { motion } from 'framer-motion';
import { pageAnimation } from './lib/animation';

import { IntegrantesJson } from './lib/integrantes-json';

const IntegranteDetail = (props) => {
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
                  <img
                    src={require('./images/' + integrante.foto)}
                    alt=""
                    className="integrante-card--img"
                  />
                </div>
                <div
                  className="integrante-detail--bio"
                  dangerouslySetInnerHTML={{ __html: integrante.bio }}
                />
              </div>

              <hr className="u-mt-30 u-mb-30" />
              <div className="integrante-detail--video">
                {integrante.video && (
                  <iframe
                    width="100%"
                    height="505"
                    src={integrante.video}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>
          </Section>
        </motion.div>
      )}
    </>
  );
};

export default IntegranteDetail;
