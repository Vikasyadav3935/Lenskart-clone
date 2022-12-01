import React from 'react';
import { Box, Center, Flex, Image, Input } from '@chakra-ui/react';
import Login from './Login';

const UpNav = () => {
  return (
    <Flex justifyContent={"space-between"}>
        <Flex border={"1px"}>
         <Center>
            <Image h="50px " w="200px" src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' />
         </Center>
         <Center>
            <Image h="26px" ml="60px"src='https://static.lenskart.com/media/mobile/images/phone_number.svg'/>
         </Center>
        </Flex>
        <Flex border={"1px"}>
        <Input w="500px"/>
        </Flex>
        <Flex justifyContent={"space-around"} border={"1px"} w="330px">
            <Center fontWeight={"400"} fontSize="13px"> Track Order</Center>
            <Flex>
                {/* <Login onClick={"onOpen"}/> */}
                <Center fontWeight={"400"} fontSize="13px">Sign In</Center>
                <Center fontWeight={"400"} fontSize="13px">Sign Up</Center>
            </Flex>
            <Center fontWeight={"400"} fontSize="13px">Wishlist</Center>
            <Center fontWeight={"400"} fontSize="13px">Cart</Center>

        </Flex>

    </Flex>
  )
}

export default UpNav