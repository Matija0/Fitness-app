import React, { useState } from "react";
import "./Calculators.css";
import bmi from "../../images/bmi_chart.jpg"

const Bodyweight = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState()
  const [result, setResult] = useState()
  const [BMI, setBMI] = useState()
  const calculateIdealBW = () => {
    if (gender === "Male") {
      setResult(50 + (0.91 * (height - 152.4)))
    } else {
      setResult(45.5 + (0.91 * (height - 152.4)))
    }
  }

  const calculateBMI = () => {
    let square = Math.pow(height, 2)
    setBMI(weight / (square * 0.0001))
    console.log(weight, "w")
    console.log(height, "h")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateIdealBW();
    calculateBMI();


  };
  return (
    <div className="container mx-auto mt-10 grid grid-cols-2 gap-4">
      <div className="p-3">
        <h1 className='text-xl text-white'>Calculate your BMI and ideal bodyweight for your height</h1>
        <p className='text-lg text-white'>Maintaning ideal bodyweight is beneficial for your long term health</p>

        <form onSubmit={handleSubmit} className=" my-7 ml-4">
          <div className="text-white">
            <input type="radio" id="Male" name="gender" value="Male" className="mr-2" onChange={e => setGender(e.target.value)} />
            <label for="Male">Male</label>
          </div>
          <div className="text-white mb-7">
            <input type="radio" id="Female" name="gender" value="Female" className="mr-2" onChange={e => setGender(e.target.value)} />
            <label for="Female">Female</label>
          </div>
          <div class="group">
            <input className="body-input" type="text" required onChange={e => setWeight(e.target.value)} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Weight</label>
          </div>

          <div class="group">
            <input className="body-input" type="text" required onChange={e => setHeight(e.target.value)} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Height</label>
          </div>
          <button type="submit" className=" bg-blue-600 text-white rounded-lg hover:bg-blue-500 py-2 px-3">Calculate</button>
        </form>
        {result ? (<div className=" w-fit text-white flex flex-col gap-3 my-5">
          <span className="border-2 border-gray-500 p-3 rounded-md">Your BMI is: {BMI.toFixed(2)}</span>
          <span className="border-2 border-gray-500 p-3 rounded-md">Your ideal bodyweight is: {Math.round(result)} kg</span>
        </div>) : null}
      </div>
      <div className="text-white p-3">
        <img className=" h-3/4 rounded-md" src={""} alt="Chart with bmi" />
      </div>
    </div>
  );
};

export default Bodyweight;
