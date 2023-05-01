import React, { useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../../utils/fetchData";
import ExercisesList from "../../components/WorkoutPlanElements/ExercisesList";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
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
  useToast,
  CircularProgress,
} from "@chakra-ui/react";

const Monday = () => {
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
  const [loader, setLoader] = useState(false)
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exerciseSets, setExerciseSets] = useState([])
  //edit
  const [editId, setEditId] = useState(null);
  const [number_reps, setNumberReps] = useState()
  const [weight, setWeight] = useState()
  const [rpe, setRpe] = useState()
  const [mondayData, setMondayData] = useState([]);
  const mondayCollectionRef = collection(db, "monday");
  const toast = useToast()
  const time = new Date();

  const addExercise = async (bodyPart, equipment, gifUrl, title, target) => {



    await addDoc(mondayCollectionRef, {
      bodyPart: bodyPart,
      equipment: equipment,
      gifUrl: gifUrl,
      title: title,
      target: target,
      time: time
    });
  };

  const addNew = () => {
    const val = {
      num: number_reps,
      weight: weight,
      rpe: rpe
    }
    if (exerciseSets != null) {
      setExerciseSets((searches) => { return [...searches, val] });
    }
    else {
      setExerciseSets([val])
    }



  }
  const updateExercise = async (e) => {
    console.log(exerciseSets)
    const ex = doc(db, "monday", editId);
    await updateDoc(ex, {
      sets: JSON.stringify(exerciseSets)
    })

  }


  const notif = () => {
    toast({
      title: 'Exercise saved',

      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  const deleteExercise = async (id) => {
    const exerciseDoc = doc(db, "monday", id);
    await deleteDoc(exerciseDoc);
  };

  const remove = (item) =>{
    const array= mondayData.map((exercise) => JSON.parse(exercise.sets))
    const index=array.indexOf(item)
    array.splice(index, 1)
    setMondayData([...array])
  }

  useEffect(() => {
    const getExercises = async () => {
      const data = await getDocs(mondayCollectionRef);
      setMondayData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getExercises();
    remove()
  }, []);

  mondayData.sort((a, b) => a.time - b.time);

  const handleSearch = async () => {
    setLoader(true)
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
    setLoader(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const clear = () => {
    setExercises([""]);
    setShow(false);
  };

  


  return (
    <>
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

        <div className="mt-7 w-3/4">
          {mondayData.map((exercise) => {
            return (
              <Accordion
                defaultIndex={[1]}
                allowMultiple
                backgroundColor={"gray.900"}
                borderRadius={"5px"}
              >
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



                        <div className=" ml-5 flex flex-row gap-7"><h1>{exercise.title}</h1>{exercise.sets != undefined ? (<span className="text-white">{(JSON.parse(exercise.sets)).length}x</span>) : null}  </div>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="flex justify-end gap-3">
                      <button
                        className="  text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit"
                        onClick={() => { deleteExercise(exercise.id) }}
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
                      <button className=" text-gray-200 text-sm  py-1  rounded-lg px-3  w-fit"

                      >
                        <i class="bi bi-info-circle"></i>
                      </button>
                    </div>


                    <div className=" my-4">
                      {exercise.sets != undefined ? (<div className="flex flex-col items-center gap-4">

                        {JSON.parse(exercise.sets).map((set, index) => {
                          return (
                            <div className="text-gray-300 w-full font-light text-base py-2 px-7  flex flex-row gap-4 justify-between items-center border-b border-gray-400" key={index}><div className="text-gray-400 text-sm"><button className=" text-rose-600 text-xs mr-2" onClick={()=>{remove(set)}}><i class="bi bi-archive-fill"></i></button> SET {index+1} </div><span className="text-lg"> {set.num} reps</span> <span className="text-lg">{set.weight} kg
                            </span></div>

                          )
                        })}
                      </div>) : null}
                    </div>
                    <button
                      className=" bg-sky-600 py-1  px-2 rounded-lg text-sm font-bold text-gray-100 hover:bg-sky-500 flex flex-row items-center gap-1"
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onSecondOpen();
                        setEditId(exercise.id)
                        setExerciseSets(exercise.sets ? JSON.parse(exercise.sets) : null)
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
      <Modal isCentered isOpen={isMainOpen} onClose={onMainClose} size={"2xl"}>
        {overlay}
        <ModalContent bg="gray.500">
          <div>
            <div className="flex justify-end p-2">
              <button
                className=" text-lg text-gray-200 "
                onClick={() => {
                  onMainClose();
                  clear();
                }}
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
                        addExercise={() => {
                          addExercise(
                            item.bodyPart,
                            item.equipment,
                            item.gifUrl,
                            item.name,
                            item.target
                          );
                          notif();

                        }

                        }
                      />
                    </div>
                  );
                })}
              </div>
            ) : (loader ? (<div className="flex flex-col items-center mb-7"><CircularProgress isIndeterminate color='cyan.500' size={"60px"} thickness="7px" trackColor="cyan.800" /></div>) : null)}


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
            <button className=" text-lg text-gray-900 " onClick={onSecondClose}>
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <div

            className="flex flex-col items-center gap-3 my-10"
          >
            <input
              className="bg-gray-700 rounded-md  p-2 text-white"
              type="number"
              placeholder="Number of reps"
              onChange={(e) => setNumberReps(e.target.value)}
              required
            />
            <div className="flex flex-row items-center gap-3">
              <input
                className="bg-gray-700 rounded-md  p-2 text-white"
                type="number"
                placeholder="Weight"
                onChange={(e) => setWeight(e.target.value)}
              />
              <span className="text-gray-200">or</span>
              <input
                className="bg-gray-700 rounded-md  p-2 text-white"
                type="number"
                onChange={(e) => setRpe(e.target.value)}
                placeholder="RPE"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white"
              onClick={() => { addNew() }}
            >
              Update
            </button>
            {!weight || !rpe ? null : <button
              type="submit"
              className=" bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white"
              onClick={() => { onSecondClose(); updateExercise() }}
            >
              Save
            </button>}
          </div>




        </ModalContent>
      </Modal>
    </>
  );
};

export default Monday;
