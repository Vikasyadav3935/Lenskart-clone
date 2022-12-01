import { Box, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from '../Componets/Profile'

const MyOrders = () => {
  return (
    <div>
        <Box w={"80%"} m="auto"  display={'flex'}>
    <Box display={"flex"} flexDir="column" order="1px " width={"250px"}  bg={"#eeefef"}>
        <Profile info="MY ORDERS" lin="/orders"/>
        <Profile info="ACCOUNT INFORMATION" lin="account"/>
        <Profile info="MANAGE NOTIFICATIONS" lin="notification"/>
        <Profile info="ADDRESS BOOK"/>
        <Profile info="MY PRESCRIPTIONS"/>
        <Profile info="SAVED CARDS"/>
        <Profile info="CHECK VOUCHER BALANCE"/>
        <Profile info="STORE CREDIT"/>
    </Box>
    <Box>
        <Outlet/>
    </Box>
    </Box>
    </div>
  )
}

export default MyOrders