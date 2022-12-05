import { Box, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from '../Componets/Profile'

const MyOrders = () => {
  return (
    <div>
        <Box w={"85%"} m="auto"  display={'flex'}>
    <Box display={"flex"} flexDir="column"   width={"250px"}  bg={"#eeefef"}>
        <Profile info="MY ORDERS" link="/customer/orders"/>
        <Profile info="ACCOUNT INFORMATION" link="account"/>
        <Profile info="MANAGE NOTIFICATIONS" link="notification"/>
        <Profile info="ADDRESS BOOK" link="address"/>
        <Profile info="MY PRESCRIPTIONS" link="prescription"/>
        <Profile info="SAVED CARDS" link="cards"/>
        <Profile info="CHECK VOUCHER BALANCE" link="voucher" />
        <Profile info="STORE CREDIT" link="credit"/>
    </Box>
    <Box>
        <Outlet/>
    </Box>
    </Box>
    </div>
  )
}

export default MyOrders