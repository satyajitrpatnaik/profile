import React from 'react';
import NavBar from './containers/navbar/NavBar';
import Routes from './containers/routes/Routes';
import Footer from './containers/footer/Footer';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
