import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, googleProvider } from "../../firebase-config";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate=useNavigate()
  

  const signIn= async() =>{
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      localStorage.setItem("ID",auth?.currentUser?.uid)
      navigate("/") 
      await notif()
    } catch(err){
      console.error(err)
      notifError()
    }
       
  }

  const signInWithGoogle= async() =>{
    try{
      await signInWithPopup(auth, googleProvider)
      window.localStorage.setItem("ID",auth?.currentUser?.uid)
      navigate("/")
    } catch(err){
      console.error(err)
    }
      
    
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn()

  };

  const notif = () => {
    toast({
      title: "Account created",

      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const notifError = () => {
    toast({
      title: "Email already in use",

      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
    <div className="  my-7 px-3 rounded-lg bg-gray-700 py-7 md:px-14 md:flex md:flex-col md:items-center lg:w-[50%]">
      <div>
        {" "}
        <h1 className="text-white text-xl font-bold mb-7 text-center">
          Create your free account
        </h1>
      </div>
      <div className=" flex justify-center">
        <button className=" bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg" onClick={signInWithGoogle}>
          <i class="bi bi-google"></i> Sign up with Google
        </button>
        
      </div>
      <div className="mt-3 flex flex-row items-center">
        <hr className=" w-56 border border-gray-600" />
        <span className="text-gray-600 "> or </span>
        <hr className="w-56 border border-gray-600" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 lg:w-[80%]">
        <label for="email" className=" text-sm font-medium text-white mb-2">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className=" bg-gray-500 border-2 border-gray-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white p-2.5 outline-none"
          placeholder="name@company.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password" className="mb-2 text-sm font-medium text-white">
          Your password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 text-white outline-none"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label
          for="confirm-password"
          className=" mb-2 text-sm font-medium text-white "
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••"
          className="bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600  p-2.5 holder-gray-400 text-white outline-none"
          
        />
        <div className="flex flex-row items-center justify-start">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mr-2"
            required
          />
          <label for="terms" className="font-light text-gray-500">
            I accept the Terms and Conditions
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-300"
        >
          Create account
        </button>
        
          <p class="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline"
            >
              Login here
            </Link>
          </p>
        
      </form>
    </div>
    </div>
  );
};

export default Register;
