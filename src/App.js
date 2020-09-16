import React from 'react';
import NavBar from './containers/navbar/NavBar';
import Routes from './containers/routes/Routes';
import Footer from './containers/footer/Footer';

import Hero from 'react-bulma-components/lib/components/hero';

import './App.scss';

function App() {
  return (
    <Hero size="fullheight" color="primary" gradient>
      <Hero.Head renderAs="header">
        <NavBar />
      </Hero.Head>
      <Hero.Body>
        <Routes />
      </Hero.Body>
      <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
        {/* <Footer /> */}
      </Hero.Footer>
    </Hero>
  );
}

export default App;
