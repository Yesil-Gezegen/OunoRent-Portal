import React, { useState, createContext, useContext } from "react";
import { postData, getData } from "../services/services";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [faqData, setFaqData] = useState([]);

  const formDataPost = async (values) => {
    try {
      const response = await postData("/ContactForm", values);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const getFaqData = async () => {
    try {
      const repsonse = await getData("/FAQ/GetActive");
      const data = repsonse.data;
      setFaqData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { formDataPost, getFaqData, faqData };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
