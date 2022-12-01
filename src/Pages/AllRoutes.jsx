import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import HomePage from './HomePage'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes