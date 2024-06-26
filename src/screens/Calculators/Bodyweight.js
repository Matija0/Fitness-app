import React, { useState } from "react";
import "./Calculators.css";
import { motion } from "framer-motion"

const Bodyweight = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState()
  const [result, setResult] = useState()
  const [BMI, setBMI] = useState()
  const [percentage, setPercentage] = useState(0)


  const calculateIdealBW = () => {
    if (gender === "Male") {
      setResult(50 + (0.91 * (height - 152.4)))
    } else {
      setResult(45.5 + (0.91 * (height - 152.4)))
    }
  }

  const calculateBMI = () => {
    let square = Math.pow(height, 2)
    setBMI((weight / (square * 0.0001)).toFixed(1))


  }



  const handleSubmit = (event) => {
    event.preventDefault();
    calculateIdealBW();
    calculateBMI();
    getPercentage();
    clear();
  };

  const getPercentage = () => {
    let square = Math.pow(height, 2)
    let val = (weight / (square * 0.0001)).toFixed(1)
    if (val <= 18.5) {
      setPercentage(8)
    } else if (val > 18.5 && val <= 24.9) {
      setPercentage(27)
    } else if (val >= 25 && val <= 29.9) {
      setPercentage(48)
    } else if (val >= 30 && val >= 34.9) {
      setPercentage(68)
    } else {
      setPercentage(87)
    }

  }

  const clear = () => {
    setGender("")
    setHeight("")
    setWeight("")
  }

  return (
    <div className="container mx-auto my-14 flex flex-col-reverse gap-2 md:flex-row md:gap-7">
      <div className="p-4 bg-gray-800 border border-gray-500 shadow-sm rounded-lg">
        <h1 className='text-base text-gray-300 mb-3 md:text-xl'>Calculate your BMI and ideal bodyweight for your height</h1>
        <p className='text-sm text-gray-300 md:text-lg'>Maintaning ideal bodyweight is beneficial for your long term health</p>

        <form onSubmit={handleSubmit} className=" my-10 ml-4">
          <div className="text-gray-300">
            <input type="radio" id="Male" name="gender" checked={gender === 'Male'} value="Male" className="mr-2" onChange={e => setGender(e.target.value)} />
            <label for="Male">Male</label>
          </div>
          <div className="text-gray-300 mb-7">
            <input type="radio" id="Female" name="gender" checked={gender === 'Female'} value="Female" className="mr-2" onChange={e => setGender(e.target.value)} />
            <label for="Female">Female</label>
          </div>
          <div class="group">
            <input className="body-input" type="text" value={weight} required onChange={e => setWeight(e.target.value)} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Weight</label>
          </div>

          <div class="group">
            <input className="body-input" type="text" value={height} required onChange={e => setHeight(e.target.value)} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Height</label>
          </div>
          <button type="submit" className=" bg-teal-700 text-white rounded-lg hover:bg-teal-600 py-2 px-3">Calculate</button>
        </form>

      </div>
      <div className="">
        <div className="flex flex-col border border-gray-500">
          <div className="  flex flex-row">
            <div className=" w-1/5 bg-indigo-400 text-black text-xs py-2 px-2 flex flex-col justify-center md:text-lg">&lt; 18.5 <span className="text-xs text-gray-800 md:text-sm">Underweight</span> </div>
            <div className=" w-1/5 bg-emerald-400 text-black text-xs py-2  px-2 flex flex-col md:text-lg">18.5-24.9 <span className="text-xs text-gray-800  md:text-sm">Normal weight</span></div>
            <div className=" w-1/5 bg-yellow-400 text-black text-xs py-2  px-2 flex flex-col  md:text-lg"> 25-29.9 <span className="text-xs text-gray-800  md:text-sm">Overweight</span></div>
            <div className=" w-1/5 bg-orange-400 text-black text-xs py-2  px-2 flex flex-col md:text-lg"> 30-34.9 <span className="text-xs text-gray-800  md:text-sm">Obese</span></div>
            <div className=" w-1/5 bg-red-400 text-black text-xs py-2  px-2 flex flex-col justify-center md:text-lg">35 &gt; <span className="text-xs text-gray-800  md:text-sm">Extremly obese</span></div>
          </div>

          <div className=" bg-gray-800 text-4xl py-4 "><motion.div className=" text-gray-300" animate={{ x: `${percentage}%` }} transition={{ type: "tween", duration: 0.5 }}><i class="bi bi-arrow-up-square"></i></motion.div></div>
        </div>
        {result ? (<div className=" w-fit text-gray-800 flex flex-col gap-3 my-5">

          <span className="bg-gray-800 border border-gray-500  p-3 rounded-md text-xl text-gray-200">Your BMI is: {BMI}</span>
          <span className="bg-gray-800 border border-gray-500 p-3 rounded-md text-xl text-gray-200">Your ideal bodyweight is: {Math.round(result)} kg</span>
        </div>) : null}
      </div>

    </div>
  );
};

export default Bodyweight;
