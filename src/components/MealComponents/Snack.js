import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  useToast,
} from "@chakra-ui/react";
import snack from "../../images/snack.png";
import { auth, db } from "../../firebase-config";
import {
  collection,
  
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  
  increment,
  onSnapshot,
} from "firebase/firestore";
import { options } from "../../utils/fetchNutritionData";

import FoodItem from "./FoodItem";

const Snack = () => {
  

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
  const [data, setData] = useState([]);
  const [snackData, setSnacktData] = useState([]);
  const snackCollectionRef = collection(db, "snack");
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

  const updateStats = async () => {
    const statsDoc = doc(db, "currentstats", `${auth.currentUser.uid}`);
    const newFields = {
      calories: increment(Math.round(Number(data[0].calories))),
      carbs: increment(Math.round(Number(data[0].carbohydrates_total_g))),
      fat: increment(Math.round(Number(data[0].fat_total_g))),
      protein: increment(Math.round(Number(data[0].protein_g))),
    };
    await updateDoc(statsDoc, newFields);
  };

  const addFood = async () => {
    await addDoc(snackCollectionRef, {
      name: data[0].name,
      calories: data[0].calories,
      carbohydrates: data[0].carbohydrates_total_g,
      fat: data[0].fat_total_g,
      protein: data[0].protein_g,
      size: data[0].serving_size_g,
      time: time,
      userId: auth.currentUser.uid
    });

    updateStats();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAPIData();
    clear();
  };

  useEffect(() => {
    const unsub = onSnapshot(snackCollectionRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if(auth.currentUser.uid==doc.data().userId){
          items.push({ ...doc.data(), id: doc.id });
        }
      });

      setSnacktData(items);
    });

    return () => unsub();
  }, []);

  snackData.sort((a, b) => a.time - b.time);

  const clear = () => {
    setWeight("");
    setName("");
  };

  const deleteItem = async (id, calories, carbohydrates, fat, protein) => {
    const foodDoc = doc(db, "snack", id);
    await deleteDoc(foodDoc);
    const statsDoc = doc(db, "currentstats", `${auth.currentUser.uid}`);
    const newFields = {
      calories: increment(-calories),
      carbs: increment(-carbohydrates),
      fat: increment(-fat),
      protein: increment(-protein),
    };
    await updateDoc(statsDoc, newFields);
  };

  const toast = useToast();
  const notif = () => {
    toast({
      title: "Food saved!",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div className=" bg-gray-800 border border-gray-500 rounded-lg pb-24 pt-7 px-4 w-full lg:w-1/2">
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <h1 className="text-2xl text-gray-200 text-center">Snack</h1>
        <img src={snack} alt="" />
      </div>
      <button
        className="text-sm bg-blue-700 my-4 ml-4 py-2 px-3 rounded-lg hover:bg-blue-600 text-white md:text-lg"
        onClick={onMainOpen}
      >
        <i class="bi bi-plus"></i> food
      </button>
      <div className="mt-5 w-full">
        {snackData.map((item) => {
          return (
            <div className="text-lg mb-4 flex flex-row  text-gray-200 border-b py-2 px-2  border-gray-400 ">
              <div className=" w-1/4">
                <h2 className=" text-sm font-semibold md:text-base">
                  {item.name}
                </h2>
              </div>
              <div className="flex flex-row justify-between w-9/12 font-bold text-sm md:text-base">
                <span className=" text-sky-500">{item.calories} cals</span>
                <span className=" text-red-500">{item.protein} gr</span>
                <span className=" text-yellow-500">
                  {item.carbohydrates} gr
                </span>
                <span className=" text-emerald-500">{item.fat} gr</span>
                <button
                  className="  text-gray-200 text-sm  w-fit"
                  onClick={() => {
                    deleteItem(
                      item.id,
                      item.calories,
                      item.carbohydrates,
                      item.fat,
                      item.protein
                    );
                  }}
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal isCentered isOpen={isMainOpen} onClose={onMainClose} size={"2xl"}>
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
            <h1 className="text-gray-200 text-xl text-center my-3">Add food</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 my-5 items-center"
            >
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
              <button
                type="submit"
                className=" bg-gray-200 py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                Search <i class="bi bi-search"></i>
              </button>
            </form>
          </div>

          <div className="flex mx-auto">
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <FoodItem
                    item={item}
                    addFood={() => {
                      addFood(item.name);
                      notif()
                    }}
                  />
                </div>
              );
            })}
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Snack;
