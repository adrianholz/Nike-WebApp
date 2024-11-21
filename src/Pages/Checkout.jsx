import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { MyContext } from "../App";
import { useCarts } from "../useCarts";

const Checkout = () => {
  const { currentUserCarts } = useCarts();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (currentUserCarts) {
      const totalPrice = currentUserCarts.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
      setTotal(totalPrice);
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="gradient-background product-page-header">
        <Header />
      </div>

      <div className="product-page-background">
        <div className="checkout-page">
          <h1>Checkout</h1>
          <div className="container">
            <div className="customer-info">
              <h2>Your information</h2>
              <form action="#">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="shipto">Ship to</label>
                  <input type="text" id="shipto" name="shipto" />
                </div>
                <button type="submit" className="call-to-action">
                  Checkout
                </button>
              </form>
            </div>
            <div className="product-info">
              <ul>
                {currentUserCarts ? (
                  currentUserCarts.map((product) => (
                    <li>
                      <img
                        src={`/assets/img/png/${product.id}.png`}
                        alt={`${product.name}`}
                      />
                      <h3>{product.name}</h3>
                      <span>${product.price}</span>
                    </li>
                  ))
                ) : (
                  <h2>There are no products in your cart.</h2>
                )}
              </ul>
              {total ? <h3>Total: ${total}</h3> : null}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
