import React from "react";
import "./Workout.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

import RepMaxForm from "../../components/WorkoutPlanElements/RepMaxForm";

import Monday from "../../components/WorkoutPlanElements/Monday";
import Tuesday from "../../components/WorkoutPlanElements/Tuesday";
import Wednesday from "../../components/WorkoutPlanElements/Wednesday";
import Thursday from "../../components/WorkoutPlanElements/Thursday";
import Friday from "../../components/WorkoutPlanElements/Friday";
import Saturday from "../../components/WorkoutPlanElements/Saturday";
import Sunday from "../../components/WorkoutPlanElements/Sunday";

const Workout = () => {
  return (
    <div style={{ maxWidth: "1440px" }} className=" mx-11 my-11 flex flex-row justify-between">
      <div style={{ minHeight: "700px" }} className=" bg-gray-800 border border-gray-500  rounded-lg px-12 py-2">
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
      <RepMaxForm />

    </div>


  );
};

export default Workout;
