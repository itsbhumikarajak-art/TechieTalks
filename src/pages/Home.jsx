import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Howitworks from "../components/Howitworks";
import Newletter from "../components/Newletter";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Howitworks/>
      <Newletter/>
    </div>
  );
};

export default Home;
