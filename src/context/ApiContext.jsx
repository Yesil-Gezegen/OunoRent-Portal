import React, { useState, createContext, useContext } from "react";
import { postData } from "../services/services";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const formDataPost = async (values) => {
    try {
      const response = await postData("/ContactForm", values);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const values = { formDataPost };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
