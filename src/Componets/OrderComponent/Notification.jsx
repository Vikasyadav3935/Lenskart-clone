import { Box, Flex, Heading, HStack, Image, Switch, VStack } from '@chakra-ui/react'
import React from 'react'

const Notification = () => {
  return (
    <Box margin={"15px 10px 10px 15px "}>
        <Box  fontWeight={"400"} fontSize="30px" letterSpacing="-.3px">Manage Notification</Box>
        <VStack>
            <Flex border={"1px"}>
                <Flex>
                    <Image src=''/>
                </Flex>
                <Flex>Whatsapp Notification</Flex>
                <Switch/>
            </Flex>
            <Flex border={"1px"}>
                <Flex>
                    <Image src=''/>
                </Flex>
                <Flex>Whatsapp Notification</Flex>
                <Switch/>
            </Flex>
            <Flex border={"1px"}>
                <Flex>
                    <Image src=''/>
                </Flex>
                <Flex>Whatsapp Notification</Flex>
                <Switch/>
            </Flex>
        </VStack>
    </Box>
  )
}

export default Notification