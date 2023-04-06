import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,

} from '@chakra-ui/react'

const MealsList = () => {




  return (
    <div className='mt-5 bg-gray-800 shadow-sm rounded-lg px-3 py-4'>
      <button className='text-lg bg-blue-700 py-2 px-3 rounded-lg hover:bg-blue-600 text-white'><i class="bi bi-plus"></i> meal</button>
      <Accordion defaultIndex={[0]} allowMultiple width={"30%"} marginX={"auto"}>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton bg={"none"}
              _expanded={{ bg: "gray.600" }}
              _hover={{ bg: "gray.600" }}
              borderRadius={"5px"}
              color={"gray.300"}>
              <Box as="span" flex='1' textAlign='left' color={"gray.300"} fontSize={"xl"}>
                Meal 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className='text-gray-300'>cals/protein/fat</div>
          </AccordionPanel>
        </AccordionItem>


      </Accordion>

    </div>
  )
}

export default MealsList