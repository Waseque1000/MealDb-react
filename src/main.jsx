import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";

import HeroSection from "./Component/HeroSection/HeroSection.jsx";
import MenuItems from "./MenuItems/MenuItems.jsx";
// import Fotter from "./Component/Fotter/Fotter.jsx";
import MealDetails from "./Component/MealDetails/MealDetails.jsx";
import Contract from "./Component/Contract/Contract.jsx";
import Confirm from "./Component/Confirm/Confirm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <HeroSection></HeroSection>,
      },
      // {
      //   path: "/",
      //   element: <Fotter></Fotter>,
      // },
      {
        path: "menu",
        element: <MenuItems></MenuItems>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b"),
      },
      {
        path: "menu/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contract></Contract>,
      },
      {
        path: "confirm",
        element: <Confirm></Confirm>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
