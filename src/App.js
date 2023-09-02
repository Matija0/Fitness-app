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
import Account from "./screens/Account/Account";

function App() {
  const user = auth?.currentUser;
  const verify= window.localStorage.getItem("ID")
  return (
    <div className="App">
      <div className="content-wrap">
        {verify? (<Navbar/>) : null}

        <Routes>
          <Route path="/" element={verify? (<Home />) : (<Login/>)} />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="bodyweight" element={<Bodyweight />} />
          <Route path="/tdee" element={<Tdee />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/myaccount" element={<Account/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
