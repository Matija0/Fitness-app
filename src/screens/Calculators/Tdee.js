import React, { useState } from "react";


const Tdee = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [BMR, setBMR] = useState("");
  const [TDEE, setTDEE] = useState("");

  const calculateBMR = () => {
    if(gender==="Female"){
      setBMR(655 +(9.6*weight)+(1.8*height)-(4.7*age))
    }else{
      setBMR(66+(13.7*weight)+(5*height)-(6.8*age))
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateBMR();
    setTDEE(BMR*activity);
    
  };

 
  return (
    <div className=" container mx-auto my-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-xl">
          Learn How Many Calories You Burn Every Day
        </h1>
        <h2 className="text-white text-sm">
          Use the TDEE calculator to learn your Total Daily Energy Expenditure,
          a measure of how many calories you burn per day. This calorie
          calculator will also display your BMI, BMR, Macros & many other useful
          statistics!
        </h2>
        <div className="w-1/2 self-center bg-gray-700 py-5 px-4 rounded-lg">
          <form onSubmit={handleSubmit} className="text-white">
            <div className="mb-3">Gender</div>
            <div className=" space-x-1">
              <input type="radio" id="Male" name="gender" value="Male" onChange={e => setGender(e.target.value)}/>
              <label for="Male">Male</label>
            </div>
            <div className=" space-x-1">
              <input type="radio" id="Female" name="gender" value="Female" onChange={e => setGender(e.target.value)} />
              <label for="Female">Female</label>
            </div>
            <div className="my-3">Age</div>
            <input
              type="number"
              className=" bg-gray-800  rounded-md py-1 px-2 focus:ring-2 focus:outline-none focus:ring-primary-300"
              onChange={e=> setAge(e.target.value)}
            />
            <div className="my-3">Weight</div>
            <input
              type="number"
              className=" bg-gray-800  rounded-md py-1 px-2 focus:ring-2 focus:outline-none focus:ring-primary-300"
              onChange={e=> setWeight(e.target.value)}
            />
            <div className="my-3">Height</div>
            <input
              type="number"
              className=" bg-gray-800  rounded-md py-1 px-2 focus:ring-2 focus:outline-none focus:ring-primary-300"
              onChange={e=> setHeight(e.target.value)}
            />
            <div className="my-3">
              <div className="mb-3">Activity</div>
              <select
                onChange={(e) => setActivity(e.target.value)}
                className=" bg-gray-800 p-2 rounded-sm text-white border"
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
              className=" bg-red-900 py-2 px-3 rounded-lg hover:bg-red-800"
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
      {TDEE ? (
          <div className=" bg-white border p-5 text-black my-7 rounded-xl">
          <h1 className="text-xl">
            Your Total Daily Energy Expenditure is {Math.round(TDEE)} calories
            
          </h1>
          </div>
        ) : null}
      {console.log(activity, "acti")}
    </div>
  );
};

export default Tdee;
