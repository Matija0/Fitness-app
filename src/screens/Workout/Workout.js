import React from "react";
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

  return (
    <div className=" container mx-auto ">
      <div
        style={{ minHeight: "700px" }}
        className=" w-3/4 my-11 border-2 border-gray-400 rounded-lg px-3 py-2 flex justify-center"
      >
        <Tabs variant="unstyled">
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
              <div className=" mt-7">
                <button
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
                  className=" bg-teal-700 rounded-lg text-white px-3 py-2"
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
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xl"}>
        {overlay}
        <ModalContent bg="gray.600">
          <div>
            <div className="flex justify-end p-2"><button className=" text-xl text-gray-300" onClick={onClose}><i class="bi bi-x-lg"></i></button></div>
            <div className=" my-5 flex flex-col gap-3 items-center">
              <h1 className=" text-white text-lg mb-3">Search for an exercise</h1>
            <input type="text" className=" bg-gray-500 w-4/5 rounded-md p-2 text-white" />
            <button onClick={onClose} className=" bg-slate-700 px-5 py-2 text-white rounded-lg hover:bg-gray-800">Save</button>
            </div>
          </div>
        </ModalContent>
      </Modal>
      </div>
      
    </div>
  );
};

export default Workout;
