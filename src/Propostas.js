import React from 'react';
import Section from './components/Section';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Propostas = () => (
  <>
    <Section
      headingText="Visão Geral"
      paddingTop="30"
      className="u-mt-zero u-pt-30"
    >
      <Row>
        <Card>
          <p>
            Com base nos dois anos do excelente trabalho realizado pelos membros
            do <b>CONCID 2019-2021</b>, a <b>Chapa 1 – Unidos Somos Um</b> vem
            apresentar as propostas para o próximo mandato <b>2021-2023</b>.
          </p>
          <p>
            Nosso propósito é dar continuidade ao trabalho que vem sendo
            realizado e estreitar os laços entre a Comunidade Brasileira
            residente em Ontário e o Consulado Brasileiro em Toronto.
            Adicionalmente, como membros(as) da Chapa 1 reconhecemos os desafios
            relacionados à COVID-19 e nos comprometemos a trabalhar juntos em
            prol da comunidade.
          </p>
        </Card>
      </Row>
    </Section>

    <Section
      headingText="Eventos & Workshops"
      paddingTop="30"
      className="u-mt-zero u-pt-30"
    >
      <Row>
        <Card>
          <p>
            Criar conteúdos e campanhas utilizando como veículos de divulgação,
            o website do <b>CONCID</b> e do <b>Consulado</b> e as redes sociais
            do <b>CONCID</b>
            (Facebook, Instagram, Youtube e WhatsApp) pertinentes às:
          </p>
          <h5>Sugestões de assuntos:</h5>
          <ul>
            <li>Adaptação ao Canadá (Ontário);</li>
            <li>Serviços do Consulado;</li>
            <li>Integração entre os brasileiros;</li>
            <li>Empregabilidade: busca de emprego, mudança de carreira;</li>
            <li>Empreendedorismo;</li>
            <li>
              Educação: ensino Regular e Especial, aprendizado online,
              Bilinguismo, Língua Portuguesa como Língua de Herança e
              Literatura;
            </li>
            <li>
              Cultura: datas comemorativas, Semana do Brasil em Toronto, Artes
              Cênicas e Plásticas, Música e Dança; Saúde e Bem-estar: físico e
              mental, a pandemia da Covid19;
            </li>
            <li>
              Finanças: administração, mercado imobiliário, de ações e
              financeiro, impostos e aposentadoria;
            </li>
            <li>Assuntos legais: imigração, testamento, divórcio e seguros.</li>
          </ul>
        </Card>
      </Row>
    </Section>
    <Section
      headingText="Comunicação & Campanhas"
      paddingTop="30"
      className="u-mt-zero u-pt-30"
    >
      <Row>
        <Card>
          <p>
            Realização de eventos online ou presenciais gratuitos (como
            workshops, palestras, painéis, cursos entre outros) com temas
            variados a fim de apoiar TODA a comunidade brasileira.
          </p>
          <ul>
            <li>
              Ações e iniciativas do <b>CONCID</b>
            </li>
            <li>Promoção da cultura brasileira</li>
            <li>
              Divulgação de informações importantes para a comunidade e dos
              serviços do Consulado
            </li>
            <li>
              Informação dos diversos serviços em Português oferecidos na
              província de Ontário
            </li>
          </ul>
        </Card>
      </Row>
    </Section>
    <Section
      headingText="Iniciativas & Ações"
      paddingTop="30"
      className="u-mt-zero u-pt-30"
    >
      <Row>
        <Card>
          <p>
            Apoiar iniciativas e/ou ações em benefício da comunidade brasileira,
            tendo como foco:
          </p>
          <ul>
            <li>Saúde mental e física;</li>
            <li>Educação e cultura</li>
            <li>
              Voluntariado: Incentivar a comunidade a participar e contribuir
              ativamente nos diversos programas e iniciativas do <b>CONCID</b>{' '}
              como valorização da cultura do voluntariado no Canadá.
            </li>
            <li>
              Diversidade e inclusão:
              <ul>
                <li>Comunidade Indigena</li>
                <li>Comunidade LGBTQ+</li>
                <li>Comunidade Negra</li>
                <li>Crianças e adolescentes</li>
                <li>Idosos</li>
                <li>Mulheres</li>
                <li>Pessoas com deficiência (cognitiva, mental e/ou física)</li>
              </ul>
            </li>
            <li>Multiculturalismo</li>
            <li>Linguagem e comunicação</li>
          </ul>
        </Card>
      </Row>
    </Section>
  </>
);

export default Propostas;
