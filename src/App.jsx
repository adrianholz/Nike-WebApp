import { createContext, useState } from "react";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import User from "./Components/User";

export const MyContext = createContext({
  carts: [],
  setCarts: () => null,
  user: false,
  setUser: () => null,
});

function App() {
  const [carts, setCarts] = useState([]);
  const [user, setUser] = useState(false);

  return (
    <MyContext.Provider value={{ carts, setCarts, user, setUser }}>
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
