import React, { useState } from "react";
import {signOut} from "firebase/auth";
import { auth} from "../../firebase-config";
import { GiWeightLiftingUp, GiMeal } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {

  const logout= async() =>{
    try{
      await signOut(auth)
    } catch(err){
      console.error(err)
    }
      
  }
  return (
    <navbar className="flex flex-row justify-between px-7 py-2  bg-blue-900">
      <div className=" hidden md:flex flex-row gap-11  items-center">
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
                  <i class="bi bi-person-circle"></i>
                    
                  </div>
                </MenuButton>
                <MenuList bg={"gray.800"}>
                  <Link to="/account">
                    <MenuItem
                      bg={"gray.800"}
                      color="white"
                      _hover={{ bg: "gray.700" }}
                    >
                      My account
                    </MenuItem>
                  </Link>
                  
                    <MenuItem
                      bg={"gray.800"}
                      color="white"
                      _hover={{ bg: "gray.700" }}
                    >
                      Sign out
                    </MenuItem>
                  
                  
                </MenuList>
              </>
            )}
          </Menu>
        </div>
      {/*Mobile menu */}
      <div className="flex flex-row gap-7 items-center md:hidden">
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
                _hover={{ bg: "gray.500" }}
                _expanded={{ bg: "gray.500" }}
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
      </div>

      <div className=" text-2xl text-white flex flex-row  py-2 px-3 items-center gap-2 hover:bg-slate-500 cursor-pointer md:hidden rounded-lg">
        <MdOutlineAccountCircle />
      </div>
    </navbar>
  );
};

export default Navbar;
