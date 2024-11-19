import { useState } from "react";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
