import React from "react";
import "./Login.css";
import { Heading, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Sign Up</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box className="signup">
              <Heading className="heading1">Create an Account</Heading>
              <Input placeholder="First Name*" className="input1" />
              <Input placeholder="Last Name" className="input1" />
              <Input placeholder="+91 Mobile*" className="input1" />
              <Input placeholder="Email*" className="input1" />
              <Input placeholder="Password*" className="input1" />

              <Box className="label0">
                <input type="checkbox" className="label2" />
                <label className="label1">Get update on whatsapp</label>
                <br />
              </Box>
              <Button className="btn1">Create an Account</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
