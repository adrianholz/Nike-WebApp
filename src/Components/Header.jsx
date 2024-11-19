import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav aria-label="Header Navigation">
        <ul>
          <li>
            <Link to="/category/men">Men</Link>
          </li>
          <li>
            <Link to="/category/women">Women</Link>
          </li>
          <li>
            <Link to="/category/kids">Kids</Link>
          </li>
          <li>
            <Link to="/category/sale">Sale</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
