import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Button,
  Image,
  Box,
  Heading,
  Input,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Checkbox, } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {IoLogoWhatsapp} from "react-icons/io";

const Login = () => {
  const [user, setUser] = useState("@");
  const [btn, setbtn] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlechange = (e) => {
    setUser(e.target.value);
    console.log(user.includes("@gmail."));
    // let val = user.includes("@gmail.");
    // setbtn(val);
     const buton= <Box
     fontSize={"12px"}
     mt="18px"
     color={"#ff1f1f"}
     fontWeight="500"
     letterSpacing={"-0.4px"}
   >
     Please enter a valid Email or Mobile Number.
   </Box>
   setbtn(buton);
  
  };
  return (
    <div>
      <Button onClick={onOpen}>Sign In</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalHeader></ModalHeader>
        <ModalContent w={"420px"}>
          <ModalCloseButton borderRadius={"50%"}  bg="white"/>
          <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="pic"
              // id="loginImage"
              borderRadius={"10px 10px 0px 0px "}
            />
            <Box m={"34px 45px 50px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="24px"
                color={"#333368"}
              >
                Sign In
              </Heading>

              <Input
                placeholder="Mobile/Email"
                h={"50px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                onChange={handlechange}
              />
              {user.includes("@gmail.") ? (
                ""
              ) : (
               btn
              )}

              <Box fontSize={"12px"}>
                <Checkbox mb={"20px"} mt="20px" size="sm">
                  Get Update on whatsapp
                </Checkbox>
              </Box>
              {user.includes("@gmail.") ? (
                <Button
                  bgColor={"#11daac"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#11daac" }}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  bgColor={"#cccccc"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#cccccc" }}
                >
                  Sign In
                </Button>
              )}

              <HStack spacing={"0px"} mt="19px">
                <Box fontSize={"14px"}> New member?</Box>
                <Link fontSize={"15px"} fontWeight="500" textDecoration={"underline"}>Create an Account</Link>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
