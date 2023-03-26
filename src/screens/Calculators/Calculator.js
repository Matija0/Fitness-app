import React, { useState } from "react";

const Calculator = () => {
  const [lift, setLift] = useState();
  const [reps, setReps] = useState();
  const [unit, setUnit] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    switch (reps) {
      case "2":
        setResult(lift * 1.05);
        break;
      case "3":
        setResult(lift * 1.08);
        break;
      case "4":
        setResult(lift * 1.12);
        break;
      case "5":
        setResult(lift * 1.15);
        break;
      case "6":
        setResult(lift * 1.18);
        break;
      case "7":
        setResult(lift * 1.2);
        break;
      case "8":
        setResult(lift * 1.25);
        break;
      case "9":
        setResult(lift * 1.3);
        break;
      case "10":
        setResult(lift * 1.33);
        break;
      default:
        console.log("No reps entered!");
    }
  };

  const clear = () => {
    setLift("");
    setReps("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculate();
    clear();
    console.log("WERKS!!")
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="border py-7 px-5 rounded-xl">
        <div className="text-white my-10">
          <h1 style={{ fontWeight: "600" }} className="text-2xl mb-4">
            One Rep Max Calculator
          </h1>
          <p className="text-lg">
            Calculate your one-rep max (1RM) for any lift. Your one-rep max is
            the max weight you can lift for a single repetition for a given
            exercise.{" "}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="text-white flex flex-col items-center gap-4 mt-5"
        >
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-row">
              <input
                type="number"
                id="lift"
                placeholder="Enter Lift Weight"
                className=" bg-gray-800 p-2 rounded-sm text-white border"
                onChange={(e) => setLift(e.target.value)}
              />
              <select
                className=" bg-gray-800 text-white border rounded-sm"
                onChange={(e) => setUnit(e.target.value)}
              >
                <option>kg</option>
                <option>lb</option>
              </select>
            </div>
            <div className=" flex flex-row mr-3">
              <input
                type="number"
                id="reps"
                placeholder="Enter Repetitions"
                className=" bg-gray-800  p-2 rounded-sm text-white border"
                min="1"
                max="10"
                onChange={(e) => setReps(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" bg-red-900 border-none rounded-lg text-white py-2 px-3 hover:bg-red-800"
            >
              Calculate one rep max
            </button>
          </div>
        </form>
      </div>
      
        {result ? (
          <div className=" border p-5 text-white my-4 rounded-xl">
          <h1 className="text-xl">
            Your one-rep max is: {Math.round(result)}
            <span className="ml-1">{unit}</span>
          </h1>
          </div>
        ) : null}
     
     
    </div>
  );
};

export default Calculator;
