import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react'

const ProductTemplate = ({src , rating , userRated , price , name ,shape}) => {
  const [iswhish , setIsWhish]=useState(false)
  return (
    <GridItem>
    <Box position="relative" border="1px solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Image m="auto" width="80%" src={src} alt='image'/>
        <Box  position="absolute" top="5px" right="5px" >
        <AiOutlineHeart onClick={()=>setIsWhish(pre=>!pre)} color={iswhish?"red":"black"} size="30px"/>
        </Box>
        <Box p="10px">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
          <Text>{rating?rating:(Math.random() * (5 -1) +1).toFixed(1)}</Text>
          <AiFillStar size="15px" color='#0fbd95'/>
          <Text>{userRated?userRated:Math.floor(Math.random()*(999)+1)}</Text>
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042">{name}</Text>
          <Text mt="10px" fontWeight="light" color="#000042">Shape : {shape}</Text>
          <Text mt="10px" fontWeight="bold" color="#000042">{price}</Text>
        </Box>
    </Box>
    </GridItem>
  )
}

export default ProductTemplate