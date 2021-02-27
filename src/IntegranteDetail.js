import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Section from './components/Section';

import { IntegrantesJson } from './lib/integrantes-json';

import Carolina from './images/carolina-hack.png';

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
        <Section headingText={integrante.name}>
          <div className="integrante-detail--wrapper">
            <div className="integrante-detail--foto-bio">
              <div className="integrante-detail--foto">
                <img src={Carolina} alt="" className="integrante-card--img" />
              </div>
              <div
                className="integrante-detail--bio"
                dangerouslySetInnerHTML={{ __html: integrante.bio }}
              />
            </div>

            <hr />
            <div className="integrante-detail--video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/a385XTq-mR4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default IntegranteDetail;
