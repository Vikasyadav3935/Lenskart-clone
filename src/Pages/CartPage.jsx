import React from "react";
import { useState, useEffect } from 'react'
import "../Componets/Cart/CartPage.css";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Image, Text, Spacer,Button } from "@chakra-ui/react";
import CartItem from '../Componets/Cart/CartItem'
import CartPrice from "../Componets/Cart/CartPrice"
import arr from "../Componets/Cart/DemoData"
import CartNavbar from "../Componets/Cart/CartNavbar";
export default function CartPage() {

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(arr);
  }, [])

  let price = 0;
  const total = () => {
    item.map(el => {
      price += el.op;
    })
    return price;
  }

  let actualPrice = 0;
  const actual = () => {
    item.map(el => {
      actualPrice += el.actual;
    })
    return actualPrice;
  }


  return (
    <>
      <Box w="100%" bg="rgb(251,249,247)">
        <CartNavbar />

        {/* Content Box */}
        <Box display="flex" flexDirection='row' w="87%" m="auto" gap={10}>
          {/* item box */}
          <Box w="60%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
                  // fontFamily="rajdhani-medium"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-.02em"
                  color="#000042"
                >
                  {"Cart (" + item.length + " items)"}
                </Text>
              </Box>


              {/* item-product-card-wrapper */}
              {/* yha pe data fetch kr ke map se render krna hai mere ko --> done*/}
              <CartItem item={item} />
            </Box>
          </Box>


          {/* price box */}
          <Box w="30%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
                  fontFamily="sans-serif-medium"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-.02em"
                  color="#000042"
                >
                  Bill Details
                </Text>
              </Box>

              <Box display="flex" gap={6} alignItems="center" bg="#fff" borderRadius='12px' p='6' boxShadow='0 1px 4px rgb(0 0 0 / 10%)'>
                <Box display='flex' flexDirection='column' w='100%'>
                  {/* total price  done */}
                  <CartPrice priceTitle={"Total VIP Price"} price={'₹' + total()} />
                  {/* tax price done */}
                  <CartPrice priceTitle={"Tax"} price={'₹' + 269.82} />

                  {/* Convenience price done*/}
                  <CartPrice priceTitle={"Convenience Fees"} price={'Free'} />
                  {/* total payable amount done*/}
                  {/* some extra css thats y i call in a box */}
                  <Box fontWeight='700' 
                  // fontFamily='rajdhani-bold' 
                  fontFamily='sans-serif-bold' 
                  fontSize='16px' lineHeight='24px'><CartPrice priceTitle={"Total payable"} price={'₹' + actual()} /></Box>

                </Box>
              </Box>

              <Box class="gold-membership-wrapper ">
                <Box display='flex' flexDirection='column' gap={2} bg='rgb(255, 240, 187)'
                  p='5' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em'
                  boxShadow='0 1px 4px rgb(0 0 0 / 10%)'
                  
                >

                  {/* p='16' bg= '#f7f1de' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em' */}
                  <Box>
                    <Text
                    // fontFamily='rajdhani-bold' 
                    fontFamily='sans-serif-bold'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='14px'
                    lineHeight='20px'
                    letterSpacing='-.02em'
                    >12TH ANNIVERSARY SPECIAL</Text>
                  </Box>
                  <Box>
                    <Text
                    // fontFamily='rajdhani-bold' 
                    fontFamily='sans-serif-bold'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='14px'
                    lineHeight='20px'
                    color='#333368'
                    >Extra 60% Off. Use coupon: PARTY12</Text>
                  </Box>
                </Box>
              </Box>

              <Box class="gold-membership-wrapper ">
                <Box display='flex' flexDirection='column' gap={1} bg='#fff'
                  p='5'  borderRadius='12px' color='#000042' etterSpacing='-.02em'
                  boxShadow='0 1px 4px rgb(0 0 0 / 10%)'
                  
                >

                  {/* p='16' bg= '#f7f1de' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em' */}
                  <Box>
                    <Text
                    // fontFamily='rajdhani-bold' 
                    fontFamily='sans-serif-bold'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='14px'
                    lineHeight='20px'
                    letterSpacing='-.02em'
                    >PARTY12 applied</Text>
                  </Box>
                  <Box>
                    <Text
                    // fontFamily='rajdhani-bold' 
                    fontFamily='sans-serif-bold'
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='14px'
                    lineHeight='20px'
                    color='#333368'
                    >You are saving ₹ 899.4</Text>
                  </Box>
                </Box>
              </Box>

              <Button display='inline-flex'
              justifyContent='center'
              p='16px 24px'
              
              h='56px'
              bg='#11daac'
              borderRadius='100px'
              fontFamily='sans-serif-bold'
              fontWeight='700'
              color='#000042'
              fontSize='16px'
              lineHeight='24px'
              letterSpacing='-.02em'
              textDecoration='none!important'
              border='none'
              >proceed to checkout</Button>

            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
}


