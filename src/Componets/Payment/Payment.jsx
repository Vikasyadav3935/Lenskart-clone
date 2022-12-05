import React from 'react'
import CartItem from './CartItem'
import './Pay.css'
import CartNavbar from '../Cart/CartNavbar'
import { useNavigate } from 'react-router-dom'
function Payment() {


  let navigate=useNavigate();
  return (


    <>

    <CartNavbar/>
    <div id="payment-container">


<div id="addres">
    
<h1 id='ships'>Shipping Address</h1>
<div id="shipping-ad">
    

<input type="text" name="First Name*" placeholder='First Name' className='input'/>

<input type="text" name="Last Name*" placeholder="Last Name" className='input'/>

<div id="radio">
   <label>Gender</label>
<input type="radio" id="Male" name="Male" value="Male"/>
  <label for="Male">Male</label>
  <input type="radio" id="Female" name="Male" value="Female"/>
  <label for="Female">Female</label>







</div>



    <input className='input' type="number" name="Email" placeholder='Number'/>

    <input className='input' type="email" name="Email" placeholder='Email'/>

<hr/>


<input className='input' type="text" name="" value="" placeholder='Addresh Line 1'/>
<input className='input' type="text" name="" value="" placeholder='Addresh Line 2'/>


<br/>


<input className='input' type="text" name="" value="" placeholder='Zip/Postal Code'/>
<input className='input'type="text" name="" value="" placeholder='City/District'/>


<br/>
 
<input className='input' type="text" name="" value="India" placeholder='Addresh Line 1'/>
<input className='input' type="text" name="" value="" placeholder='State'/>


<br/>

<p id='shiping' onClick={()=>navigate('/payment')}>CONTINUE</p>


</div>




</div>



<CartItem/>



    </div>
    </>
  )
}

export default Payment