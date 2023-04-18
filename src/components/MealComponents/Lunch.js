import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import lunch from "../../images/lunch.png"

const Lunch = () => {
  return (
    <div className="bg-gray-800 border border-gray-500 rounded-lg pb-24 pt-7 px-4 w-1/2">
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <h1 className="text-2xl text-gray-200 text-center">Lunch</h1>
        <img src={lunch} alt="" />
      </div>
      <button className="text-sm bg-blue-700 py-2 px-3 my-4 ml-4 rounded-lg hover:bg-blue-600 text-white md:text-lg">
          <i class="bi bi-plus"></i> food
        </button>
        <div className="mt-5 w-full px-4">
        
        <div className="text-lg flex flex-row justify-between text-gray-200 border py-2 px-2 rounded-lg border-gray-300">
          <div>
          <h2>Food name</h2>
         
          
          </div>
          <div>
          Cals/protein/fat/carbs
          
          </div>
        </div>
    </div>
    </div>
  );
};

export default Lunch;
