import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductTemplate = ({src , rating , userRated , price , name ,shape , color ,mprice , product , id}) => {
  const [iswhish , setIsWhish]=useState(false)
  const navigate = useNavigate();
  let colors
  if(color!=false && color!=undefined){
    console.log(color)
    colors  = color.split(',');
  }else{
    colors=["black"]
  }
  const handleWhishList=()=>{
    if(iswhish){
      console.log(product)
      axios.post('https://lenskart-clone.herokuapp.com/whishlist/1',{product})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
    setIsWhish(pre=>!pre)
  }
  const veiwPage=(e)=>{
    navigate(`/product/${id}`)
  }
  return (
    <GridItem >
    <Box onClick={()=>(veiwPage())} position="relative" border="1px solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Image m="auto" width="80%" src={src} alt='image'/>
        <Box  position="absolute" top="5px" right="5px" >
        <AiOutlineHeart onClick={handleWhishList} color={iswhish?"red":"black"} size="30px"/>
        </Box>
        <Box p="10px">
          <Flex justifyContent="space-between" alignItems="center">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
          <Text>{rating?rating:(Math.random() * (5 -1) +1).toFixed(1)}</Text>
          <AiFillStar size="15px" color='#0fbd95'/>
          <Text>{userRated?userRated:Math.floor(Math.random()*(999)+1)}</Text>
          </Flex>
          <Flex justifyContent="flex-end">
          {colors!=false?colors.map((ele,index)=><Box key={index}  bgColor={ele} w="20px" h="20px" ml="4px" borderRadius="50%"></Box>):<Box></Box>}
          </Flex>
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042">{name} </Text>
          <Text mt="10px" fontWeight="light" color="#000042">Shape : {shape}</Text>
          <Text mt="10px" fontWeight="bold" color="#000042">₹{price} <span style={{fontSize:"14px" , fontWeight:"lighter" , textDecoration:"line-through"}}>₹{mprice}</span></Text>
          
        </Box>
    </Box>
    </GridItem>
  )
}

export default ProductTemplate