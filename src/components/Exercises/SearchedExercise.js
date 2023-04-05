import React, { useState } from "react";

const SearchedExercise = ({ card }) => {


  return (
    <>
      {card.map((item) => {
        return (
          <div style={{ maxHeight: "390px" }} className="flex flex-col gap-4 text-gray-900 bg-slate-400" key={item.id}>
            <img style={{ maxWidth: "200px" }} src={item.gifUrl} alt="" />
            <div className="flex flex-col gap-5  px-5">
              <h1 className=" h-14 text-lg">{item.name}</h1>
              <h2 className="text-sm font-bold mt-2">Bodypart: <span className="font-normal text-red-800">{item.bodyPart}</span></h2>
            </div>
            <button className="text-gray-200 text-lg py-1 px-2 bg-green-700 hover:bg-green-600 mt-auto"><i class="bi bi-plus-square"></i></button>
          </div>
        );
      })}
    </>
  );
};

export default SearchedExercise;

