import React from 'react';

import Container from 'react-bootstrap/Container';

const Section = ({ children, headingLevel = 1, headingText }) => {
  const H = `h${headingLevel}`;
  return (
    <section>
      <H className="u-align-center u-mb-30 u-transp-bckg-10">{headingText}</H>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
