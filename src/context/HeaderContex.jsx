import React, { useState, useEffect, createContext, useContext } from "react";
import { getData } from "../services/services";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    const getSliderMenuItem = async () => {
      try {
        const response = await getData("/MenuItem/Getactive");
        const returnedData = response.data;
        console.log("response", returnedData);
        setMenuItem(returnedData);
      } catch (error) {
        console.error(error);
      }
    };
    getSliderMenuItem();
  }, []);

  const values = { menuItem };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
