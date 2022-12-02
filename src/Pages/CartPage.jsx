import React from "react";
import { useState, useEffect } from 'react'
import "../Componets/Cart/CartPage.css";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";
import CartItem from '../Componets/Cart/CartItem'
import CartPrice from "../Componets/Cart/CartPrice"
import arr from "../Componets/Cart/DemoData"
import CartNavbar from "../Componets/Cart/CartNavbar";
import WishlistTemplate from "../Componets/Cart/WishlistTempelate";
export default function CartPage() {

  const [item, setItem] = useState([]);

  const cartdata = async () => {
    const res = await fetch('https://lenskart-clone.herokuapp.com/cart')
    const data = await res.json();
    // console.log(data)
    setItem(data);
  }
  useEffect(() => {
    cartdata()

  }, [])

  let price = 0;
  const total = () => {
    item.map(el => {
      price += parseInt(el.mPrice);
      
    })
    return price;
  }

  let discount = 0;
  let actualPrice = 0;
  const actual = () => {
    item.map(el => {
      actualPrice += parseInt(el.price);
    })
    discount = (actualPrice * 60) / 100;
    return actualPrice;
  }





  return (
    <>
      <Box w="100%" bg="rgb(251,249,247)">
        <CartNavbar />

        {/* Content Box */}
        <Box display="flex" flexDirection='row' w="87%" m="auto" gap={10} mb='50px'>
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
              <Box >
                <Text
                fontWeight='400'
                fontSize='22px'
                lineHeight='30px'
                letterSpacing='-.02em'
                color='#000042'
                
                >Add items from your wishlist</Text>
              </Box>
              <div class="scrollmenu" >
                <WishlistTemplate />
                <WishlistTemplate />
                <WishlistTemplate />
                <WishlistTemplate />
              </div>

            </Box>
          </Box>


          {/* price box */}
          <Box w="30%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
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
                     
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      letterSpacing='-.02em'
                    >12TH ANNIVERSARY SPECIAL</Text>
                  </Box>
                  <Box>
                    <Text
                      
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
                  p='5' borderRadius='12px' color='#000042' etterSpacing='-.02em'
                  boxShadow='0 1px 4px rgb(0 0 0 / 10%)'

                >

                  {/* p='16' bg= '#f7f1de' border='1px solid #e0c67c' borderRadius='12px' color='#000042' etterSpacing='-.02em' */}
                  <Box>
                    <Text
                     
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      letterSpacing='-.02em'
                    >PARTY12 applied</Text>
                  </Box>
                  <Box>
                    <Text
                     
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize='14px'
                      lineHeight='20px'
                      color='#333368'
                    >{'You are saving ₹' + discount}</Text>
                  </Box>
                </Box>
              </Box>

              <Button display='inline-flex'
                justifyContent='center'
                p='16px 24px'

                h='56px'
                // colorScheme='#11daac'
                _hover={{
                  background: "#11daac",
                  boxShadow: '0 3px 16px 0 rgb(0 0 0 / 10%)',
                  overflow: ' hidden',
                  position: 'relative',
                  zIndex: '1'
                }}
                bg='#11daac'
                borderRadius='100px'
                
                fontWeight='bold'
                color='#000042'
                fontSize='20px'
                lineHeight='24px'
                letterSpacing='-.02em'
                textDecoration='none!important'
                border='none'
              >Proceed To Checkout</Button>

            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
}


