import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Integrantes from './Integrantes';
import IntegranteDetail from './IntegranteDetail';
import Home from './Home';
import Chapa2019 from './chapa2019';
import { motion, AnimatePresence } from 'framer-motion';
import { pageAnimation } from './lib/animation';

import './chapa.scss';

const App = () => (
  <>
    <Router>
      <Header />
      <main>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch Location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/integrantes" exact component={Integrantes} />
                <Route path="/integrantes/:id" component={IntegranteDetail} />
                <Route path="/chapa2019" component={Chapa2019} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </main>
    </Router>
  </>
);

export default App;
