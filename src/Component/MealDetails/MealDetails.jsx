import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const data = useLoaderData();
  const info = data.meals[0];

  //   console.log(data);
  const nevigate = useNavigate();
  const goBack = () => {
    nevigate(-1);
  };
  return (
    <div className="flex   p-4 bg-gradient-to-r from-red-600 to-yellow-400s">
      <div className="    max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-72 object-cover"
          src={info.strMealThumb}
          alt="Card Image"
        ></img>
        <div className="px-4 py-2">
          <h2 className="text-xl font-semibold mb-2">{info.strMeal} </h2>
          <p className="text-gray-600">{info.strInstructions}</p>
          <div className="mt-4 flex justify-between items-center">
            <Link>
              <button
                onClick={goBack}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
