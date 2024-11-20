import { useContext } from "react";
import { MyContext } from "./App";

export const useCarts = () => {
  const { cartObj, setCartObj, currentUserEmail } = useContext(MyContext);

  const isLoggedin = !!currentUserEmail;

  const currentUserCarts = currentUserEmail
    ? cartObj[currentUserEmail] ?? []
    : [];

  const addCart = (product) => {
    if (currentUserCarts.find((item) => item.id === product.id)) {
      alert("You've already added this item!");
      return;
    }

    const newArray = [...currentUserCarts, product];
    const newCartObj = {
      ...cartObj,
      [currentUserEmail]: newArray,
    };
    setCartObj(newCartObj);
  };

  const deleteCart = (id) => {
    const newArray = currentUserCarts.filter((item) => item.id !== id);
    const newCartObj = {
      ...cartObj,
      [currentUserEmail]: newArray,
    };
    setCartObj(newCartObj);
  };

  return {
    currentUserCarts,
    addCart,
    deleteCart,
    isLoggedin,
  };
};
