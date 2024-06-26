import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("ID", auth?.currentUser?.uid);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error(err);
      notif();
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.localStorage.setItem("ID", auth?.currentUser?.uid);

      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const notif = () => {
    toast({
      title: "Wrong credentials!",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
    <div className="my-7 px-3 rounded-lg  bg-gray-700 py-7 md:px-14 md:flex md:flex-col md:items-center lg:w-[50%]">
      <div>
        {" "}
        <h1 className="text-white text-xl text-center font-bold mb-7">
          Login to your account
        </h1>
      </div>
      <div className=" flex justify-center gap-4">
        <button
          className=" bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg"
          onClick={signInWithGoogle}
        >
          <i class="bi bi-google"></i> Sign in with Google
        </button>
      </div>
      <div className="mt-3 flex flex-row items-center">
        <hr className=" w-48 border border-gray-600" />
        <span className="text-gray-600 "> or </span>
        <hr className="w-48 border border-gray-600" />
      </div>
      <div className="flex flex-col w-[60%] mt-3 space-y-4">
        <label for="email" className=" text-sm font-medium text-white mb-2">
          Your email:
        </label>
        <input
          type="email"
          id="email"
          className=" bg-gray-500 border-2 border-gray-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white p-2.5"
          placeholder="name@company.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password" className="mb-2 text-sm font-medium text-white">
          Your password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 text-white "
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-300"
          onClick={signIn}
        >
          Login
        </button>
      </div>

      <p class="text-sm font-light text-gray-500 mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-primary-600 hover:underline"
        >
          Register here
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
