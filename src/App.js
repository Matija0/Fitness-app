import React from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Workout from "./screens/Workout/Workout";
import Calculator from "./screens/Calculators/Calculator";
import Meals from "./screens/Meals/Meals";
import Footer from "./components/Footer/Footer";
import Register from "./screens/Sign In/Register";
import Login from "./screens/Sign In/Login";
import Bodyweight from "./screens/Calculators/Bodyweight";
import Tdee from "./screens/Calculators/Tdee";
import { auth } from "./firebase-config";

function App() {
  const user = auth?.currentUser;

  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="bodyweight" element={<Bodyweight />} />
          <Route path="/tdee" element={<Tdee />} />
          <Route path="/meals" element={<Meals />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
