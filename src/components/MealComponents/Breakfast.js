import React, { useEffect } from "react";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Breakfast = () => {

  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }

  const getData = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '12f7d92fcdmshb29dc70d54946e3p182334jsnd9a69db0fb7a',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };

    fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=%2060g%20egg', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="mt-5 w-full md:w-2/5 mx-auto">
      <Accordion
        defaultIndex={[1]}
        allowMultiple

        marginX={"auto"}
      >
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
                Meal 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="text-gray-300">cals/protein/fat</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Breakfast;
