import React from 'react';

import './scss/app.scss';
import Categories from './components/Categories.jsx';
import Sort from './components/Sort.jsx';
import Header from './components/Header.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';
import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            {pizzas.map((value) => {
              return <PizzaBlock title={value.title} price={value.price} />;
            })}
            {/* <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Margarita" price={8} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} />
            <PizzaBlock title="Cheese seasons" price={12} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
