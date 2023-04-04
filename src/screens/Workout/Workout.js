import React from "react";
import "./Workout.css"
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
} from "@chakra-ui/react";
import { exerciseoptions, fetchData } from "../../utils/fetchData";

import { useState } from "react";


const Workout = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(15px) hue-rotate(10deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const [search, setSearch] = useState("")
  const [exercises, setExercises] = useState([""])



  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/", exerciseoptions)

      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("")
      setExercises(searchedExercises);

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch();
  }



  return (
    <div className=" container mx-auto ">

      <div
        style={{ minHeight: "700px" }}
        className=" w-4/5 my-11 border-2 border-gray-400 rounded-lg px-3 py-2 flex justify-center"
      >
        <Tabs variant="unstyled" paddingX={"5px"}>
          <TabList color={"gray.300"}>
            <Tab fontSize={"lg"}>Monday</Tab>
            <Tab fontSize={"lg"}>Tuesday</Tab>
            <Tab fontSize={"lg"}>Wednesday</Tab>
            <Tab fontSize={"lg"}>Thursday</Tab>
            <Tab fontSize={"lg"}>Friday</Tab>
            <Tab fontSize={"lg"}>Saturday</Tab>
            <Tab fontSize={"lg"}>Sunday</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />

          <TabPanels>
            <TabPanel>
              <div className=" mt-7">

                <button
                  className=" bg-red-800 rounded-lg text-white px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
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
                    onOpen();
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
                    onOpen();
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
                    onOpen();
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
                    onOpen();
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
                    onOpen();
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
                    onOpen();
                  }}
                >
                  Add exercise
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"lg"}>
          {overlay}
          <ModalContent bg="gray.600">
            <div>
              <div className="flex justify-end p-2"><button className=" text-lg text-gray-300" onClick={onClose}><i class="bi bi-x-lg"></i></button></div>
              <div className=" my-5 flex flex-col gap-3 items-center">
                <h1 className=" text-white text-lg mb-3">Search for exercises</h1>
                <form onSubmit={handleSubmit} className="flex flex-row gap-2 mb-4">
                  <input type="text" className=" bg-gray-500 w-4/5 rounded-md p-2 text-white" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                  <button type="submit" className="py-2 px-3 text-gray-300"><i class="bi bi-search"></i></button>
                </form>

              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>

    </div>
  );
};

export default Workout;
