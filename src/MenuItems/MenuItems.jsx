import React from "react";
import { useLoaderData } from "react-router-dom";
import MealMenu from "../Component/MealMenu/MealMenu";
import Fotter from "../Component/Fotter/Fotter";

const MenuItems = () => {
  const menuItems = useLoaderData();
  //   console.log(menuItems.meals);
  const meals = menuItems.meals;

  return (
    <div className="bg-gradient-to-r from-red-300 to-yellow-200">
      <div className="grid ml-16 grid-cols-3">
        {meals.map((meal) => (
          <MealMenu key={meal.idMeal} meal={meal}></MealMenu>
        ))}
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default MenuItems;
