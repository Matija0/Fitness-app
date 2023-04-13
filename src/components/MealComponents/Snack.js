import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Snack = () => {
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
  )
}

export default Snack