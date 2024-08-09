import React, { useState, createContext, useContext } from "react";
import { postData, getData } from "../services/services";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [faqData, setFaqData] = useState([]);
  const [footerData, setFooterData] = useState([]);

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
  const getFooterData = async () => {
    try {
      const response = await getData("/FooterItem/getActive");
      const data = response.data;
      setFooterData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    formDataPost,
    getFaqData,
    faqData,
    footerData,
    getFooterData,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
