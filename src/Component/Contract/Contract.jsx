import React from "react";
import { Link } from "react-router-dom";
import Fotter from "../Fotter/Fotter";

const Contract = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <form action="#" method="post">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                ></textarea>
              </div>
              <div>
                <Link to={"/confirm"}>
                  <button
                    type="submit"
                    className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Fotter></Fotter>
    </div>
  );
};

export default Contract;
