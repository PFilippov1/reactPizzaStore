import React from 'react';

import './scss/app.scss';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import FullPizza from './pages/FullPizza.jsx';
import MainLayout from './layouts/MainLayout.jsx';
// import pizzas from './assets/pizzas.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
