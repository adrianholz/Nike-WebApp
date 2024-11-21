import { useContext, useRef } from "react";
import { MyContext } from "../App";
import { users } from "../data/users";
import { useAuth } from "../useAuth";

const User = () => {
  const form = useRef();
  const { userModal, setUserModal, currentUserEmail } = useContext(MyContext);
  const { login, logout } = useAuth();

  function handleBackdrop({ target }) {
    if (form.current && !form.current.contains(target)) {
      setUserModal(false);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUserModal(false);
      login(email);
      alert("Logged in successfully!");
    } else {
      alert("Sorry, no registered user. Please try again.");
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    setUserModal(false);
    logout();
    alert("Logged out successfully.");
  }

  if (userModal) {
    if (currentUserEmail) {
      return (
        <div className="user-login" onClick={handleBackdrop}>
          <form action="#" ref={form} onSubmit={handleLogout}>
            <h2>Your Information</h2>
            <div>
              <label htmlFor="email">E-mail</label>
              <p>{currentUserEmail}</p>
            </div>
            <button type="submit" className="call-to-action">
              Logout
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="user-login" onClick={handleBackdrop}>
          <form action="#" ref={form} onSubmit={handleLogin}>
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
    }
  } else {
    return null;
  }
};

export default User;
