import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { GiWeightLiftingUp, GiMeal } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineCalculator } from "react-icons/hi";


import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
    window.localStorage.removeItem("ID")
    navigate("/login");
    window.location.reload();
    
  };

  return (
    <navbar className="flex flex-row justify-between px-7 py-2  bg-blue-900">
      <div className=" hidden lg:flex flex-row gap-11  items-center">
        <Link to="/">
          <div className=" text-lg text-white flex flex-row gap-2 items-center py-1 px-3 hover:bg-slate-500 cursor-pointer rounded-lg">
            <BiHomeAlt2 /> <h1>Home</h1>
          </div>
        </Link>
        <Link to="/workout">
          <div className=" text-lg text-white flex flex-row items-center gap-2 py-1 px-3 hover:bg-slate-500 cursor-pointer rounded-lg">
            <GiWeightLiftingUp /> <h1>Workout plan</h1>
          </div>
        </Link>
        <div>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  bg="none"
                  color={"white"}
                  _hover={{ bg: "gray.500" }}
                  _expanded={{ bg: "gray.500" }}
                >
                  <div className="text-lg flex flex-row items-center gap-2 font-normal">
                    <HiOutlineCalculator />
                    Calculators{" "}
                    {isOpen ? (
                      <i class="bi bi-chevron-up"></i>
                    ) : (
                      <i class="bi bi-chevron-down"></i>
                    )}
                  </div>
                </MenuButton>
                <MenuList bg={"#1e3a8a"}>
                  <Link to="/calculator">
                    <MenuItem
                      bg={"#1e3a8a"}
                      color="white"
                      _hover={{ bg: "gray.500" }}
                    >
                      1RM Calculator
                    </MenuItem>
                  </Link>
                  <Link to="/tdee">
                    <MenuItem
                      bg={"#1e3a8a"}
                      color="white"
                      _hover={{ bg: "gray.500" }}
                    >
                      TDEE Calculator
                    </MenuItem>
                  </Link>
                  <Link to="/bodyweight">
                    <MenuItem
                      bg={"#1e3a8a"}
                      color="white"
                      _hover={{ bg: "gray.500" }}
                    >
                      Ideal Bodyweight Calculator
                    </MenuItem>
                  </Link>
                </MenuList>
              </>
            )}
          </Menu>
        </div>
        <Link to="/meals">
          <div className="text-lg text-white flex flex-row items-center gap-2 py-1 px-3 hover:bg-slate-500 cursor-pointer rounded-lg">
            <GiMeal /> <h1>Meals</h1>
          </div>
        </Link>
      </div>
      <div className=" hidden lg:block">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                bg="none"
                color={"white"}
                _hover={{ bg: "gray.500" }}
                _expanded={{ bg: "gray.500" }}
              >
                <div className="text-lg flex flex-row items-center gap-2 font-normal">
                  <i class="bi bi-person-circle"></i>
                </div>
              </MenuButton>
              <MenuList bg={"gray.800"}>
                <Link to="/account">
                  <button className=" text-white hover:bg-gray-700 w-full py-2">
                    My account
                  </button>
                </Link>

                <button
                  onClick={logout}
                  className=" text-white hover:bg-gray-700 w-full py-2"
                >
                  Sign out
                </button>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
      {/*Mobile menu */}
      <div className="flex justify-between items-center w-full  lg:hidden">
        <Link to="/">
          <div className=" text-2xl text-white flex flex-row py-2 px-3 gap-2 items-center hover:bg-slate-500 cursor-pointer rounded-lg">
            <BiHomeAlt2 />
          </div>
        </Link>
        <Link to="/workout">
          <div className=" text-2xl text-white flex flex-row py-2 px-3 items-center gap-2 hover:bg-slate-500 cursor-pointer rounded-lg">
            <GiWeightLiftingUp />
          </div>
        </Link>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                bg="none"
                color={"white"}
                _hover={{ bg: "none" }}
                _expanded={{ bg: "none" }}
                padding={0}
                height={"fit-content"}
                width={"fit-content"}
              >
                <div className="text-lg flex flex-row items-center gap-2 font-normal">
                  <HiOutlineCalculator />
                  {isOpen ? (
                    <i class="bi bi-chevron-up"></i>
                  ) : (
                    <i class="bi bi-chevron-down"></i>
                  )}
                </div>
              </MenuButton>
              <MenuList bg={"#1e3a8a"}>
                <Link to="/calculator">
                  <MenuItem
                    bg={"#1e3a8a"}
                    color="white"
                    _hover={{ bg: "gray.500" }}
                  >
                    1RM Calculator
                  </MenuItem>
                </Link>
                <Link to="/tdee">
                  <MenuItem
                    bg={"#1e3a8a"}
                    color="white"
                    _hover={{ bg: "gray.500" }}
                  >
                    TDEE Calculator
                  </MenuItem>
                </Link>
                <Link to="/bodyweight">
                  <MenuItem
                    bg={"#1e3a8a"}
                    color="white"
                    _hover={{ bg: "gray.500" }}
                  >
                    Ideal Bodyweight Calculator
                  </MenuItem>
                </Link>
              </MenuList>
            </>
          )}
        </Menu>

        <Link to="/meals">
          <div className="text-2xl text-white flex flex-row py-2 px-3 items-center gap-2 hover:bg-slate-500 cursor-pointer rounded-lg">
            <GiMeal />
          </div>
        </Link>
        <div className="">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  bg="none"
                  color={"white"}
                  _hover={{ bg: "none" }}
                  _expanded={{ bg: "none" }}
                  padding={0}
                  height={"fit-content"}
                  width={"fit-content"}
                >
                  <div className="text-lg flex flex-row items-center gap-2 font-normal">
                    <i class="bi bi-person-circle"></i>
                  </div>
                </MenuButton>
                <MenuList bg={"gray.800"}>
                  <Link to="/myaccount">
                    <button className=" text-white hover:bg-gray-700 w-full py-2">
                      My account
                    </button>
                  </Link>

                  <button
                    onClick={logout}
                    className=" text-white hover:bg-gray-700 w-full py-2"
                  >
                    Sign out
                  </button>
                  
                </MenuList>
              </>
            )}
          </Menu>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
