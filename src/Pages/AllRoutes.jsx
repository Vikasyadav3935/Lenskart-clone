
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ProductList from '../Componets/ProductComponents/ProductList'
import SingleProductPage from './SingleProductPage'
import CartPage from './CartPage'
import Login from '../Componets/Login'
import { Privateroutes } from '../ContextApi/Privateroute'
import Payment from '../Componets/Payment/Payment'
import CartItem from '../Componets/Payment/CartItem'
import Card from '../Componets/Payment/Card'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/payment' element={<Card/>}/>
       <Route path='/shiping' element={<Payment/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path='/product' element={<ProductList/>}/>
       <Route path='/product/:id' element={<SingleProductPage/>}/>
       <Route path='/cart' element={<CartPage/>}/>
       <Route path='/cart' element={
       <Privateroutes>
          <CartPage/>
       </Privateroutes>
       
       }/>

       <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes