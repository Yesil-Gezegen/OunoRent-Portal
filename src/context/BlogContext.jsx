import React, { useState, createContext, useContext } from "react";
import { getData } from "../services/services";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  const getBlogData = async () => {
    try {
      const response = await getData("/Blog/GetActive");
      const returnedData = response.data;
      console.log("Blog", returnedData);
      setBlog(returnedData);
    } catch (error) {
      console.error(error);
    }
  };

  const getBlogById = async (blogId) => {
    const response = await getData(`/Blog/${blogId}`);
    const returnedData = response.data;
    return returnedData;
  };

  const values = { blog, getBlogData, getBlogById };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export const useBlog = () => useContext(BlogContext);
