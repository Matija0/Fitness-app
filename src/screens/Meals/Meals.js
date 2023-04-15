import React from "react";
import DashBoard from "../../components/MealComponents/DashBoard";
import { Link } from "react-router-dom";
import Breakfast from "../../components/MealComponents/Breakfast";
import Lunch from "../../components/MealComponents/Lunch";
import Snack from "../../components/MealComponents/Snack";
import Dinner from "../../components/MealComponents/Dinner";
import breakfast from "../../images/breakfast.png"
import lunch from "../../images/lunch.png"
import dinner from "../../images/dinner.png"
import snack from "../../images/snack.png"

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

            className=" bg-gray-800 border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <div className="flex flex-row gap-4 items-center justify-center mb-2">
              <h1 className="text-2xl text-gray-200 text-center">Breakfast</h1>
              <img src={breakfast} alt="" />
            </div>
            
            <Breakfast />
          </div>
          <div

            className="bg-gray-800 border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <div className="flex flex-row gap-4 items-center justify-center mb-2">
              <h1 className="text-2xl text-gray-200 text-center">Lunch</h1>
              <img src={lunch} alt="" />
            </div>
           
            <Lunch />
          </div>
        </div>

        <div className="my-5 flex flex-row gap-3">
          <div

            className=" bg-gray-800 border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <div className="flex flex-row gap-4 items-center justify-center mb-2">
              <h1 className="text-2xl text-gray-200 text-center">Snack</h1>
              <img src={snack} alt="" />
            </div>
            
            <Snack />
          </div>
          <div

            className="bg-gray-800 border border-gray-500 rounded-lg py-7 px-4 w-1/2"
          >
            <div className="flex flex-row gap-4 items-center justify-center mb-2">
              <h1 className="text-2xl text-gray-200 text-center">Dinner</h1>
              <img className="" src={dinner} alt="" />
            </div>
            
            <Dinner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
