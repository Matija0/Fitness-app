import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
} from "@chakra-ui/react";

const Breakfast = () => {
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

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

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12f7d92fcdmshb29dc70d54946e3p182334jsnd9a69db0fb7a",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=%2060g%20egg",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5 w-full md:w-2/5 mx-auto">
      <button className="text-sm bg-blue-700 my-4  py-2 px-3 rounded-lg hover:bg-blue-600 text-white md:text-lg" onClick={onMainOpen}>
        <i class="bi bi-plus"></i> food
      </button>
      <Accordion defaultIndex={[1]} allowMultiple marginX={"auto"}>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton
              border={"1px"}
              bg={"none"}
              _expanded={{ bg: "gray.600" }}
              _hover={{ bg: "gray.600" }}
              borderRadius={"5px"}
              color={"gray.300"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                color={"gray.300"}
                fontSize={{ md: "md", xl: "lg" }}
              >
                Food name
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="text-gray-300">cals/protein/fat</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Modal isCentered isOpen={isMainOpen} onClose={onMainClose} size={"2xl"}>
        {overlay}
        <ModalContent bg="gray.500">
          <div>
          <div className="flex justify-end p-2">
              <button
                className=" text-lg text-gray-200 "
                onClick={() => {
                  onMainClose();
                  
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <h1 className="text-gray-200 text-xl text-center my-3">Add food</h1>
            <form className="flex flex-col gap-5 my-5 items-center">
              <div className="flex flex-row gap-4 justify-center">
              <input className="bg-gray-700 rounded-md w-1/4  p-2 text-white" type="number" placeholder="Weight (gr)"/>
              <input className="bg-gray-700 rounded-md w-2/5  p-2 text-white" placeholder="Food name"/>
              </div>
              <button className=" bg-emerald-700 py-2 px-3 text-gray-200 rounded-lg">Save</button>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Breakfast;
