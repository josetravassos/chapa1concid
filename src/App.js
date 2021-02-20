import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Integrantes from './Integrantes';
import Home from './Home';
import Chapa2019 from './chapa2019';

import './chapa.scss';

const App = () => (
  <>
    <Router>
      <Header />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/integrantes" component={Integrantes} />
        <Route path="/chapa2019" component={Chapa2019} />
      </main>
      <Footer />
    </Router>
  </>
);

export default App;
