import React from "react";
import CardSlider from "../../components/ProductCardSlider/CardSlider";
import Layout from "../../layout/Layout";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <Layout childrenClasses="pt-0">
      <Slider />
      <CardSlider />
    </Layout>
  );
}

export default Home;
