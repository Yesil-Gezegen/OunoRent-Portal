import React from "react";
import CardSlider from "../../components/ProductCardSlider/CardSlider";
import Layout from "../../layout/Layout";
import Slider from "../../components/Slider/Slider";
import LogoClouds from "../../components/LogoClouds/LogoClouds";

function Home() {
  return (
    <Layout childrenClasses="pt-0">
      <Slider />
      <CardSlider />
      <LogoClouds />
    </Layout>
  );
}

export default Home;
