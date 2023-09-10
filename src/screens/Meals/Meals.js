import React, { useEffect, useState } from "react";
import DashBoard from "../../components/MealComponents/DashBoard";
import { Link } from "react-router-dom";
import Breakfast from "../../components/MealComponents/Breakfast";
import Lunch from "../../components/MealComponents/Lunch";
import Snack from "../../components/MealComponents/Snack";
import Dinner from "../../components/MealComponents/Dinner";
import Input from "../../components/MealComponents/Input";
import { auth, db } from "../../firebase-config";
import { collection,  onSnapshot } from "firebase/firestore";

const Meals = () => {
  const [inputData, setData] = useState([]);
  const inputCollectionRef = collection(db, "input");

  useEffect(() => {
    const unsub = onSnapshot(inputCollectionRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if (auth.currentUser.uid == doc.data().userId) {
          items.push({ ...doc.data(), id: doc.id });
        }
      });

      setData(items);
    });

    return () => unsub();
  }, []);

  return (
    <div className="my-20 container mx-auto">
      
      {!inputData.length == 0 ? (
        <div>
          <div className=" my-4">
            <h1 className=" text-2xl text-center my-4 text-gray-200 font-bold md:text-start">
              Today
            </h1>
          </div>
          <div>
            <DashBoard />
            <div className=" my-5 flex flex-col gap-3 lg:flex-row">
              <Breakfast />
              <Lunch />
            </div>

            <div className="my-5 flex flex-col gap-3 lg:flex-row">
              <Snack />
              <Dinner />
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-base text-gray-300 mb-7 ">
            You can calculate your daily TDEE and macros{" "}
            <Link to={"/tdee"}>
              <span className=" text-sky-600 hover:underline decoration-sky-600">
                here
              </span>
            </Link>
          </h2>
          <div className=" w-full py-7 px-5 bg-gray-800 border border-gray-500  rounded-lg md:w-1/2">
            <Input />
          </div>
        </>
      )}
    </div>
  );
};

export default Meals;
