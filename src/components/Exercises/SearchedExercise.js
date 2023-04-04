import React from "react";

const SearchedExercise = ({ card }) => {
  return (
    <>
      {card.map((item) => {
        return (
          <div style={{maxHeight: "390px"}} className="flex flex-col gap-4 text-black bg-slate-400" key={item.id}>
            <img src={item.gifUrl} alt=""/>
            <h1 className="text-lg">{item.name}</h1>
            <h2 className="text-sm">Bodypart: {item.bodyPart}</h2>
            <button className="text-gray-200 text-lg py-1 px-2 bg-green-700 hover:bg-green-600 mt-auto"><i class="bi bi-plus-square"></i></button>
          </div>
        );
      })}
    </>
  );
};

export default SearchedExercise;
