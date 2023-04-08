import React from "react";
import DashBoard from "../../components/MealComponents/DashBoard";
import { Link } from "react-router-dom";
import Breakfast from "../../components/MealComponents/Breakfast";
import Lunch from "../../components/MealComponents/Lunch";
import Snack from "../../components/MealComponents/Snack";
import Dinner from "../../components/MealComponents/Dinner";

const Meals = () => {
  return (
    <div className=" container mx-auto my-20">
      <div className=" my-4">
        <h1 className=" text-2xl text-start my-4 text-gray-200 font-bold">
          Today
        </h1>
        <h2 className="text-xl text-gray-300">
          Calculate your daily TDEE and macros{" "}
          <Link to={"/tdee"}>
            <span className=" text-sky-600 hover:underline decoration-sky-600">
              here
            </span>
          </Link>
        </h2>
      </div>
      <div className="">
        <DashBoard />
        <div className=" my-5 flex flex-row gap-3">
          <div
            style={{ backgroundColor: "#22223b" }}
            className="border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <h1 className="text-xl text-gray-200 text-center">Breakfast</h1>
            <button className="text-lg bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white">
              <i class="bi bi-plus"></i> meal
            </button>
            <Breakfast />
          </div>
          <div
            style={{ backgroundColor: "#2b2d42" }}
            className=" border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <h1 className="text-xl text-gray-200 text-center">Lunch</h1>
            <button className="text-lg bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white">
              <i class="bi bi-plus"></i> meal
            </button>
            <Lunch />
          </div>
        </div>

        <div className="my-5 flex flex-row gap-3">
          <div
            style={{ backgroundColor: "#002945" }}
            className="border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <h1 className="text-xl text-gray-200 text-center">Snack</h1>
            <button className="text-lg bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white">
              <i class="bi bi-plus"></i> meal
            </button>
            <Snack />
          </div>
          <div
            style={{ backgroundColor: "#33415c" }}
            className="border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <h1 className="text-xl text-gray-200 text-center">Dinner</h1>
            <button className="text-lg bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white">
              <i class="bi bi-plus"></i> meal
            </button>
            <Dinner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
