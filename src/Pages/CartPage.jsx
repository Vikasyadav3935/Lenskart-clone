import React from "react";
import { useState, useEffect } from 'react'
import "../Componets/Cart/CartPage.css";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Image, Text, Spacer } from "@chakra-ui/react";
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
        <CartNavbar/>

        {/* Content Box */}
        <Box display="flex" flexDirection='row' w="90%" m="auto" gap={10}>
          {/* item box */}
          <Box w="60%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
                  fontFamily="lenskartsans-medium"
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
          <Box w="40%" >
            <Box display="flex" flexDirection="column" gap={30}>
              <Box>
                <Text
                  fontFamily="lenskartsans-medium"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="30px"
                  letterSpacing="-.02em"
                  color="#000042"
                >
                  Bill Details
                </Text>
              </Box>

              <Box display="flex" gap={6} alignItems="center" bg="#fff" boxShadow='base' p='6' rounded='md'>
                <Box display='flex' flexDirection='column' w='100%'>
                  {/* total price  done */}
                  <CartPrice priceTitle={"Total VIP Price"} price={'₹' + total()} />
                  {/* tax price done */}
                  <CartPrice priceTitle={"Tax"} price={'₹' + 269.82} />

                  {/* Convenience price done*/}
                  <CartPrice priceTitle={"Convenience Fees"} price={'Free'} />
                  {/* total payable amount done*/}
                  {/* some extra css thats y i call in a box */}
                  <Box fontWeight='700' fontFamily='lenskartsans-bold' fontSize='16px' lineHeight='24px'><CartPrice priceTitle={"Total payable"} price={'₹' + actual()} /></Box>

                </Box>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
}


