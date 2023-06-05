import React, { useState } from "react";
import "./Calculators.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Tdee = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [BMR, setBMR] = useState("");
  const [TDEE, setTDEE] = useState();
  const [deficit, setDeficit] = useState("");

  const calculateBMR = () => {
    switch (gender) {
      case "Male":
        setBMR(655 + 9.6 * weight + 1.8 * height - 4.7 * age);
        break;
      case "Female":
        setBMR(66 + 13.7 * weight + 5 * height - 6.8 * age);
        break;
      default:
        console.log("No gender was entered!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateBMR();
  };

  const clear = () => {
    setGender("");
    setAge("");
    setWeight("");
    setHeight("");
  };

  return (
    <>
      <div className=" container mx-auto my-10">
        <div className="flex flex-col gap-3 px-3">
          <h1 className="text-gray-300 text-xl">
            Learn How Many Calories You Burn Every Day
          </h1>
          <h2 className="text-gray-300 text-lg">
            Use the TDEE calculator to learn your Total Daily Energy
            Expenditure, a measure of how many calories you burn per day. This
            calorie calculator will also display your BMI, BMR, Macros & many
            other useful statistics!
          </h2>
          <div className=" w-full self-center bg-gray-800 border border-gray-500 py-5 px-4 my-4 rounded-lg flex flex-col items-center md:w-1/2 ">
            <form onSubmit={handleSubmit} className=" my-7">
              <div className="mb-3 text-gray-300">Gender:</div>
              <div className=" space-x-1 text-gray-300">
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="Male">Male</label>
              </div>
              <div className=" space-x-1 text-gray-300 mb-7">
                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="Female">Female</label>
              </div>
              <div class="group">
                <input
                  className="body-input"
                  type="text"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  max="99"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="body-label">Age</label>
              </div>

              <div class="group">
                <input
                  className="body-input"
                  type="text"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="body-label">Weight</label>
              </div>
              <div class="group">
                <input
                  className="body-input"
                  type="text"
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="body-label">Height</label>
              </div>
              <div className=" my-10">
                <div className="mb-3 text-gray-300">Activity:</div>
                <select
                  style={{ backgroundColor: "#1f2937" }}
                  onChange={(e) => setActivity(e.target.value)}
                  className=" w-fit  p-2 rounded-md border  cursor-pointer text-gray-300 text-sm md:w-auto md:text-lg"
                  value={activity}
                >
                  <option value={1.2}>Sedentary</option>
                  <option value={1.375}>Light exercise(1/2 days a week)</option>
                  <option value={1.55}>
                    Moderate exercise(3/5 days a week)
                  </option>
                  <option value={1.725}>Heavy exercise(6/7 days a week)</option>
                  <option value={1.9}>Extremly active(2x per day)</option>
                </select>
              </div>
              <button
                type="submit"
                className=" bg-teal-700 text-white rounded-lg hover:bg-teal-600 py-2 px-3"
              >
                Calculate
              </button>
            </form>
          </div>
        </div>
      </div>
      {BMR ? (
        <div className=" hidden md:flex flex-col gap-5 mx-auto my-7  bg-gray-800 border border-gray-500 shadow-sm rounded-lg py-5 px-5 w-fit  text-xl ">
          <div className="flex flex-row gap-5 text-gray-800 text-center ">
            <div className=" bg-blue-600 py-2 px-3  rounded-md  text-white w-24">
              TDEE
            </div>
            <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-300">
              <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg ">
                Maintaining weight: {Math.round(BMR * activity)} cal
              </span>
              <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg">
                Losing weight:{" "}
                {Math.round(BMR * activity - BMR * activity * 0.2)} cal
              </span>
              <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg">
                Gaining weight: {Math.round(BMR * activity + 300)} cal
              </span>
            </div>
          </div>
          <div className="flex flex-row  gap-5 text-white text-center ">
            <div className=" bg-red-600 py-2 px-3  rounded-md w-24 text-white">
              Protein{" "}
            </div>
            <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-300">
              <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">
                Maintaining weight: {Math.round(weight * 2)} gr{" "}
              </span>
              <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">
                Losing weight: {Math.round(weight * 2.5)} gr{" "}
              </span>
              <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">
                Gaining weight: {Math.round(weight * 2.2)} gr{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 text-white text-center  ">
            <div className=" bg-emerald-600 py-2 px-3  rounded-md w-24 text-white">
              Fat{" "}
            </div>
            <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-300">
              <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">
                Maintaining weight: {Math.round(weight * 0.95)} gr
              </span>
              <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">
                Losing weight: {Math.round(weight * 1.1)} gr
              </span>
              <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">
                Gaining weight: {Math.round(weight * 1)} gr
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center text-white text-center ">
            <div className=" bg-yellow-600 py-2 px-3 rounded-md w-24 text-white">
              Carbs{" "}
            </div>
            <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-300">
              <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">
                Maintaining weight:{" "}
                {Math.round(
                  (BMR * activity - weight * 2 * 4 - weight * 1 * 9) / 4
                )}{" "}
                gr
              </span>
              <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">
                Losing weight:{" "}
                {Math.round(
                  (BMR * activity -
                    BMR * activity * 0.2 -
                    weight * 2.2 * 4 -
                    weight * 1.2 * 9) /
                    4
                )}{" "}
                gr
              </span>
              <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">
                Gaining weight:{" "}
                {Math.round(
                  (BMR * activity + 300 - weight * 2.5 * 4 - weight * 1.1 * 9) /
                    4
                )}{" "}
                gr
              </span>
            </div>
          </div>
        </div>
      ) : null}
      

      {BMR ? (
        <div className="text-white my-7 mx-auto w-3/4  md:hidden">
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            width={"100%"}
            mx={"auto"}
            py={"5px"}
          >
            <AccordionItem border={"none"} marginBottom={"5px"}>
              <div>
                <AccordionButton
                  bg={"blue.700"}
                  _expanded={{ bg: "blue.600" }}
                  _hover={{ bg: "blue.600" }}
                  borderRadius={"5px"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    TDEE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </div>
              <AccordionPanel pb={4} color="gray.300">
                <Box>Maintaining weight: {Math.round(BMR * activity)} cal</Box>
                <Box>
                  Losing weight:{" "}
                  {Math.round(BMR * activity - BMR * activity * 0.2)} cal
                </Box>
                <Box>
                  Gaining weight: {Math.round(BMR * activity + 300)} cal
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"} marginBottom={"5px"}>
              <div>
                <AccordionButton
                  bg={"red.700"}
                  _expanded={{ bg: "red.600" }}
                  _hover={{ bg: "red.600" }}
                  borderRadius={"5px"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Protein
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </div>
              <AccordionPanel pb={4} color="gray.300">
                <Box>Maintaining weight: {Math.round(weight * 2)} gr</Box>
                <Box>Losing weight: {Math.round(weight * 2.5)} gr</Box>
                <Box>Gaining weight: {Math.round(weight * 2.5)} gr </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={"none"} marginBottom={"5px"}>
              <div>
                <AccordionButton
                  bg={"teal.600"}
                  _expanded={{ bg: "teal.500" }}
                  _hover={{ bg: "teal.500" }}
                  borderRadius={"5px"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Fat
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </div>
              <AccordionPanel pb={4} color="gray.300">
                <Box>Maintaining weight: {Math.round(weight * 0.95)} gr</Box>
                <Box>Losing weight: {Math.round(weight * 1.1)} gr</Box>
                <Box>Gaining weight: {Math.round(weight * 1)} gr </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={"none"} marginBottom={"5px"}>
              <div>
                <AccordionButton
                  bg={"yellow.600"}
                  _expanded={{ bg: "yellow.500" }}
                  _hover={{ bg: "yellow.500" }}
                  borderRadius={"5px"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Carbs
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </div>
              <AccordionPanel pb={4} color="gray.300">
                <Box>
                  Maintaining weight:{" "}
                  {Math.round(
                    (BMR * activity - weight * 2 * 4 - weight * 1 * 9) / 4
                  )}{" "}
                  gr
                </Box>
                <Box>
                  Losing weight:{" "}
                  {Math.round(
                    (BMR * activity -
                      BMR * activity * 0.2 -
                      weight * 2.2 * 4 -
                      weight * 1.2 * 9) /
                      4
                  )}{" "}
                  gr
                </Box>
                <Box>
                  Gaining weight:{" "}
                  {Math.round(
                    (BMR * activity +
                      300 -
                      weight * 2.5 * 4 -
                      weight * 1.1 * 9) /
                      4
                  )}{" "}
                  gr{" "}
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      ) : null}
    </>
  );
};

export default Tdee;
