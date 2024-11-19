import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(["men-1", "women-2"]);

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
              {cart ? (
                cart.map((item, index) => (
                  <li key={index}>
                    <img src={`/assets/img/png/${item}.png`} alt={item} />
                    <div>
                      <h2>{item}</h2>
                      <span>$89</span>
                    </div>
                  </li>
                ))
              ) : (
                <li>Your cart is empty.</li>
              )}
            </ul>
            {cart ? (
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
