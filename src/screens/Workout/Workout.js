import React, { useEffect } from "react";
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
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { exerciseoptions, fetchData } from "../../utils/fetchData";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExercisesList from "../../components/WorkoutPlanElements/ExercisesList";
import RepMaxForm from "../../components/WorkoutPlanElements/RepMaxForm";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Workout = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(15px) hue-rotate(10deg)"
    />
  );

  const {
    isOpen: isMainOpen,
    onOpen: onMainOpen,
    onClose: onMainClose,
  } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercisesData, setData] = useState([]);
  const exercisesCollectionRef = collection(db, "exercises");
  const [newTitle, setNewTitle] = useState("");
  const [newSet, setNewSet] = useState(0);

  const addExercise = async () => {
    await addDoc(exercisesCollectionRef, {
      title: newTitle,
      sets: Number(newSet),
    });
  };

  const updateExercise = async (id, sets) => {
    const exerciseDoc = doc(db, "exercises", id);
    const newFields = { sets: sets + 1 };
    await updateDoc(exerciseDoc, newFields);
  };

  const deleteExercise = async (id) => {
    const exerciseDoc = doc(db, "exercises", id);
    await deleteDoc(exerciseDoc);
  };
  useEffect(() => {
    const getExercises = async () => {
      const data = await getDocs(exercisesCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getExercises();
  }, []);

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
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleData = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto flex flex-row gap-8 my-11">
      <div
        style={{ minHeight: "700px" }}
        className=" w-4/5 bg-gray-800 border border-gray-500  rounded-lg px-3 py-2 flex justify-center"
      >
        <Tabs variant={"unstyled"} paddingX={"5px"}>
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
                  className=" bg-red-800 rounded-lg text-gray-300 px-3 py-2 hover:bg-red-700"
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onMainOpen();
                  }}
                >
                  Add exercise
                </button>

                <div className="mt-4">
                  {exercisesData.map((exercise) => {
                    return (
                      <Accordion defaultIndex={[1]} allowMultiple backgroundColor={"gray.800"} borderRadius={"5px"}>
                        <AccordionItem border={"none"} marginBottom={"15px"}>
                          <h2>
                            <AccordionButton
                              bg={"none"}
                              _expanded={{ bg: "gray.700", borderRadius: "5px" }}
                              _hover={{ bg: "gray.700", borderRadius: "5px" }}
                              paddingY={"10px"}
                              color={"gray.300"}
                            >
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <button
                              className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                              onClick={() => {
                                setOverlay(<OverlayOne />);
                                onSecondOpen();
                              }}
                            >
                              <i class="bi bi-plus-lg"></i> set
                            </button>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
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
        <Modal
          isCentered
          isOpen={isMainOpen}
          onClose={onMainClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={onMainClose}
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div className=" my-5 flex flex-col gap-3 items-center">
                <h1 className=" text-gray-200 text-xl mb-3">
                  Search for exercises
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-row gap-2  mb-4"
                >
                  <input
                    className="bg-gray-700 rounded-md  p-2 text-white"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  <button
                    type="submit"
                    className="py-2 px-3 text-gray-700 rounded-md border-2 border-gray-700 hover:bg-gray-700 hover:text-gray-200"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
              {show ? (
                <div className=" row-el">
                  {<ExercisesList card={exercises} />}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isSecondOpen}
          onClose={onSecondClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div className="flex justify-end p-2">
              <button
                className=" text-lg text-gray-900 "
                onClick={onSecondClose}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>

            <form
              onSubmit={handleData}
              className="flex flex-col items-center gap-3 my-10"
            >
              <input
                className="bg-gray-700 rounded-md  p-2 text-white"
                type="number"
                placeholder="Number of reps"
                required
              />
              <div className="flex flex-row items-center gap-3">
                <input
                  className="bg-gray-700 rounded-md  p-2 text-white"
                  type="number"
                  placeholder="Percentage"
                />
                <span className="text-gray-200">or</span>
                <input
                  className="bg-gray-700 rounded-md  p-2 text-white"
                  type="number"
                  placeholder="RPE"
                />
              </div>
              <button
                type="submit"
                className=" bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white"
                onClick={onSecondClose}
              >
                Save
              </button>
            </form>
          </ModalContent>
        </Modal>
      </div>
      <RepMaxForm />
    </div>
  );
};

export default Workout;
