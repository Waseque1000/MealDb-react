import React from "react";
import { Link } from "react-router-dom";

const MealMenu = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal } = meal;
  return (
    <div className=" text-center rounded border-solid border-2 border-sky-100 border m-7">
      <img
        className="w-48 mt-6 h-48 mx-auto text-center rounded"
        src={strMealThumb}
        alt=""
      />
      <h1 className="mt-4 text-2xl">{strMeal}</h1>
      <Link to={`/menu/${idMeal}`}>
        <button className="my-4 mb-5 px-4 py-2 rounded-lg  hover:bg-green-300 bg-green-500">
          Show More{" "}
        </button>
      </Link>
    </div>
  );
};

export default MealMenu;
