import React from "react";
import "./Workout.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  useDisclosure,
  Button,
  ModalHeader,
  VStack,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { exerciseoptions, fetchData } from "../../utils/fetchData";

import { useState } from "react";
import SearchedExercise from "../../components/Exercises/SearchedExercise";
import { Link } from "react-router-dom";

const Workout = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(15px) hue-rotate(10deg)"
    />
  );

  const { isOpen: isMainOpen, onOpen: onMainOpen, onClose: onMainClose } = useDisclosure();
  const { isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exerciseData, setData] = useState([])
  const [reps, setReps] = useState()
  const [percentage, setPercentage] = useState()
  const [rpe, setRpe] = useState()
  const [sets, setSets] = useState()

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/",
        exerciseoptions
      );

      setExercises(
        exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        )
      );
      setSearch("");

    }
    setShow(true)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };





  const handleData = (event) => {
    event.preventDefault()


  }



  return (
    <div className=" mx-8 flex flex-row gap-8 my-11">
      <div
        style={{ minHeight: "700px" }}
        className=" w-4/5  border-2 border-gray-400 rounded-lg px-3 py-2 flex justify-center"
      >
        <Tabs variant="unstyled" paddingX={"5px"}>
          <TabList color={"gray.300"}>
            <Tab fontSize={"xl"}>Monday</Tab>
            <Tab fontSize={"xl"}>Tuesday</Tab>
            <Tab fontSize={"xl"}>Wednesday</Tab>
            <Tab fontSize={"xl"}>Thursday</Tab>
            <Tab fontSize={"xl"}>Friday</Tab>
            <Tab fontSize={"xl"}>Saturday</Tab>
            <Tab fontSize={"xl"}>Sunday</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />

          <TabPanels>
            <TabPanel>
              <div className="mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onMainOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="flex flex-row gap-4 my-7 py-2 rounded-md">
                  <h1 className=" text-gray-200 pl-4 text-lg">(Exercise name)</h1>

                  <button className=" border border-gray-400 py-1  px-2 rounded-lg text-sm font-bold text-gray-200" onClick={() => { setOverlay(<OverlayOne />); onSecondOpen(); }}><i class="bi bi-plus-lg"></i> set</button>
                </div>

              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>

              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" mt-7">
                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);

                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal isCentered isOpen={isMainOpen} onClose={onMainClose} size={"2xl"}>
          {overlay}
          <ModalContent bg="gray.600">
            <div>
              <div className="flex justify-end p-2">
                <button className=" text-lg text-gray-300 " onClick={onMainClose}>
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div className=" my-5 flex flex-col gap-3 items-center">
                <h1 className=" text-white text-xl mb-3">
                  Search for exercises
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-row gap-2  mb-4"
                >
                  <input className="bg-neutral-500 rounded-md  p-2 text-white"
                    type="text"

                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  <button type="submit" className="py-2 px-3 text-gray-300 rounded-md border-2 border-gray-400">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
              {show ? (<div className=" row-el">{<SearchedExercise card={exercises} />}</div>) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal isCentered isOpen={isSecondOpen} onClose={onSecondClose} size={"2xl"}>
          {overlay}
          <ModalContent bg="gray.600">

            <div className="flex justify-end p-2">
              <button className=" text-lg text-gray-300 " onClick={onSecondClose}>
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <form onSubmit={handleData} className="flex flex-col items-center gap-3 my-10">
              <input className="bg-neutral-500 rounded-md  p-2 text-white" className="bg-black rounded-md  p-2 text-white" type="number" placeholder="Number of reps" required value={reps} onChange={(e) => setReps(e.target.value)} />
              <div className="flex flex-row items-center gap-4">
                <input className="bg-neutral-500 rounded-md  p-2 text-white" className="bg-black rounded-md  p-2 text-white" type="number" placeholder="Percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                <span className="text-gray-200">or</span>
                <input className="bg-neutral-500 rounded-md  p-2 text-white" className="bg-black rounded-md  p-2 text-white" type="number" placeholder="RPE" value={rpe} onChange={(e) => setRpe(e.target.value)} />
              </div>
              <button type="submit" className=" bg-gray-800 py-2 px-3 rounded-lg hover:bg-gray-700 text-white" onClick={onSecondClose}>Save</button>
            </form>

          </ModalContent>
        </Modal>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white text-xl">Enter 1RMs:</h1>
        <form className="flex flex-col gap-3 items-center">
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="Squat" />
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="Deadlift" />
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="Bench Press" />
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="OverHead press" />
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="Pull ups(weighted)" />
          <input className="bg-neutral-500 rounded-md  p-2 text-white" type="number" placeholder="Incline Bench Press" />
          <button type="submit" className="border border-gray-300 text-gray-300 text-lg py-2 px-3 rounded-lg"><i class="bi bi-box-arrow-in-right"></i></button>
        </form>
        <p className="text-white text-sm">You can calculate your estimated one-rep maxes <Link to="/calculator"><span className="text-gray-500 hover:underline">here</span></Link> </p>
      </div>
    </div>
  );
};

export default Workout;
