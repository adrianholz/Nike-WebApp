import React from "react";
import Marquee from "../Components/Marquee";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";

const Category = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="product-page-background">
      <Sidebar />

      <div className="gradient-background product-page-header">
        <Header />
      </div>

      <main className="product-page">
        <Marquee />
        <div className="product-page-inner">
          <div className="product-page-item">
            <img
              src={`/assets/img/png/${params.id}-1.png`}
              alt={`Nike ${params.id}'s Shoes`}
            />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <Link to="/cart" className="call-to-action">
              Add to Cart
            </Link>
          </div>
          <div className="product-page-item">
            <img
              src={`/assets/img/png/${params.id}-2.png`}
              alt={`Nike ${params.id}'s Shoes`}
            />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <Link to="/cart" className="call-to-action">
              Add to Cart
            </Link>
          </div>
          <div className="product-page-item">
            <img
              src={`/assets/img/png/${params.id}-3.png`}
              alt={`Nike ${params.id}'s Shoes`}
            />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <Link to="/cart" className="call-to-action">
              Add to Cart
            </Link>
          </div>
          <div className="product-page-item">
            <img
              src={`/assets/img/png/${params.id}-4.png`}
              alt={`Nike ${params.id}'s Shoes`}
            />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <Link to="/cart" className="call-to-action">
              Add to Cart
            </Link>
          </div>
        </div>
        <Marquee />
      </main>
      <Footer />
    </div>
  );
};

export default Category;
