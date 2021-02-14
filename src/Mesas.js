import React from 'react';

import Section from './components/Section';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Mesas = () => (
  <Section headingText="Temas">
    <Tabs defaultActiveKey="conquistas" id="uncontrolled-tab-example">
      <Tab eventKey="conquistas" title="Conquistas">
        Dois membros da nossa chapa fazem parte da atual gestão do Conselho
        Brasileiro de Cidadania, o primeiro Conselho a “sair do papel” na
        província de Ontário. Em apenas dois anos, eles realizaram parcerias
        importantes na comunidade e participaram de diversos eventos nas áreas
        de cultura, empreendedorismo, empregabilidade, saúde, violência de
        gênero, imigração e habitação. Além disso, criaram a Cartilha de
        Serviços Sociais e de Saúde Gratuitos em Português para a Grande Toronto
        (disponível no site do Concid).
      </Tab>
      <Tab eventKey="inovacao" title="Inovação">
        13 membros da nossa chapa serão novos no Conselho. Mesmo assim, temos
        experiência em voluntariado e muita vontade de trabalhar pelo bem da
        comunidade brasileira em Ontário, trazendo novas ideias para aprimorar e
        ampliar as ações do Concid.
      </Tab>
      <Tab eventKey="diversidade" title="Diversidade">
        Você já leu nossas biografias? Nossa chapa tem gente que já mora no
        Canadá há muitos anos e tem gente que chegou há pouco tempo. Tem gente
        mais nova e gente mais experiente. Tem homens e mulheres. Tem gente com
        “backgrounds”, crenças e ideias diferentes. Com nossa pluralidade, temos
        condições de compreender e ajudar os mais diversos segmentos de nossa
        comunidade.
      </Tab>
      <Tab eventKey="inclusao" title="Inclusão">
        A Chapa 1 não quer servir a um único grupo. Nosso lema não é “Unidos
        Somos 1” à toa. Acreditamos que todos os brasileiros aqui em Ontário
        merecem receber o melhor de nós, independentemente de idade, gênero,
        raça, credo, orientação sexual, posição social ou status imigratório.
        Nossas propostas são para todos, pois juntos somos melhores e mais
        fortes.
      </Tab>
      <Tab eventKey="etica" title="Ética">
        A ÉTICA e o compromisso com a VERDADE: A Chapa 1 não faz promessas que
        não poderá cumprir. Nosso intuito é sempre fornecer informações e
        orientações claras e precisas. Nossas propostas visam continuar e
        expandir projetos e parcerias de forma factível e especifica às
        necessidades de nossa comunidade, em conformidade com as normas
        consulares e leis canadenses.
      </Tab>
    </Tabs>
  </Section>
);

export default Mesas;
