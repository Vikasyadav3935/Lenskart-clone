

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import HomePage from './HomePage'
import TopNav from '../Componets/Navbar/TopNav';
import Account from '../Componets/Account'
import MyOrders from './MyOrders'
import { Box } from '@chakra-ui/reac



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/customer' element={<MyOrders/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='notification' element={<Box fontSize={"40px"}>Manage Notification</Box>}/>
        </Route>
          <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes