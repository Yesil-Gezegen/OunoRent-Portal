import React, { useState, useEffect, createContext, useContext } from "react";
import { axiosInstance } from "../helpers/axios/data";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const value = {};

  return (
    <HeaderProvider.Provider value={value}>{children}</HeaderProvider.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
