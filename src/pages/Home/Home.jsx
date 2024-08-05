import React from "react";
import CardSlider from "../../components/ProductCardSlider/CardSlider";
import Layout from "../../layout/Layout";
import Slider from "../../components/Slider/Slider";
import LogoClouds from "../../components/LogoClouds/LogoClouds";
import ProductCard from "../../components/ProductCard/Card";

function Home() {
  return (
    <Layout childrenClasses="pt-0">
      <Slider />
      <CardSlider />
      <LogoClouds />
      <ProductCard />
    </Layout>
  );
}

export default Home;
