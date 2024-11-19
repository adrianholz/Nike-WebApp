import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <Link to="/">
          <img src="/assets/img/svg/logo-white.svg" alt="Nike Logo White" />
        </Link>
        <div>
          <h2>Links</h2>
          <nav aria-label="Footer Navigation">
            <ul>
              <li>
                <Link to="/category/men">Nike for Men</Link>
              </li>
              <li>
                <Link to="/category/women">Nike for Women</Link>
              </li>
              <li>
                <Link to="/category/kids">Nike for Kids</Link>
              </li>
              <li>
                <Link to="/category/sale">Items on Sale</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>About Nike</h2>
          <p>
            Inspiring the world's athletes, Nike delivers innovative products,
            experiences and services.
          </p>
        </div>
      </div>
      <div className="copy">
        <p>
          Nike &copy; All rights reserved. Developed by{" "}
          <a href="https://www.andrix.design" target="_blank">
            Andrix Design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
