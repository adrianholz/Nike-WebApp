import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const Checkout = () => {
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
              <img src="/assets/img/png/men-1.png" alt="Product Checkout" />
              <h2>Nike Ultra Blaster</h2>
              <span>$89</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
