import React, { useEffect, useState } from "react";
import DashBoard from "../../components/MealComponents/DashBoard";
import { Link } from "react-router-dom";
import Breakfast from "../../components/MealComponents/Breakfast";
import Lunch from "../../components/MealComponents/Lunch";
import Snack from "../../components/MealComponents/Snack";
import Dinner from "../../components/MealComponents/Dinner";
import Input from "../../components/MealComponents/Input";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  
} from "firebase/firestore";



const Meals = () => {

  const [inputData, setData] = useState([])
  const inputCollectionRef = collection(db, "input");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(inputCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, [])


  return (
    <div style={{maxWidth: "1440px"}} className="my-20 mx-auto ">

      {inputData ?


        (<div>
          <div className=" my-4">
            <h1 className=" text-2xl text-center my-4 text-gray-200 font-bold md:text-start">
              Today
            </h1>

          </div>
          <div>
            <DashBoard />
            <div className=" my-5 flex flex-col gap-3 md:flex-row">
              <Breakfast />
              <Lunch />
            </div>

            <div className="my-5 flex flex-col gap-3 md:flex-row">
              <Snack />
              <Dinner />
            </div>
          </div>
        </div>) :
        (
          <>
            <h1 className='text-gray-200 text-xl my-4'>To log calories enter your TDEE and macros</h1>
            <h2 className="text-xl text-gray-300 mb-4">
              You can calculate your daily TDEE and macros{" "}
              <Link to={"/tdee"}>
                <span className=" text-sky-600 hover:underline decoration-sky-600">
                  here
                </span>
              </Link>
            </h2>
            <div className="py-7 px-5 bg-gray-800 border border-gray-500  rounded-lg">

              <Input />
            </div>
          </>
        )

      }

    </div>
  );
};

export default Meals;
