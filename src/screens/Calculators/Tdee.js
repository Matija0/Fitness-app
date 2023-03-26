import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Button,
} from "@chakra-ui/react";

const Tdee = () => {
  return (
    <div className=" container mx-auto mt-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-xl">
          Learn How Many Calories You Burn Every Day
        </h1>
        <h2 className="text-white text-sm">
          Use the TDEE calculator to learn your Total Daily Energy Expenditure,
          a measure of how many calories you burn per day. This calorie
          calculator will also display your BMI, BMR, Macros & many other useful
          statistics!
        </h2>
        <div className="w-1/2 self-center bg-gray-700 py-5 px-4 rounded-lg">
          <FormControl color={"white"}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </HStack>
            </RadioGroup>
            <FormLabel>Age</FormLabel>
            <Input type="number" width={"15%"} />
            <FormLabel>Weight</FormLabel>
            <Input type="number" width={"15%"} />
            <FormLabel>Height</FormLabel>
            <Input type="number" width={"15%"} />
            <FormLabel>Activity</FormLabel>
            <Select>
              
              <option className="text-black">Sedentary</option>
              <option  className="text-black">Light exercise(1/2 days a week)</option>
              <option  className="text-black">Moderate exercise(3/5 days a week)</option>
              <option  className="text-black">Heavy exercise(6/7 days a week)</option>
              <option  className="text-black">Athlethe(2x per day)</option>
            </Select>
            <Button type="submit" mt={5} bg="red.700" color={"white"} paddingY="10px" paddingX={"12px"} _hover={{bg: "red.600"}}>
                Calculate
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Tdee;
