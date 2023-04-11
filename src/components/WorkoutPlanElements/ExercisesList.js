import React, { useState } from "react";
import { db } from "../../firebase-config"
import { collection, addDoc, doc } from "firebase/firestore"

const ExercisesList = (props) => {

  //const [exerciseData, setData] = useState([])
  //const exercisesCollectionRef= collection(db, "exercises")







  return (
    <div style={{ maxHeight: "390px" }} className="flex flex-col gap-4 text-black bg-gray-200">
      <img style={{ maxWidth: "200px" }} src={props.item.gifUrl} alt="" />
      <div className="flex flex-col gap-3 pl-2">
        <h1 className=" h-14 text-lg">{props.item.name}</h1>
        <h2 className="text-sm font-bold mt-2">Bodypart: <span className="font-normal text-red-800">{props.item.bodyPart}</span></h2>
      </div>
      <button className="text-gray-200 text-lg py-1 px-2 bg-emerald-700 hover:bg-emerald-600 mt-auto" onClick={props.addExercise}><i class="bi bi-plus-square"></i></button>
    </div>
  );
};

export default ExercisesList;

