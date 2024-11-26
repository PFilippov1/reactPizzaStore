import React from 'react';

import './scss/app.scss';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
export const SearchContext = React.createContext('');
// import pizzas from './assets/pizzas.json';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header  />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
