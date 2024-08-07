import React, { useState, useEffect, createContext, useContext } from "react";
import { getData } from "../services/services";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await getData("/Category");
        const returnedData = response.data;
        setCategories(returnedData);
        console.log("categories", returnedData);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getSliderMenuItem = async () => {
      try {
        const response = await getData("/MenuItem/Getactive");
        const returnedData = response.data;
        console.log("menuItem", returnedData);
        setMenuItem(returnedData);
      } catch (error) {
        console.error(error);
      }
    };
    getSliderMenuItem();
  }, []);

  const fetchSliderData = async () => {
    try {
      const response = await getData("/Slider/Getactive");
      const returnedData = response.data;
      setSlider(returnedData);
      console.log("slider", returnedData);
    } catch (error) {
      console.error("Slider verilerini çekerken hata oluştu:", error);
    }
  };

  const values = { menuItem, categories, fetchSliderData, slider };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
