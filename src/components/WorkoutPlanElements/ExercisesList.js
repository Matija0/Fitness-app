import React from "react";


const ExercisesList = (props) => {









  return (
    <div style={{ maxHeight: "390px" }} className="flex flex-col gap-4 text-black bg-gray-300 rounded-md">
      <img style={{ maxWidth: "200px", borderRadius: "5px" }} src={props.item.gifUrl} alt="" />
      <div className="flex flex-col gap-3 pl-2">
        <h1 className=" h-14 text-lg">{props.item.name}</h1>
        <h2 className="text-sm font-bold mt-2">Bodypart: <span className="font-normal text-red-800">{props.item.bodyPart}</span></h2>
      </div>
      <button className="text-gray-900  w-1/2 mb-2 self-center text-2xl border-2 border-gray-900 font-extrabold rounded-md mt-auto" onClick={props.addExercise}><i class="bi bi-plus-lg"></i></button>
    </div>
  );
};

export default ExercisesList;

