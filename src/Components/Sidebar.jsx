import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar anime-left">
      <Link to="/">
        <img src="/assets/img/svg/logo.svg" id="logo" alt="Nike Logo" />
      </Link>
      <p>Style takes over</p>
      <div className="header-icons">
        <img src="/assets/img/png/search.png" alt="Search Icon" />
        <img src="/assets/img/png/heart.png" alt="Favorites Icon" />
        <Link to="/cart">
          <img src="/assets/img/png/bag.png" alt="Bag Icon" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
