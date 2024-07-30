import React, { useState, useEffect, createContext, useContext } from "react";
import { axiosInstance } from "../helpers/axios/data";
import { postData } from "../services/services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axiosInstance.get("/category");
        const returnedData = response.data;
        setCategories(returnedData);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const login = async (values) => {
    const response = await postData("/auth/login", values);
    const data = response.data;
    console.log("Response Data:", data);
    localStorage.setItem("token", data.token);
    setIsLoggedIn(true);
  };

  const values = { categories, isLoggedIn, setIsLoggedIn, handleLogout, login };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
