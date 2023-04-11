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
    isOpen: isMondayOpen,
    onOpen: onMondayOpen,
    onClose: onMondayClose,
  } = useDisclosure();
  const {
    isOpen: isTuesdayOpen,
    onOpen: onTuesdayOpen,
    onClose: onTuesdayClose,
  } = useDisclosure();
  const {
    isOpen: isWednesdayOpen,
    onOpen: onWednesdayOpen,
    onClose: onWednesdayClose,
  } = useDisclosure();
  const {
    isOpen: isThursdayOpen,
    onOpen: onThursdayOpen,
    onClose: onThursdayClose,
  } = useDisclosure();
  const {
    isOpen: isFridayOpen,
    onOpen: onFridayOpen,
    onClose: onFridayClose,
  } = useDisclosure();
  const {
    isOpen: isSaturdayOpen,
    onOpen: onSaturdayOpen,
    onClose: onSaturdayClose,
  } = useDisclosure();
  const {
    isOpen: isSundayOpen,
    onOpen: onSundayOpen,
    onClose: onSundayClose,
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
  const [mondayData, setMondayData] = useState([]);
  const [tuesdayData, setTuesdayData] = useState([]);
  const [wednesdayData, setWednesdayData] = useState([]);
  const [thursdayData, setThursdayData] = useState([]);
  const [fridaydayData, setFridayData] = useState([]);
  const [saturdayData, setSaturdayData] = useState([]);
  const [sundayData, setSundaydayData] = useState([]);
  const [rmData, setRmData] = useState([])
  const exercisesCollectionRef = collection(db, "exercises");
  const mondayCollectionRef = collection(db, "monday")
  const tuesdayCollectionRef = collection(db, "tuesday")
  const wednesdayCollectionRef = collection(db, "wednesday")
  const thursdayCollectionRef = collection(db, "thursday")
  const fridayCollectionRef = collection(db, "friday")
  const saturdayCollectionRef = collection(db, "saturday")
  const sundayCollectionRef = collection(db, "sunday")

  //const [newTitle, setNewTitle] = useState("");
  //const [newSet, setNewSet] = useState(0);


  const addExercise = async (title) => {
    await addDoc(exercisesCollectionRef, { title: title })
  }

  const addExerciseM = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(mondayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseT = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(tuesdayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseW = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(wednesdayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseTh = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(thursdayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseF = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(fridayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseSa = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(saturdayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }

  const addExerciseSu = async (bodyPart, equipment, gifUrl, title, target) => {
    await addDoc(sundayCollectionRef, { bodyPart: bodyPart, equipment: equipment, gifUrl: gifUrl, title: title, target: target })
  }


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
    const getExercisesM = async () => {
      const data = await getDocs(mondayCollectionRef);
      setMondayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesT = async () => {
      const data = await getDocs(tuesdayCollectionRef);
      setTuesdayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesW = async () => {
      const data = await getDocs(wednesdayCollectionRef);
      setWednesdayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesTh = async () => {
      const data = await getDocs(thursdayCollectionRef);
      setThursdayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesF = async () => {
      const data = await getDocs(fridayCollectionRef);
      setFridayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesSa = async () => {
      const data = await getDocs(saturdayCollectionRef);
      setSaturdayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const getExercisesSu = async () => {
      const data = await getDocs(sundayCollectionRef);
      setSundaydayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    getExercisesM();
    getExercisesT();
    getExercisesW();
    getExercisesTh();
    getExercisesF();
    getExercisesSa();
    getExercisesSu();


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
      console.log(exercises)
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

  const clear = () => {
    setExercises([""])
    setShow(false)
  }

  return (
    <div className=" mx-11 flex flex-row gap-8 my-11">
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
                    onMondayOpen();
                  }}
                >
                  Add exercise
                </button>

                <div className="mt-4">
                  {mondayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>

                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onTuesdayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {tuesdayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onWednesdayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {wednesdayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onThursdayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {thursdayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onFridayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {fridaydayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onSaturdayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {saturdayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
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
                    onSundayOpen();
                  }}
                >
                  Add exercise
                </button>
                <div className="mt-4">
                  {sundayData.map((exercise) => {
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
                                textAlign={"left"}
                                color={"gray.200"}
                                fontSize={"lg"}
                              >
                                {exercise.title}

                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <div className="flex justify-end"><button className=" border border-gray-300 text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit" onClick={() => { deleteExercise(exercise.id) }}><i class="bi bi-trash3"></i></button></div>
                            <div className="my-4">

                              <button
                                className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onSecondOpen();
                                }}
                              >
                                <i class="bi bi-plus-lg"></i> set
                              </button>
                            </div>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal
          isCentered
          isOpen={isMondayOpen}
          onClose={onMondayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onMondayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseM(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isTuesdayOpen}
          onClose={onTuesdayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onTuesdayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseT(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isWednesdayOpen}
          onClose={onWednesdayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onWednesdayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseW(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isThursdayOpen}
          onClose={onThursdayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onThursdayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseTh(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isFridayOpen}
          onClose={onFridayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onFridayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseF(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isSaturdayOpen}
          onClose={onSaturdayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onSaturdayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseSa(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          isOpen={isSundayOpen}
          onClose={onSundayClose}
          size={"2xl"}
        >
          {overlay}
          <ModalContent bg="gray.500">
            <div>
              <div className="flex justify-end p-2">
                <button
                  className=" text-lg text-gray-200 "
                  onClick={() => { onSundayClose(); clear(); }}
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
                <div className="row-el">
                  {exercises.map((item) => {
                    return (
                      <div key={item.id}>
                        <ExercisesList
                          item={item}
                          addExercise={() => addExerciseSu(item.bodyPart, item.equipment, item.gifUrl, item.name, item.target)}
                        />
                      </div>
                    )
                  })}
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
