import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Account from '../Componets/Account'
import MyOrders from './MyOrders'
import { Box } from '@chakra-ui/react'
import Orders from '../Componets/Orders'
import Login from '../Componets/Login'
import Notification from '../Componets/OrderComponent/Notification'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/customer' element={<MyOrders/>}>
          <Route path='orders' element={<Orders/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='notification' element={<Notification/>}/>
          <Route path='address' element={<Box>Address Book</Box>}/>
          <Route path='prescription' element={<Box>My Prescription</Box>}/>
          <Route path='cards' element={<Box>Saved Cards</Box>}/>
          <Route path='voucher' element={<Box>Check Voucher balance</Box>}/>
          <Route path='credit' element={<Box>Store credit</Box>}/>
        </Route>
        
    </Routes>
  )
}

export default AllRoutes