import { createContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import User from "./Components/User";

export const MyContext = createContext({
  cartObj: {}, // { "user1@gmail.com": [], "user2@gmail.com": [], ... }
  setCartObj: () => null,
  userModal: false,
  setUserModal: () => null,
  currentUserEmail: "",
  setCurrentUserEmail: () => null,
});

function App() {
  const [cartObj, setCartObj] = useState({});
  const [userModal, setUserModal] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    console.log("cartObj", cartObj);
  }, [cartObj]);

  return (
    <MyContext.Provider
      value={{
        cartObj,
        setCartObj,
        userModal,
        setUserModal,
        currentUserEmail,
        setCurrentUserEmail,
      }}
    >
      <User />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
