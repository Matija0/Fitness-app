import React, { useEffect, useState } from "react";
import "./Main.css";
import { auth, db } from "../../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/react";

const Main = () => {
  const [currentDay, setCurrentDay] = useState();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [statsData, setStatsData] = useState([]);
  const inputCollectionRef = collection(db, "input");
  const currentstatsRef = collection(db, "currentstats");
  const d = new Date();

  const dbCollectionRef = collection(
    db,
    `${weekday[d.getDay()].toLowerCase()}`
  );

  useEffect(() => {
    const getDay = () => {
      setCurrentDay(weekday[d.getDay()]);
    };

    const unsub = onSnapshot(dbCollectionRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });

      setData(items);
    });

    const input = onSnapshot(inputCollectionRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if (auth.currentUser.uid == doc.data().userId) {
          items.push({ ...doc.data(), id: doc.id });
        }
      });

      setInputData(items);
    });

    const current = onSnapshot(currentstatsRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        if (auth.currentUser.uid == doc.data().userId) {
          items.push({ ...doc.data(), id: doc.id });
        }
      });

      setStatsData(items);
    });

    return () => {
      unsub();
      getDay();
      input();
      current();
    };
  }, []);
  data.sort((a, b) => a.time - b.time);

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
    <div
      id="container"
      className=" w-full flex flex-col gap-5 md:flex md:flex-row md:gap-5"
    >
      <div
        id="workoutplan-el"
        className="bg-gray-800 border  border-gray-500 w-full  rounded-lg py-2 md:w-3/5"
      >
        <h1 className="text-gray-200 text-2xl font-semibold text-center">
          {currentDay}
        </h1>
        {data.length == 0 ? (
          <h2 className=" text-2xl text-gray-200 font-light text-center mt-20">
            Rest Day!
          </h2>
        ) : (
          <div className="mt-7">
            <div className="mt-7 w-full  px-4 md:w-3/4">
              {data.map((exercise) => {
                return (
                  <Accordion
                    defaultIndex={[1]}
                    allowMultiple
                    backgroundColor={"blackAlpha.600"}
                    borderRadius={"5px"}
                  >
                    <AccordionItem border={"none"} marginBottom={"15px"}>
                      <h2>
                        <AccordionButton
                          bg={"none"}
                          _expanded={{
                            bg: "blackAlpha.400",
                            borderRadius: "5px",
                          }}
                          _hover={{ bg: "blackAlpha.400", borderRadius: "5px" }}
                          paddingY={"10px"}
                          color={"gray.300"}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign={"left"}
                            color={"gray.200"}
                            fontSize={"lg"}
                          >
                            <div className=" ml-5 text-sm flex flex-row gap-7 md:text-lg">
                              <h1>{exercise.title}</h1>
                              {exercise.sets !== undefined ? (
                                <span className="text-white">
                                  {JSON.parse(exercise.sets).length}x
                                </span>
                              ) : null}{" "}
                            </div>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className=" my-4">
                          {exercise.sets != undefined ? (
                            <div className="flex flex-col items-center gap-4">
                              {JSON.parse(exercise.sets).map((set, index) => {
                                return (
                                  <div
                                    className="text-gray-300 w-full font-light py-2 px-7  flex flex-row  justify-center items-center border-b border-gray-400"
                                    key={index}
                                  >
                                    <div className="text-gray-400 text-sm w-1/3 text-center">
                                      SET {index + 1}{" "}
                                    </div>
                                    <div className="text-base w-1/3 text-center md:text-lg">
                                      {" "}
                                      {set.num} reps
                                    </div>
                                    <div className="text-base w-1/3 text-center md:text-lg">
                                      {set.weight} kg
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div
        id="dashboard-el"
        className=" w-full bg-gray-800 border border-gray-500   rounded-lg md:w-2/5"
      >
        <div className="text-gray-300 mt-0 rounded-lg  py-4 px-3 md:mt-20">
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
                    <div className="text-lg text-gray-300">
                      {Math.round(res)}
                    </div>{" "}
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
            <div className="flex flex-row gap-4 w-full justify-center mx-auto px-2">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
