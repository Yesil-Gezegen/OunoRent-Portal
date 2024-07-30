import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children, childrenClasses }) {
  return (
    <>
      <Navbar />
      <div className={`w-full  ${childrenClasses || "pt-[60px] pb-[30px]"}`}>
        {children && children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
