import React, { useState, createContext, useContext } from "react";
import { postData } from "../services/services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const login = async (values) => {
    const response = await postData("/auth/login", values);
    const data = response.data;
    console.log("Giriş Başarılı:", data);
    localStorage.setItem("token", data.token);
    setIsLoggedIn(true);
  };

  const values = { isLoggedIn, setIsLoggedIn, handleLogout, login };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
