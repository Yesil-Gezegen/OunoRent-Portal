import React, { useState, useEffect, createContext, useContext } from "react";
import { getData } from "../services/services";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await getData("/Blog");
        const returnedData = response.data;
        console.log("response", returnedData);
        setBlog(returnedData);
      } catch (error) {
        console.error(error);
      }
    };
    getBlogData();
  }, []);

  const values = { blog };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export const useBlog = () => useContext(BlogContext);
