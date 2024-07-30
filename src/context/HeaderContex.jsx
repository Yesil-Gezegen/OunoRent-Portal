import React, { useState, useEffect, createContext, useContext } from "react";
import { axiosInstance } from "../helpers/axios/data";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
 
  const values = {
    
  };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
