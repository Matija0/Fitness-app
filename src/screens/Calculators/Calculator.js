import React, { useState } from "react";
import "./Calculators.css";

const Calculator = () => {
  const [lift, setLift] = useState();
  const [reps, setReps] = useState();
  const [unit, setUnit] = useState("kg");
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
  };

  return (
    <div className="container mx-auto my-8 grid grid-cols-1 gap-7 md:grid-cols-2">
      <div className=" py-7 px-5 bg-gray-800 border border-gray-500  rounded-lg">
        <div className="text-gray-300 mt-5 mb-14">
          <h1 className="text-lg mb-4 font-semibold md:text-xl">
            One Rep Max Calculator
          </h1>
          <p className="text-sm md:text-lg">
            Calculate your one-rep max (1RM) for any lift. Your one-rep max is
            the max weight you can lift for a single repetition for a given
            exercise.{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" my-7 ml-4">
          <div class="group">
            <input
              className="body-input"
              type="text"
              required
              onChange={(e) => setLift(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Weight of the lift</label>
          </div>

          <div class="group">
            <input
              className="body-input"
              type="text"
              required
              onChange={(e) => setReps(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="body-label">Repetitions</label>
          </div>
          <button
            type="submit"
            className=" bg-teal-700 text-white rounded-lg hover:bg-teal-600 py-2 px-3"
          >
            Calculate
          </button>
        </form>
        {result ? (
          <div className=" bg-gray-600 p-5 text-white my-4 rounded-xl w-fit">
            <h1 className="text-lg md:text-xl">
              Estimated one-rep max is: {Math.round(result)} kg
            </h1>
          </div>
        ) : null}
      </div>
      {result ? (<div className="mx-auto">
        <h1 className="text-gray-300 text-sm mb-4 md:text-lg">Bellow is a table of other estimated rep maxes:</h1>
        <table className=" text-gray-100 w-11/12 md:w-full">
          <thead className=" bg-gray-700 text-sm md:text-xl">
            <tr>
              <th className="py-2 border-r border-gray-400 w-1/2">Rep max</th>
              <th className="py-2">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">1RM</td>
              <td className="py-2">{Math.round(result)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">2RM</td>
              <td className="py-2">{Math.round(result * 0.95)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">3RM</td>
              <td className="py-2">{Math.round(result * 0.92)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">4RM</td>
              <td className="py-2">{Math.round(result * 0.9)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">5RM</td>
              <td className="py-2">{Math.round(result * 0.88)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">6RM</td>
              <td className="py-2">{Math.round(result * 0.85)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">7RM</td>
              <td className="py-2">{Math.round(result * 0.83)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">8RM</td>
              <td className="py-2">{Math.round(result * 0.8)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">9RM</td>
              <td className="py-2">{Math.round(result * 0.77)} kg</td>
            </tr>
            <tr className=" bg-gray-800 text-gray-400 text-center border-b border-gray-500 text-sm md:text-lg">
              <td className="py-2">10RM</td>
              <td className="py-2">{Math.round(result * 0.75)} kg</td>
            </tr>
          </tbody>
        </table>
      </div>) : null}
    </div>
  );
};

export default Calculator;
