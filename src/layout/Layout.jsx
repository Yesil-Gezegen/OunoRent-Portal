import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";

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
