import React from "react";
import "./Workout.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import Monday from "../../components/WorkoutPlanElements/Monday";
import Tuesday from "../../components/WorkoutPlanElements/Tuesday";
import Wednesday from "../../components/WorkoutPlanElements/Wednesday";
import Thursday from "../../components/WorkoutPlanElements/Thursday";
import Friday from "../../components/WorkoutPlanElements/Friday";
import Saturday from "../../components/WorkoutPlanElements/Saturday";
import Sunday from "../../components/WorkoutPlanElements/Sunday";

const Workout = () => {
  return (
    <>
    <div
      style={{ minHeight: "700px" }}
      className="  mx-auto my-11 w-full bg-gray-800 border border-gray-500  rounded-lg px-0 py-2 md:px-12 md:w-fit"
    >
      
      <Tabs variant={"unstyled"}>
        <TabList color={"gray.300"}>
          <Tab><li className=" text-xs md:text-xl">Monday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Tuesday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Wednesday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Thursday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Friday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Saturday</li></Tab>
          <Tab><li className=" text-xs md:text-xl">Sunday</li></Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />

        <TabPanels>
          <TabPanel>
            <Monday />
          </TabPanel>
          <TabPanel>
            <Tuesday />
          </TabPanel>
          <TabPanel>
            <Wednesday />
          </TabPanel>
          <TabPanel>
            <Thursday />
          </TabPanel>
          <TabPanel>
            <Friday />
          </TabPanel>
          <TabPanel>
            <Saturday />
          </TabPanel>
          <TabPanel>
            <Sunday />
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      
    </div>
    {/*<div className="block md:hidden w-full mt-14">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" color={"white"}>
                  Monday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Monday />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Tuesday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Tuesday />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Wednesday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Wednesday />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Thursday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Thursday />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Friday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Friday />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Saturday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Saturday />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Sunday
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Sunday />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
  </div>*/}
    </>
  );
};

export default Workout;
