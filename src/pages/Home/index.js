import React from "react";
import HomeWrapper from "./style";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
const Home = () => {
  return (
    <HomeWrapper>
      <Layout>
        <Slider></Slider>
      </Layout>
    </HomeWrapper>
  );
};

export default Home;
