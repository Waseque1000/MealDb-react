import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Fotter from "../Fotter/Fotter";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <HeroSection></HeroSection> */}
      <Outlet></Outlet>

      {/* Footer
       */}
      {/* <Fotter></Fotter> */}
    </div>
  );
};

export default Home;
