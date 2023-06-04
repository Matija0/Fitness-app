import {
  CircularProgress,
  CircularProgressLabel,
  Modal,
  ModalContent,
  ModalOverlay,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";
import {
  collection,
  doc,
 
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Input from "./Input";

const DashBoard = () => {
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

  const [inputData, setData] = useState([]);

  const [statsData, setStatsData] = useState([]);
  const inputCollectionRef = collection(db, "input");
  const currentstatsRef = collection(db, "currentstats");

  const updateStats = async () => {
    const statsDoc = doc(db, "currentstats", `${auth.currentUser.uid}`);
    const newFields = {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    };
    await updateDoc(statsDoc, newFields);
  };

  const reset = () => {
    updateStats();
  };

  useEffect(() => {
    const input = onSnapshot(inputCollectionRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if(auth.currentUser.uid==doc.data().userId){
          items.push({ ...doc.data(), id: doc.id });
        }
        
      });

      setData(items);
    });

    const current = onSnapshot(currentstatsRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if(auth.currentUser.uid==doc.data().userId){
          items.push({ ...doc.data(), id: doc.id });
        }
      });

      setStatsData(items);
    });

    return () => {
      input();
      current();
    };
  }, []);

  const count1 = inputData.map((item) => {
    return item.tdee;
  });

  const count2 = statsData.map((item) => {
    return item.calories;
  });

  const carbCount = statsData.map((item) => {
    return item.carbs;
  });

  const carbTotal = inputData.map((item) => {
    return item.carbs;
  });

  const protCount = statsData.map((item) => {
    return item.protein;
  });

  const protTotal = inputData.map((item) => {
    return item.protein;
  });

  const fatCount = statsData.map((item) => {
    return item.fat;
  });

  const fatTotal = inputData.map((item) => {
    return item.fat;
  });

  let res = count1[0] - count2[0];

  return (
    <div className="text-gray-300 bg-gray-800 border border-gray-500 rounded-lg  py-4 px-3">
      <div className="flex gap-5 ml-2">
        <button className=" text-gray-200 bg-none text-2xl" onClick={reset}>
          <i class="bi bi-journal-x"></i>
        </button>
        <button className="text-gray-200 bg-none text-2xl" onClick={onMainOpen}>
          <i class="bi bi-arrow-clockwise"></i>
        </button>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-lg font-bold">{Math.round(count2)}</h1>
            <span className="text-sm">Eaten</span>
          </div>
          <div>
            <CircularProgress
              value={Math.round(count2)}
              max={count1}
              color="purple.500"
              size={"150px"}
            >
              <CircularProgressLabel color={"gray.200"} fontWeight={"bold"}>
                <div className="text-lg text-gray-300">{Math.round(res)}</div>{" "}
                <span className="text-sm text-gray-300 font-normal">
                  Remaining
                </span>
              </CircularProgressLabel>
            </CircularProgress>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">{Math.round(count1)}</h1>
            <span>Total</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full justify-center  mx-auto md:w-2/4 ">
          <div className="flex flex-col gap-3 w-1/3">
            <span className="text-sm">Carbs</span>
            <Progress
              value={Math.round(carbCount)}
              max={carbTotal}
              size="md"
              colorScheme="yellow"
              borderRadius={"7px"}
            />
            <span className="text-lg font-bold">
              {Math.round(carbCount)}/{carbTotal}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <span className="text-sm">Protein</span>
            <Progress
              value={Math.round(protCount)}
              max={protTotal}
              size="md"
              colorScheme="red"
              borderRadius={"7px"}
            />
            <span className="text-lg font-bold">
              {Math.round(protCount)}/{protTotal}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <span className="text-sm">Fat</span>
            <Progress
              value={Math.round(fatCount)}
              max={fatTotal}
              size="md"
              colorScheme="green"
              borderRadius={"7px"}
            />
            <span className="text-lg font-bold">
              {Math.round(fatCount)}/{fatTotal}
            </span>
          </div>
        </div>
      </div>
      <Modal isCentered isOpen={isMainOpen} onClose={onMainClose} size={"2xl"}>
        {overlay}
        <ModalContent bg="gray.700">
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
          <div className=" my-7">
            <Input />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DashBoard;
