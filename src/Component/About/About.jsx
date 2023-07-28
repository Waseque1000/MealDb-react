import React from "react";
import { useLoaderData } from "react-router-dom";
import waseque from "../../../public/waseque.jpeg";

const About = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src={waseque}
                alt="Restaurant Interior"
              ></img>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Welcome to Our Restaurant
              </h2>
              <p className="text-gray-600">
                Welcome to
                <span className="font-bold text-red-700 text-3xl">
                  <span className="text-6xl">W</span>aseque's
                </span>
                <span className=" text-3xl font-extrabold text-green-500 ">
                  {" "}
                  Food Fusion
                </span>{" "}
                a culinary paradise that takes you on a delightful journey of
                flavors and tastes from around the world. Our restaurant is all
                about creating memorable dining experiences with exceptional
                dishes, warm hospitality, and an inviting ambiance.
              </p>{" "}
              <br />
              <p className="text-gray-600 mt-4">
                At Tasty Bites, we take immense pride in offering a diverse menu
                that caters to all palates. Indulge in an array of delectable
                dishes, including tantalizing appetizers, flavorful main
                courses, heavenly desserts, and refreshing beverages. Our expert
                chefs use the finest ingredients to craft each dish with passion
                and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
