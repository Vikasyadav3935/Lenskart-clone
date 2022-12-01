import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import CartPage from '../Pages/CartPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}></Route>
        
    </Routes>
  )
}

export default AllRoutes