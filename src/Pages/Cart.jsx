import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

const Cart = () => {
  const { carts, setCarts } = useContext(MyContext);

  const deleteCart = (id) => {
    setCarts(carts.filter((item) => item.id !== id));
  };

  return (
    <div className="product-page-background">
      <Sidebar />
      <div className="gradient-background product-page-header">
        <Header />
      </div>

      <div className="product-page-background">
        <div className="cart-page">
          <h1>Your Cart</h1>
          <div className="container">
            <ul>
              {carts.length > 0 ? (
                carts.map((item, index) => (
                  <li key={index}>
                    <img src={`/assets/img/png/${item.id}.png`} alt={item} />
                    <div>
                      <h2>{item.name}</h2>
                      <span>${item.price}</span>
                    </div>
                    <span onClick={() => deleteCart(item.id)}>X</span>
                  </li>
                ))
              ) : (
                <li>Your cart is empty.</li>
              )}
            </ul>
            {carts.length > 0 ? (
              <Link to="/checkout">
                <button className="call-to-action">Checkout</button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
