import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Marquee from "../Components/Marquee";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="gradient-background">
        <Header />
        <main>
          <div className="main-inner">
            <div className="main-content">
              <h1>Air Max</h1>
              <h2>Nike Air Max 90</h2>
              <p>
                Walking on clouds above the noise, the{" "}
                <strong>Air Max 90</strong> blends timeless design with
                cushioned comfort. Sporting a fast-paced look, wavy mudguard and
                Nike Air, this classNameic icon hit the scene in '87 and
                continues to be the soul of the franchise today.
              </p>
              <a href="#" className="call-to-action">
                Shop now
              </a>
            </div>
            <img src="/assets/img/png/airmax.png" alt="Air Max 90" />
          </div>
        </main>
      </div>

      <section className="products">
        <h2>
          <span>New Arrivals</span>
        </h2>
        <div className="products-inner">
          <div className="collection">
            <div className="product">
              <div>
                <h3>Mid Blazer</h3>
              </div>
              <img src="assets/img/png/shoe1.png" alt="Mid Blazer" />
            </div>
            <div className="product">
              <div>
                <h3>Fly Zoom</h3>
              </div>
              <img src="assets/img/png/shoe2.png" alt="Fly Zoom" />
            </div>
            <div className="product">
              <div>
                <h3>Air Max</h3>
              </div>
              <img src="assets/img/png/shoe3.png" alt="Air Max" />
            </div>
            <div className="product">
              <div>
                <h3>Air Force</h3>
              </div>
              <img src="assets/img/png/shoe4.png" alt="Air Force" />
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <Marquee />
        <div className="categories-inner">
          <div>
            <h3>Nike for Men</h3>
            <Link to="/category/men" className="call-to-action">
              Shop Now
            </Link>
          </div>
          <div>
            <h3>Nike for Women</h3>
            <Link to="/category/women" className="call-to-action">
              Shop Now
            </Link>
          </div>
          <div>
            <h3>Nike for Kids</h3>
            <Link to="/category/kids" className="call-to-action">
              Shop Now
            </Link>
          </div>
        </div>
        <Marquee />
      </section>

      <Footer />
    </>
  );
};

export default Home;
