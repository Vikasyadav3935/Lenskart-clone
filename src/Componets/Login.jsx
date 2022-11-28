import React from "react";
import "./Login.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Sign In</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="modalBody">
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="pic"
              className="loginImage"
            />
            <Box className="secbox">
              <Heading className="heading1">Sign In</Heading>
              <Input placeholder="Mobile/Email" className="input1" />
              <Box className="label0">
                <input type="checkbox" className="label2" />
                <label className="label1">Get update on whatsapp </label>
                <br />
              </Box>

              <Button className="btn1">Sign In</Button>
              <Box className="footer">
                <Box>New member?</Box>
                <Link>Create an Account</Link>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
