import { Box, HStack, Text, Input, Select, Checkbox, Button } from "@chakra-ui/react";
import React from "react";

const Account = () => {
  return (
    <Box pl={"10px"}>
      <Box fontWeight={"400"} fontSize="30px" letterSpacing="-.3px">
        Edit Account Information
      </Box>
      <Box fontWeight={"400"} fontSize="22px">
        Account Information
      </Box>
      <HStack spacing={"20px"}>
        <Box m={"10px 0px 10px 0px"}>
          <Text fontSize={"13px"} fontWeight="500" letterSpacing={"-.6px"}>
            First Name
          </Text>
          <Input h="30px" borderRadius={"5px"} border="1px " />
        </Box>
        <Box>
          <Text fontSize={"13px"} fontWeight="500" letterSpacing={"-.6px"}>
            Last Name
          </Text>
          <Input h="30px" border="1px" />
        </Box>
      </HStack>
      <Box m={"10px 0px 10px 0px"}>
        <Text fontSize={"13px"} fontWeight="500" letterSpacing={"-.6px"}>
          Email
        </Text>
        <Input h="30px" w={"218px"} />
      </Box>
      <Box m={"10px 0px 10px 0px"}>
        <Text fontSize={"14px"} fontWeight="500" letterSpacing={"-.6px"}>
          Gender
        </Text>
        <Select fontSize={"13px"} h="26px" w={"218px"} placeholder="">
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Others</option>
        </Select>
        <Checkbox fontSize={"14px"} mt="10px" size={"sm"} >
          Change Password
        </Checkbox>
      </Box>
      <Button w="218px" h="45px"  mt="20px" backgroundColor={"#ff9310"} >Save & Continue</Button>
    </Box>
  );
};

export default Account;
