import React from "react";
import { Link } from "react-router-dom";
import Fotter from "../Fotter/Fotter";

const HeroSection = () => {
  return (
    <div>
      <section className="bg-cover bg-center bg-gradient-to-r from-red-600 to-yellow-400 text-white py-48">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Food Paradise
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Delicious and Authentic Cuisine from Around the World
          </p>
          <Link
            to={"/menu"}
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
          >
            Show Our Menu
          </Link>
        </div>
      </section>
      <Fotter></Fotter>
    </div>
  );
};

export default HeroSection;
