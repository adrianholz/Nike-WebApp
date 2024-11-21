import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../App";
import { useAuth } from "../useAuth";
import axios from "axios";

const User = () => {
  const form = useRef();
  const { userModal, setUserModal, currentUserEmail } = useContext(MyContext);
  const { login, logout } = useAuth();
  const [users, setUsers] = useState([]);

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

  // fetch user data
  async function fetchLocalUserData() {
    try {
      const response = await axios.get("/users.json"); // public 폴더에서 제공
      // console.log("💙 Users Json:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching local JSON data:", error);
    }
  }

  useEffect(() => {
    fetchLocalUserData();
  }, []);

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
