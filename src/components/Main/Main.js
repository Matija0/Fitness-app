import React, { useEffect, useState } from "react";
import "./Main.css";
import { db } from "../../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import DashBoard from "../MealComponents/DashBoard";

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

    return () => {
      unsub();
      getDay();
    };
  }, []);
  data.sort((a, b) => a.time - b.time);
  return (
    <div
      id="container"
      className=" w-full flex flex-col gap-5 md:flex md:flex-row md:gap-5"
    >
      <div
        style={{ minHeight: "500px" }}
        className="bg-gray-800 border border-gray-500 w-full  rounded-lg py-2 md:w-3/5"
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
            <div className="mt-7 w-3/4 px-4">
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
                            <div className=" ml-5 flex flex-row gap-7">
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
                                    <div className="text-lg w-1/3 text-center">
                                      {" "}
                                      {set.num} reps
                                    </div>
                                    <div className="text-lg w-1/3 text-center">
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
      <div className="w-full  rounded-lg md:w-2/5">
        <DashBoard/>
      </div>
    </div>
  );
};

export default Main;
