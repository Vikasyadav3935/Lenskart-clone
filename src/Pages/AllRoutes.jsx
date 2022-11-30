import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Account from '../Componets/Account'
import MyOrders from './MyOrders'
import { Box } from '@chakra-ui/react'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/customer' element={<MyOrders/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='notification' element={<Box fontSize={"40px"}>Manage Notification</Box>}/>
        </Route>
    </Routes>
  )
}

export default AllRoutes