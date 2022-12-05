import { Box, Button, Center, Flex, HStack, Image, Spacer, Switch } from "@chakra-ui/react";
import React from "react";
import Text from "./OrderComponent/Text";

const Orders = () => {
  return (
    <Box w="120%">
      <HStack spacing={"100px"} mt="15px" mb="20px">
        <HStack>
          <Image
            src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
            w={"40px"}
            h="40px"
          />
          <Box fontSize={"13.5px"} fontWeight="400">
            Get Orders Updates on Whatsapp
          </Box>
          <Switch/>
        </HStack>
        <Spacer />
        <Button
          fontSize={"13px"}
          bg="#3bb3a9"
          color={"white"}
          borderRadius="4px"
          p="12px 23px 12px 23px "
          _hover={{ backgroundColor: "#3bb3a9" }}
        >
          LOGOUT
        </Button>
      </HStack>
      <Box border={"1px"} borderColor="gray.300">
        <Box
          p={"10px 10px 10px 10px "}
          m="15px 0px 0px 15px"
          // border={"2px"}
          w="97%"
        >
          <Flex  justifyContent={"space-between"}>
            <Flex>
            <Flex>
              <Text info="Order ID :" />
              <Box
                fontSize={"14px"}
                ml="3px"
                letterSpacing="1.5px"
                fontWeight={"500"}
              >
                3664849
              </Box>
            </Flex>
            <Flex>
              <Text info="Order Date :" />
              <Box
                fontSize={"14px"}
                ml="3px"
                letterSpacing="1.5px"
                fontWeight={"500"}
              >
                14 Nov
              </Box>
            </Flex>
            </Flex>
            <Flex >
              <Text info="Total Price :" />
              <Box
                fontSize={"14px"}
                ml="3px"
                letterSpacing="1.5px"
                fontWeight={"500"}
              >
                2222
              </Box>
            </Flex>
          </Flex>
          <HStack mt={"20px"} p="10px" spacing={""} >
          <Box>
            <Box fontWeight={"500"}>Complete Your Payment</Box>
            <Box fontWeight={"350"} fontSize="14px" flexWrap={"nowrap"} display="flex">Order will be processed after payment</Box>
          </Box>
          <Button  fontSize={"13px"}
          ml="60%"
          bg="#3bb3a9"
          color={"white"}
          borderRadius="4px"
          p="12px 30px 12px 30px "
          _hover={{ backgroundColor: "#3bb3a9" }}>PAY NOW</Button>
        </HStack>
       
        </Box>
      
      </Box>
      <HStack  border={"1px"} p="10px 10px 10px 25px" borderColor="gray.300">
          <Image mr="10px" src="https://static.lenskart.com/media/mobile/universal/assets/status-pending.png" alt="warning"/>
          <Box >
          <Box color={"red"}  fontWeight="500"  fontSize={"15px"}>
          Payment & Power Submission Pending
          </Box>
          <Box color={"gray"} fontSize="14px">
          Complete your payment & submit power to process order
          </Box>
          </Box>
        </HStack>
        <Box border={"1px"} borderColor="gray.300">
        <HStack >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13784-c2-eyeglasses_vincent-chase-vc-e13784-c2-eyeglasses_g_3010.jpg"
           w={"200px"} h="100px" m="10px 0px 10px 20px"
          />
         <Box>
          <Box  fontWeight={"350"}  m="10px 0px 5px 0px ">Vincent Chase Eyeglasses</Box>
          <Box   fontWeight={"350"} fontSize="13px" mb="4px">+ Hydrophobic Anti-Glare</Box>
          <Box  fontWeight={"350"} fontSize="12px"mb={"6px"} color={"gray"}>Sold by Lenskart Pvt Ltd.</Box>
          <Box fontWeight={"500"}>₹ 1904</Box>
         </Box>
        </HStack>
        < Flex  w="97%" bg={"#eeeeee"} h="45px" m =" 10px auto" borderRadius={"4px"}> 
        <Box 
        p="10px 0px 0px 10px"
         fontWeight={"350"} letterSpacing=".6px">
           Submit "Power" to complete order
        </Box>
        <Spacer/>
        <Center mr="10px"  color={"#3bb3a9"} >
          ADD POWER 

        </Center>
        </Flex>
        </Box>
    </Box>
  );
};

export default Orders;
