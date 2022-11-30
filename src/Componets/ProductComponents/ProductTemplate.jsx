import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react'

const ProductTemplate = () => {
  const [iswhish , setIsWhish]=useState(false)
  return (
    <Box position="relative" border="1px solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Image m="auto" width="80%" src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-sky-blue-transparent-full-rim-wayfarer-lenskart-blu-lb-e14058-c3_lenskart-blu-lb-e14058-c3-eyeglasses_lenskart-blu-lb-e14058-c3-eyeglasses_eyeglasses_g_708323_02_2022.jpg' alt='image'/>
        <Box  position="absolute" top="5px" right="5px" >
        <AiOutlineHeart onClick={()=>setIsWhish(pre=>!pre)} color={iswhish?"red":"black"} size="30px"/>
        </Box>
        <Box p="10px">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
          <Text>4.4</Text>
          <AiFillStar size="15px" color='#0fbd95'/>
          <Text>115</Text>
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042">Lenskart Blu</Text>
          <Text mt="10px" fontWeight="light" color="#000042">Size: Medium•Zero Power</Text>
          <Text mt="10px" fontWeight="bold" color="#000042"> ₹1699</Text>
        </Box>
    </Box>
  )
}

export default ProductTemplate