import React, { Suspense } from 'react';
import './scss/app.scss';
import Home from './pages/Home';
// import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/ './pages/Cart'));
const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza"*/ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/*webpackChunkName: "NotFound"*/ './pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
