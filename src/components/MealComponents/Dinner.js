import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
} from "@chakra-ui/react";
import dinner from "../../images/dinner.png";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { options } from "../../utils/fetchNutritionData";

import FoodItem from "./FoodItem";

const Dinner = () => {
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
  const [data, setData] = useState([])
  const [dinnerData, setDinnerData] = useState([])
  const dinnerCollectionRef = collection(db, "dinner");
  const time = new Date();


  const getAPIData = () => {


    fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=%20${weight}g%20${name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };


  const addFood = async () => {

    await addDoc(dinnerCollectionRef, {
      name: data[0].name,
      calories: data[0].calories,
      carbohydrates: data[0].carbohydrates_total_g,
      fat: data[0].fat_total_g,
      protein: data[0].protein_g,
      size: data[0].serving_size_g,
      time: time
    });

  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getAPIData();
    clear()


  }




  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dinnerCollectionRef);
      setDinnerData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();



  }, []);

  dinnerData.sort((a, b) => a.time - b.time);

  const clear = () => {
    setWeight("")
    setName("")
  }

  const deleteItem = async (id) =>{
    const foodDoc = doc(db, "snack", id);
    await deleteDoc(foodDoc);
  }

  return (
    <div className=" bg-gray-800 border border-gray-500 rounded-lg pb-24 pt-7 px-4 w-full md:w-1/2">
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <h1 className="text-2xl text-gray-200 text-center">Breakfast</h1>
        <img src={dinner} alt="" />
      </div>
      <button
        className="text-sm bg-blue-700 my-4 ml-4 py-2 px-3 rounded-lg hover:bg-blue-600 text-white md:text-lg"
        onClick={onMainOpen}
      >
        <i class="bi bi-plus"></i> food
      </button>
      <div className="mt-5 w-full px-2">
        {dinnerData.map((item) => {
          return (
            <div className="text-lg mb-4 flex flex-row justify-between  text-gray-200 border-2 py-2 px-2 rounded-lg  border-gray-300 ">
              <div>
                <h2 className=" text-sm font-semibold md:text-lg">{item.name}</h2>
              </div>
              <div className="flex flex-row justify-between w-9/12 font-bold text-sm md:text-lg">
                <span className=" text-sky-500">{item.calories} cals</span>
                <span className=" text-red-500">{item.protein} gr</span>
                <span className=" text-yellow-500">{item.carbohydrates} gr</span>
                <span className=" text-emerald-500">{item.fat} gr</span>
              </div>
              <button
                        className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit"
                        onClick={() => { deleteItem(item.id) }}
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
            </div>
          )
        })

        }
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
                <button type="submit" className=" bg-sky-700 py-2 px-3 text-gray-200 rounded-lg hover:bg-sky-600">
                  Search
                </button>
              </form>
            </div>

            <div className="flex mx-auto">
              {
                data.map((item) => {
                  return (

                    <div key={item.id}>
                      <FoodItem
                        item={item}
                        addFood={() => {
                          addFood(
                            item.name

                          );

                        }
                        }
                      />
                    </div>

                  )
                })
              }
            </div>


          </ModalContent>
        </Modal>
      
    </div>
  );
};

export default Dinner;
