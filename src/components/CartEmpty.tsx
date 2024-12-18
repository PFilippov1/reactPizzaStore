import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>The basket is empty😕</h2>
      <p>
        Most likely, you have not ordered yet pizza.
        <br />
        In order to order pizza, go to the main page.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Return back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
