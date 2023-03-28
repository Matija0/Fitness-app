import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiMatchTip } from "react-icons/gi";


const Tdee = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [BMR, setBMR] = useState("");
  const [TDEE, setTDEE] = useState("");
  const [deficit, setDeficit] = useState("");
  const [suficit, setSuficit] = useState("");
  const [protein, setProtein] = useState("")
  const [fat, setFat] = useState("")
  const [carbs, setCarbs] = useState("")
  let prot = "";
  let f = "";
  let carb = "";


  const calculateBMR = () => {
    if (gender === "Female") {
      setBMR(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
    } else {
      setBMR(66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateBMR();
    setTDEE(BMR * activity);
    calculateDeficit();
    calculateSuficit();

  };

  const calculateDeficit = () => {
    let val = TDEE * 0.2;
    setDeficit(TDEE - val)
    console.log(TDEE, "def")
  }

  const calculateSuficit = () => {
    setSuficit(TDEE + 300)
    console.log(TDEE, "suf")
  }

  const clear = () => {

  }


  return (
    <>
      <div className=" container mx-auto my-10">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-xl">
            Learn How Many Calories You Burn Every Day
          </h1>
          <h2 className="text-white text-sm">
            Use the TDEE calculator to learn your Total Daily Energy Expenditure,
            a measure of how many calories you burn per day. This calorie
            calculator will also display your BMI, BMR, Macros & many other useful
            statistics!
          </h2>
          <div className=" w-3/4 self-center bg-gray-700 py-5 px-4 my-4 rounded-lg md:w-1/2">
            <form onSubmit={handleSubmit} className="text-white">
              <div className="mb-3">Gender</div>
              <div className=" space-x-1">
                <input type="radio" id="Male" name="gender" value="Male" onChange={e => setGender(e.target.value)} />
                <label for="Male">Male</label>
              </div>
              <div className=" space-x-1">
                <input type="radio" id="Female" name="gender" value="Female" onChange={e => setGender(e.target.value)} />
                <label for="Female">Female</label>
              </div>
              <div className="my-3">Age</div>
              <input
                type="number"
                className=" bg-gray-800 w-1/2 rounded-md py-1 px-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 md:w-1/2 md:text-lg"
                onChange={e => setAge(e.target.value)}
              />
              <div className="my-3">Weight</div>
              <input
                type="number"
                className=" bg-gray-800 w-1/2 rounded-md py-1 px-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 md:w-1/2 md:text-lg"
                onChange={e => setWeight(e.target.value)}
              />
              <div className="my-3">Height</div>
              <input
                type="number"
                className=" bg-gray-800 w-1/2 rounded-md py-1 px-2 focus:ring-2 focus:outline-none focus:ring-primary-300 md:w-1/2 md:text-lg"
                onChange={e => setHeight(e.target.value)}
              />
              <div className="my-3">
                <div className="mb-3">Activity</div>
                <select
                  onChange={(e) => setActivity(e.target.value)}
                  className=" w-fit bg-gray-800 p-2 rounded-md text-white text-sm md:w-auto md:text-lg"
                >
                  <option value={1.2}>Sedentary</option>
                  <option value={1.375}>Light exercise(1/2 days a week)</option>
                  <option value={1.55}>Moderate exercise(3/5 days a week)</option>
                  <option value={1.725}>Heavy exercise(6/7 days a week)</option>
                  <option value={1.9}>Extremly active(2x per day)</option>
                </select>
              </div>
              <button
                type="submit"
                className=" bg-red-800 py-2 px-3  hover:bg-red-700 rounded-lg"
              >
                Calculate
              </button>
            </form>
          </div>
        </div>

      </div>
      {TDEE ? (<div className=" hidden md:flex flex-col gap-5 mx-auto my-7  border-4  border-indigo-600 rounded-lg py-5 px-3 w-fit  text-xl ">
        <div className="flex flex-row gap-5 text-white text-center ">
          <div className=" bg-blue-600 py-2 px-3  rounded-md  text-white w-24">TDEE </div>
          <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-400">
          <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg ">Maintaining weight: {Math.round(TDEE)} cal</span>
          <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg">Losing weight: {Math.round(deficit)} cal</span>
          <span className=" border-2 border-blue-500 bg-none py-2 px-3 rounded-lg">Gaining weight: {Math.round(suficit)} cal</span>
          </div>
        </div>
        <div className="flex flex-row  gap-5 text-white text-center ">
          <div className=" bg-red-600 py-2 px-3  rounded-md w-24 text-white">Protein </div>
          <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-400">
          <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">Maintaining weight: {prot = Math.round(weight * 2)} gr </span>
          <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">Losing weight: {prot = Math.round(weight * 2.5)} gr </span>
          <span className=" border-2 border-red-500 py-2 px-3 rounded-lg">Gaining weight: {prot = Math.round(weight * 2.2)} gr </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5 text-white text-center  ">
          <div className=" bg-emerald-600 py-2 px-3  rounded-md w-24 text-white">Fat </div>
          <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-400">
          <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">Maintaining weight: {f = Math.round(weight * 0.95)} gr</span>
          <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">Losing weight: {f = Math.round(weight * 1.1)} gr</span>
          <span className=" border-2 border-emerald-500 py-2 px-3 rounded-lg">Gaining weight: {f = Math.round(weight * 1)} gr</span>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center text-white text-center ">
          <div className=" bg-yellow-600 py-2 px-3 rounded-md w-24 text-white">Carbs </div>
          <div className="grid grid-cols-3 gap-4 w-11/12 font-light text-lg text-gray-400">
          <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">Maintaining weight: {carb = Math.round((TDEE - (weight * 2) - (weight * 1)) / 4)} gr</span>
          <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">Losing weight: {carb = Math.round((TDEE - (weight * 2.2) - (weight * 1.2)) / 4)} gr</span>
          <span className=" border-2 border-yellow-500 py-2 px-3 rounded-lg">Gaining weight: {carb = Math.round((TDEE - (weight * 2.5) - (weight * 1.1)) / 4)} gr</span>
          </div>
        </div>
      </div>) : null}
      {console.log(activity, "acti")}
      
      {TDEE? (<div className=" mx-4 flex flex-row gap-3 mb-60  md:hidden">
        <Menu >
          <MenuButton as={Button} rightIcon={<i class="bi bi-chevron-down"></i>} bg={"blue.600"} color={"white"} _hover={{ bg: "blue.500" }} _expanded={{ bg: "blue.500" }} width={"7rem"} fontSize="sm">
            TDEE
          </MenuButton>
          <MenuList bg={"none"} border="2px" borderColor={"purple.600"} >
            <MenuItem bg={"none"} color="gray.400">Maintaining weight: {Math.round(TDEE)} cal</MenuItem>
            <MenuItem bg={"none"} color="gray.400">Losing weight: {Math.round(deficit)} cal</MenuItem>
            <MenuItem bg={"none"} color="gray.400">Gaining weight: {Math.round(suficit)} cal</MenuItem>
            
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<i class="bi bi-chevron-down"></i>} bg={"red.600"} color={"white"} _hover={{ bg: "red.500" }} _expanded={{ bg: "red.500" }} width={"7rem"}  fontSize="sm">
            P
          </MenuButton>
          <MenuList>
            <MenuItem></MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<i class="bi bi-chevron-down"></i>} bg={"teal.600"} color={"white"} _hover={{ bg: "teal.600" }} _expanded={{ bg: "teal.600" }} width={"7rem"} fontSize="sm">
            F
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<i class="bi bi-chevron-down"></i>} bg={"yellow.600"} color={"white"} _hover={{ bg: "yellow.500" }} _expanded={{ bg: "yellow.500" }} width={"7rem"} fontSize="sm">
            C
          </MenuButton>
          <MenuList _expanded={{ bg: "yellow.500" }}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>) : null}
    </>
  );
};

export default Tdee;
