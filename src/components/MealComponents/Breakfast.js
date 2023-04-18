import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
} from "@chakra-ui/react";
import breakfast from "../../images/breakfast.png";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Breakfast = () => {
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(15px) hue-rotate(10deg)"
    />
  );

  const {
    isOpen: isMainOpen,
    onOpen: onMainOpen,
    onClose: onMainClose,
  } = useDisclosure();

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [weight, setWeight] = useState();
  const [name, setName] = useState();
  const [data, setData]=useState([])
  const breakfastCollectionRef = collection(db, "breakfast");

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12f7d92fcdmshb29dc70d54946e3p182334jsnd9a69db0fb7a",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=%20${weight}g%20${name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) =>{
      event.preventDefault()
      getData()
      addFood()
      
  }

  const addFood = () => {
      addDoc(breakfastCollectionRef, {
        title: data[0].name,
        size: Number(data[0].serving_size_g),
        calories: Number(data[0].calories),

      })
  }
 
  return (
    <div className=" bg-gray-800 border border-gray-500 rounded-lg pb-24 pt-7 px-4 w-1/2">
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <h1 className="text-2xl text-gray-200 text-center">Breakfast</h1>
        <img src={breakfast} alt="" />
      </div>
      <button
        className="text-sm bg-blue-700 my-4 ml-4 py-2 px-3 rounded-lg hover:bg-blue-600 text-white md:text-lg"
        onClick={onMainOpen}
      >
        <i class="bi bi-plus"></i> food
      </button>
      <div className="mt-5 w-full px-4">
        <div className="text-lg flex flex-row justify-between text-gray-200 border py-2 px-2 rounded-lg border-gray-300">
          <div>
            <h2>{}</h2>
          </div>
          <div>Cals/protein/fat/carbs</div>
        </div>
        <Modal
          isCentered
          isOpen={isMainOpen}
          onClose={onMainClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => {
                    onMainClose();
                  }}
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <h1 className="text-gray-200 text-xl text-center my-3">
                Add food
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5 items-center">
                <div className="flex flex-row gap-4 justify-center">
                  <input
                    className="bg-gray-700 rounded-md w-1/4  p-2 text-white"
                    type="number"
                    placeholder="Weight (gr)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <input
                    className="bg-gray-700 rounded-md w-2/5  p-2 text-white"
                    placeholder="Food name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <button type="submit" className=" bg-emerald-700 py-2 px-3 text-gray-200 rounded-lg hover:bg-emerald-600">
                  Save
                </button>
              </form>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Breakfast;
