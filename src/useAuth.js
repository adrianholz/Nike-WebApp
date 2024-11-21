import { useContext } from "react";
import { MyContext } from "./App";
import { localStorageKey } from "./data/localStorageKey";

export const useAuth = () => {
  const { setCurrentUserEmail } = useContext(MyContext);

  const login = (email) => {
    setCurrentUserEmail(email);
    localStorage.setItem(localStorageKey.loggedinUserEmail, email);
  };
  const logout = () => {
    setCurrentUserEmail("");
    localStorage.removeItem(localStorageKey.loggedinUserEmail);
  };

  return {
    login,
    logout,
  };
};
