import React from 'react';

import './scss/app.scss';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import NotFound from './pages/NotFound.jsx';

// import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
          {/* <NotFound/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
