import { Box, Button, Flex, Heading, HStack, Image, Switch, VStack } from '@chakra-ui/react'
import React from 'react'

const Notification = () => {
  return (
    <Box  margin={"15px 10px 10px 15px "}  >
        <Box w="600px" fontWeight={"400"} fontSize="30px" letterSpacing="-.3px">Manage Notification</Box>
        
         <Flex justifyContent={"space-between"} p="13px 0px">
            <Box display={'flex'} fontWeight={"400"} fontSize="14px">
                <Image src='https://www.lenskart.com/assets/svg/Whatsapp.svg' p={"0px 10px 0px 2px "}/>
            Whatsapp Notification
            </Box>
            <Switch/>
         </Flex>
         <hr/>
         <Flex justifyContent={"space-between"} p="13px 0px">
            <Box display={'flex'} fontWeight={"400"} fontSize="14px">
                <Image src='https://www.lenskart.com/assets/svg/Sms.svg' p={"0px 10px 0px 2px "}/>
                SMS Notification
            </Box>
            <Switch/>
         </Flex>
         <hr/>
         <Flex  justifyContent={"space-between"} p="13px 0px">
            <Box display={'flex'} fontWeight={"400"} fontSize="14px">
                <Image src='https://www.lenskart.com/assets/svg/PushNotification.svg' p={"0px 10px 0px 2px "} />
                Push Notification
            </Box>
            <Switch/>
         </Flex>
         <hr/>
         <Flex justifyContent={"space-between"} p="13px 0px">
            <Box display={'flex'} fontWeight={"400"} fontSize="14px">
                <Image src='https://www.lenskart.com/assets/svg/EmailNotification.svg' p={"0px 10px 0px 2px "}/>
                Email Notification
            </Box>
            <Switch/>
         </Flex>
         <hr/>

        


    </Box>
  )
}

export default Notification