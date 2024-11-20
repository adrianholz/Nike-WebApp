import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

const Sidebar = () => {
  const { setUserModal } = useContext(MyContext);

  return (
    <aside className="sidebar anime-left">
      <Link to="/">
        <img src="/assets/img/svg/logo.svg" id="logo" alt="Nike Logo" />
      </Link>
      <p>Style takes over</p>
      <div className="header-icons">
        <img
          src="/assets/img/png/user.png"
          alt="User Icon"
          onClick={() => {
            setUserModal(true);
          }}
        />
        <Link to="/cart">
          <img src="/assets/img/png/bag.png" alt="Bag Icon" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
