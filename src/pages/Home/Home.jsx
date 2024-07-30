import React from "react";
import Layout from "../../layout/Layout";
import HomeSlider from "../../components/Slider";
import CartSliderComponent from "../../components/CartSlider";

function Home() {
  return (
    <Layout childrenClasses="pt-0">
      <HomeSlider />
      <CartSliderComponent />
    </Layout>
  );
}

export default Home;
