import React, { useContext, useRef } from "react";
import { MyContext } from "../App";

const User = () => {
  const { user, setUser } = useContext(MyContext);
  const form = useRef();

  function handleClick({ target }) {
    if (form.current && !form.current.contains(target)) {
      setUser(false);
    }
  }

  if (user) {
    return (
      <div className="user-login" onClick={handleClick}>
        <form action="#" ref={form}>
          <h2>Login to you Nike account</h2>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" className="call-to-action">
            Login
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default User;
